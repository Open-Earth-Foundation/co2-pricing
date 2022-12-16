import os
import datetime

from typing import Dict
import urllib.request
import uuid

import boto3

s3 = boto3.client("s3")

def handler(event: Dict, _):
    # Fetch the CSV file from the URL
    with urllib.request.urlopen(os.environ['SOURCE_URL']) as url:
        csv_file = url.read().decode("utf-8")

    # Save the CSV file to the specified S3 bucket
    params = dict(
        Bucket=os.environ["BUCKET_NAME"],
        Key=generate_key(event),
    )
    s3.put_object(
        **params,
        Body=csv_file,
        ContentType="text/csv",
    )

    return params


def generate_key(event: Dict) -> str:
    snapshot_time = datetime.datetime.now().strftime("%Y%m%d%H%M")
    return (
        event['preffix'] +
        f"snapshot_time={snapshot_time}/"+
        f"{uuid.uuid4()}.csv"
    )
