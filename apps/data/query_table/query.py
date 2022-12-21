import json
import boto3

from utils.parse import unmarshall_record


dynamodb = boto3.resource('dynamodb')

def handler(api_event, _):
    try:
        event = api_event['queryStringParameters']
        print(event)
        table = event['table']
        if 'index' in event:
            table = f"{table}.{event['index']}"

        query_string = f"SELECT * FROM {table}"

        if 'filters' in event:
            filters = event['filters'].split(',')
            query_string += " WHERE {}".format(" AND ".join(filters))

        if 'order' in event:
            query_string += f" ORDER BY {event['order']}"

        print(query_string)
        table_items = dynamodb.meta.client.execute_statement(
            Statement=query_string
        )['Items']


        items_objs = [
            unmarshall_record(item)
            for item in table_items
        ]
        print(items_objs[0:5])

        return {
            'statusCode': 200,
            'body': json.dumps(items_objs)
        }

    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'error': str(e)})
        }