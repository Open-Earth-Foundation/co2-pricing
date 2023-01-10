# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`      deploy this stack to your default AWS account/region
* `npx cdk diff`        compare deployed stack with current state
* `npx cdk synth`       emits the synthesized CloudFormation template

## Bootstrapping [(AWS CDK Docs)](https://docs.aws.amazon.com/cdk/v2/guide/bootstrapping.html)

This step is required to deploy CDK stacks to your AWS account. It creates an S3 bucket, ECR repository, and other resources required by the CDK.

* Using cdk bootstrap command (as admin user, specifying using a privileged policy):
  * `npx cdk bootstrap --cloudformation-execution-policies <POLICY_ARN>`
* Using AWS CLI (as admin user):
  1. `npx cdk bootstrap --show-template > bootstrap-template.yaml`
  2. `aws cloudformation create-stack --stack-name CDKToolkit --template-body file://bootstrap-template.yaml`
