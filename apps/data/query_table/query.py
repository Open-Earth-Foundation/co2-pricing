import json
import boto3

from utils.parse import unmarshall_record


dynamodb = boto3.resource('dynamodb')

def handler(api_event, _):
    response = dict(
        statusCode=500,
        headers= {'Access-Control-Allow-Origin': '*'}
    )
    try:
        event = api_event['queryStringParameters']
        table = event['table']
        if 'index' in event:
            table = f"{table}.{event['index']}"

        query_string = f"SELECT * FROM {table}"

        if 'filters' in event:
            filters = event['filters'].split(',')
            query_string += " WHERE {}".format(" AND ".join(filters))

        if 'order' in event:
            query_string += f" ORDER BY {event['order']}"

        table_items = dynamodb.meta.client.execute_statement(
            Statement=query_string
        )['Items']
        
        limit = min(event.get('limit', 100), 1000)
        offset = event.get('offset', 0)

        first_index = offset*limit
        last_index = (offset+1)*limit

        records = [
            unmarshall_record(item)
            for item in table_items[first_index:last_index]
        ]
        data = dict(records=records)

        if 'explain' in event:
            data['explain'] = query_string
        response.update(statusCode=200, body=json.dumps(data))

    except Exception as e:
        response.update(body=json.dumps({'error': str(e)}))

    return response
