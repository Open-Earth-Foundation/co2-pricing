import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigtw from 'aws-cdk-lib/aws-apigateway';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';


export class QueryFeature extends Construct {
    public _lambda: lambda.Function;
    public role: iam.Role;
    public endpoint: apigtw.Resource;

    constructor(scope: Construct, id: string, resource: apigtw.Resource) {
        super(scope, id);
        this.role = new iam.Role(scope, "QueryRole", {
            assumedBy: new iam.ServicePrincipal("lambda.amazonaws.com"),
            managedPolicies: [
                iam.ManagedPolicy.fromAwsManagedPolicyName("service-role/AWSLambdaBasicExecutionRole"),
            ]
        })
        const layer = lambda.LayerVersion.fromLayerVersionArn(
            scope, "awssdkpandas-layer-version",
            'arn:aws:lambda:us-east-1:336392948345:layer:AWSSDKPandas-Python39:2')
        this._lambda = new lambda.Function(
            scope, "QueryTable", {
            code: lambda.Code.fromAsset('../apps/data'),
            handler: "query_table/query.handler",
            runtime: lambda.Runtime.PYTHON_3_9,
            layers: [layer],
            functionName: cdk.PhysicalName.GENERATE_IF_NEEDED,
            role: this.role
        })
        const queryIntegration = new apigtw.LambdaIntegration(
            this._lambda, {
            requestTemplates: { "application/json": '{ "statusCode": "200" }' },
            requestParameters: {
                "integration.request.querystring.table": "method.request.querystring.table",
                "integration.request.querystring.index": "method.request.querystring.index",
                "integration.request.querystring.filters": "method.request.querystring.filters",
                "integration.request.querystring.order": "method.request.querystring.order"
            }
        });

        this.endpoint = resource.addResource(id)
        this.endpoint.addMethod(
            "GET", queryIntegration, {
            authorizationType: apigtw.AuthorizationType.NONE,
            requestParameters: {
                "method.request.querystring.table": true,
                "method.request.querystring.index": true,
                "method.request.querystring.filters": true,
                "method.request.querystring.order": true
            }
        });
    }

    addQueryPermissions(table: dynamodb.ITable) {
        table.grantReadData(this.role)
        this.role.addToPolicy(new iam.PolicyStatement({
            effect: iam.Effect.ALLOW,
            resources: [table.tableArn],
            actions: [
                'dynamodb:PartiQLUpdate',
                'dynamodb:PartiQLSelect',
                'dynamodb:PartiQLInsert',
                'dynamodb:PartiQLDelete'
            ]
        }))
    }

}
