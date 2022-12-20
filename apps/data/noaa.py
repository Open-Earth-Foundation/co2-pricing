import os
import csv
from datetime import datetime
from typing import Dict

import urllib.request

import boto3


def query(event:Dict, _):
    table_name = os.environ['TARGET_TABLE']
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table(table_name)
    response = table.query(
        KeyConditionExpression=boto3.dynamodb.conditions.Key('full_date').eq(event['full_date']),
        # adds filter to query
        FilterExpression=boto3.dynamodb.conditions.Attr('smoothed').gt(0),
        # more performance
        ConsistentRead=True,
        # limit to 1
        Limit=event.get('limit', 100),
        # sort by date
    )
    return response


def fetch(event: Dict, __):
    source_url = os.environ['SOURCE_URL']
    target_table = os.environ['TARGET_TABLE']
    with urllib.request.urlopen(source_url) as url:
        csv_file = url.read().decode("utf-8")

    data = csv.reader(csv_file.splitlines(), delimiter = ',', )
    rows = list(data)[43:]

    snapshot_time = datetime.datetime.now().strftime("%Y%m%d%H%M")
    records = []
    if (event.get('all') in ['true', True] ):
        records = [generate_record(row, snapshot_time) for row in rows]
    else:
        record = generate_record(rows[-1], snapshot_time)
        records.append(record)

    response = boto3.client('dynamodb').batch_write_item(
        RequestItems={
            target_table: generate_put_requests(records)})

    return response


def generate_put_requests(records):
    return [
        {
            'PutRequest': {
                'Item': marshall_record(record)
            }   
        }
        for record in records
    ]


def marshall_record(record):
    return {
        'snapshot_time': {'S': record['snapshot_time']},
        'full_date': {'S': record['fulld_date']},
        'year': {'S': record['year']},
        'month': {'S': record['month']},
        'day': {'S': record['day']},
        'smoothed': {'S': record['smoothed']},
        'trend': {'S': record['trend']},
    }


def generate_record(raw_line, snapshot_time):
    raw_record = {
        'year': raw_line[0],
        'month': raw_line[1],
        'day': raw_line[2],
        'smoothed': raw_line[3],
        'trend': raw_line[4],
    }
    full_date = datetime(
        int(raw_record['year']),  int(raw_record['month']), int(raw_record['day']), 
        0, 0, 0)

    return {
        **raw_record,
        'snapshot_time': snapshot_time,
        'full_date': full_date.strftime("%Y%m%d"),
    }
