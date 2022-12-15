import * as cdk from 'aws-cdk-lib';
import * as sam from 'aws-cdk-lib/aws-sam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as api from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';


export class QueryApiConstruct extends cdk.Stack {
    function: lambda.Function;
    api: api.RestApi;

    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const layerIntegration = new sam.CfnApplication(
            scope, "awssdkpandas-layer", {
            location: {
                applicationId: "arn:aws:serverlessrepo:us-east-1:336392948345:applications/aws-sdk-pandas-layer-py3-9",
                semanticVersion: "2.18.0",
            },
        })
        const layerArn = layerIntegration.getAtt("Outputs.WranglerLayer39Arn").toString()
        const layer = lambda.LayerVersion.fromLayerVersionArn(scope, "awssdkpandas-layer-version", layerArn)

        this.api = new api.RestApi(
            scope, "awssdkpandas-api", {
            restApiName: "awssdkp",
            description: "awssdkpandas api"
        })
        this.function = new lambda.Function(
            scope, "awssdkpandas-function", {
            code: lambda.Code.fromAsset('../apps/data'),
            handler: "query_table/index.handler",
            runtime: lambda.Runtime.PYTHON_3_9,
            layers: [layer],
        })
        const queryIntegration = new api.LambdaIntegration(
            this.function, {
            requestTemplates: { "application/json": '{ "statusCode": "200" }' },
        });

        this.api.root.addMethod(
            "GET", queryIntegration, {
            requestParameters: {
                "method.request.querystring.database": true,
                "method.request.querystring.table": true,
                "method.request.querystring.filters": true,
                "method.request.querystring.limit": true,
                "method.request.querystring.offset": true,
                "method.request.querystring.order": true
            }
        });
    }

}
