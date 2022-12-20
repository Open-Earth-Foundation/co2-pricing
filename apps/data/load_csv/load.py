from datetime import datetime
import os

import awswrangler as wr
import boto3


def handler(_, __):
    bucket = os.environ['RAW_BUCKET']
    csv_path = os.environ['CSV_S3_PATH']
    target_table = os.environ['TARGET_TABLE']
    s3_path = f"s3://{bucket}/{csv_path}"

    df = wr.s3.read_csv(
        s3_path,
        header=True
    )

    records = df.to_json(orient='records')

    snapshot_time = datetime.datetime.now().strftime("%Y%m%d%H%M")
    records = [generate_record(record, snapshot_time) for record in records]
    
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
