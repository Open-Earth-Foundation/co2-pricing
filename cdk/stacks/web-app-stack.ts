import * as cdk from 'aws-cdk-lib';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as ecs_patterns from 'aws-cdk-lib/aws-ecs-patterns';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import { DockerImageAsset, Platform } from 'aws-cdk-lib/aws-ecr-assets';
import { Construct } from 'constructs';

interface WebAppStackProps extends cdk.StackProps {
  url: string;
  certificateArn?: string;
}
export class WebAppStack extends cdk.Stack {
  readonly certificateArn?: string;

  constructor(scope: Construct, id: string, { url, certificateArn, ...props }: WebAppStackProps) {
    super(scope, id, props);

    this.certificateArn = certificateArn;
    const PORT = 3000;
    const cpu = 512;
    const memoryLimitMiB = 2048;

    // Docker Image
    const asset = new DockerImageAsset(
      this, 'WebAppDockerImage', {
      directory: '../apps/web',
      file: 'Dockerfile',
      platform: Platform.LINUX_AMD64,
    });

    // Task & Container Definition
    const taskDefinition = new ecs.FargateTaskDefinition(
      this, 'TaskDef', {
      memoryLimitMiB,
      cpu,
      runtimePlatform: {
        operatingSystemFamily: ecs.OperatingSystemFamily.LINUX,
      }
    });
    taskDefinition.addContainer("MyContainer", {
      logging: ecs.LogDriver.awsLogs({ streamPrefix: "Co2WebApp" }),
      image: ecs.ContainerImage.fromDockerImageAsset(asset),
      image: ecs.ContainerImage.fromDockerImageAsset(asset),
      environment: {
        NEXT_PUBLIC_DATA_API_URL: url
      },
      portMappings: [{ containerPort: PORT }],
    });

    // ECS Cluster
    const vpc = new ec2.Vpc(this, 'Vpc', { maxAzs: 2 });
    const cluster = new ecs.Cluster(
      this, "MyECSCluster", {
      clusterName: "MyECSCluster",
      containerInsights: true,
      vpc,
    });

    // Security
    const securityGroup = new ec2.SecurityGroup(
      this, `My-security-group`, {
      vpc: vpc,
      allowAllOutbound: true,
      description: 'My Security Group'
    });
    securityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(PORT));

    const fargateService = new ecs_patterns.ApplicationLoadBalancedFargateService(
      this, 'MyFargateService', {
      cluster,
      publicLoadBalancer: true,
      cpu: 512,
      desiredCount: 1,
      memoryLimitMiB: 2048,
      taskDefinition,
      securityGroups: [securityGroup],
    })

    const scalableTarget = fargateService.service.autoScaleTaskCount({
      minCapacity: 1,
      maxCapacity: 5
    })
    scalableTarget.scaleOnCpuUtilization('cpuScaling', {
      targetUtilizationPercent: 80
    })

    this.tryAddSslCertificate(fargateService)
  }

  tryAddSslCertificate(fargateService: ecs_patterns.ApplicationLoadBalancedFargateService) {
    if (!this.certificateArn) return

    const sslCertificate = acm.Certificate.fromCertificateArn(
      this, 'Certificate', this.certificateArn)

    fargateService.loadBalancer.addListener('Listener', {
      port: 443,
      certificates: [sslCertificate],
      defaultTargetGroups: [fargateService.targetGroup]
    });
  }

}