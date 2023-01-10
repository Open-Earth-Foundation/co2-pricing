import json
from decimal import Decimal
from typing import Dict
from boto3.dynamodb.types import TypeSerializer
from boto3.dynamodb.types import TypeDeserializer


serializer = TypeSerializer()
deserializer = TypeDeserializer()

def generate_put_requests(records):
    return [
        {
            'PutRequest': {
                'Item': marshall_record(record)
            }   
        }
        for record in records
        if record is not None
    ]


def marshall_record(record: Dict):
    processed = {}
    for k,v in record.items():
        processed[k] = serializer.serialize(v)

    return processed


def unmarshall_record(record: Dict):
    processed = {}
    
    for k,v in record.items():
        if isinstance(v, Decimal):
            processed[k] = float(v)
        else:
            processed[k] = v
    
    return  processed


def generate_record(raw_record, snapshot_time):
    parsed_record = json.loads(json.dumps(raw_record), parse_float=Decimal)
    return {
        **parsed_record,
        'snapshot_time': snapshot_time,
    }