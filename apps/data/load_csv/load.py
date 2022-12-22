from datetime import datetime
import os
import json

import awswrangler as wr
import boto3

from utils.parse import generate_put_requests, generate_record
from utils.batch import grouper


def handler(_, __):
    bucket = os.environ['RAW_BUCKET']
    csv_path = os.environ['CSV_S3_PATH']
    target_table = os.environ['TARGET_TABLE']
    s3_path = f"s3://{bucket}/{csv_path}"

    df = wr.s3.read_csv(
        s3_path,
        skip_blank_lines=True
    )
    df.fillna(0, inplace=True)

    records = df.to_dict(orient='records')

    snapshot_time = datetime.now().strftime("%Y%m%d%H%M")
    records = [
        generate_record(record, snapshot_time) 
        for record in records
    ]

    responses = []
    for chunk in grouper(records, 25):
        table_requests = generate_put_requests(chunk)
        # beatify the print json
        print(json.dumps(table_requests, indent=4))
        response = boto3.client('dynamodb').batch_write_item(
            RequestItems={target_table:table_requests})

        responses.append(response)

    return responses
