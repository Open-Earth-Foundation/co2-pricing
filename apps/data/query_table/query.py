import json
import boto3

from utils.parse import unmarshall_record, retrieve_record


dynamodb = boto3.resource('dynamodb')

def handler(api_event, _):
    print(api_event)
    event = api_event['queryStringParameters']
    table = event['table']
    if 'index' in event:
        table = f"{table}.{event['index']}"

    query_string = f"SELECT {event['columns']} FROM {table}"

    if 'filters' in event:
        filters = event['filters']
        query_string += " WHERE {}".format(" AND ".join(filters))

    if 'order_by' in event:
        query_string += f" ORDER BY {event['order']}"

    table_items = dynamodb.meta.client.execute_statement(
        Statement=query_string
    )['Items']


    items_objs = [
        unmarshall_record(retrieve_record(item)) 
        for item in table_items
    ]
    print(items_objs)

    return {
        'statusCode': 200,
        'body': json.dumps(items_objs)
    }