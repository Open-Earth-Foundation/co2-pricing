import * as cdk from 'aws-cdk-lib';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as ecr from 'aws-cdk-lib/aws-ecr';
import * as ecs_patterns from 'aws-cdk-lib/aws-ecs-patterns';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { DockerImageAsset, Platform } from 'aws-cdk-lib/aws-ecr-assets';
import { Construct } from 'constructs';
import * as ecrdeploy from 'cdk-ecr-deployment';


export class WebAppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, { url, ...props }: cdk.StackProps & { url: string }) {
    super(scope, id, props);

    const PORT = 3000;
    const cpu = 512;
    const memoryLimitMiB = 2048;

    // Docker Image
    const repository = new ecr.Repository(this, "co2webapp", {
      repositoryName: "co2webapp",
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });
    const asset = new DockerImageAsset(
      this, 'WebAppDockerImage', {
      directory: '../apps/web',
      file: 'Dockerfile',
      platform: Platform.LINUX_AMD64
    });
    new ecrdeploy.ECRDeployment(this, 'DeployDockerImage', {
      src: new ecrdeploy.DockerImageName(asset.imageUri),
      dest: new ecrdeploy.DockerImageName(`${repository.repositoryUri}:latest`),
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
    const container = taskDefinition.addContainer("MyContainer", {
      logging: ecs.LogDriver.awsLogs({ streamPrefix: "Co2WebApp" }),
      image: ecs.ContainerImage.fromEcrRepository(repository, 'latest'),
      environment: {
        NEXT_PUBLIC_DATA_API_URL: url
      }
    });
    container.addPortMappings({ containerPort: PORT });

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
      securityGroups: [securityGroup]
    })
    const scalableTarget = fargateService.service.autoScaleTaskCount({
      minCapacity: 1,
      maxCapacity: 2
    })

    scalableTarget.scaleOnCpuUtilization('cpuScaling', {
      targetUtilizationPercent: 80
    })
    new cdk.CfnOutput(
      this, 'WebAppUrl', {
      value: fargateService.loadBalancer.loadBalancerDnsName
    })
  }

}