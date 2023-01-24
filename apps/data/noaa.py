import os
import csv
import urllib.request
from datetime import datetime
from typing import Dict

import boto3

from utils.parse import generate_put_requests, generate_record
from utils.batch import grouper


def fetch(event: Dict, __):
    source_url = os.environ['SOURCE_URL']
    target_table = os.environ['TARGET_TABLE']
    with urllib.request.urlopen(source_url) as url:
        csv_file = url.read().decode("utf-8")

    reader = csv.reader(
        csv_file.splitlines(), 
        delimiter = ',', 
        skipinitialspace=True)
    lines = list(reader)[43:]

    rows = [
        dict(
            full_date=int(f"{year}{month.zfill(2)}{day.zfill(2)}"),
            year=int(year),
            month=int(month), 
            day=int(day), 
            smoothed=float(smoothed), 
            trend=float(trend)
        )
        for [year,month, day, smoothed, trend] in lines
    ]

    snapshot_time = int(datetime.now().strftime("%Y%m%d%H%M"))
    records = []
    if (event.get('all') in ['true', True] ):
        records = [
            generate_record(row, snapshot_time) 
            for row in rows
            if row is not None
        ]
    else:
        record = generate_record(rows[-1], snapshot_time)
        records.append(record)
    responses = []
    for chunk in grouper(filter(lambda item : item is not None, records), 25):
        if not chunk:
            continue
        put_requests = generate_put_requests(chunk)
        try:
            response = boto3.client('dynamodb').batch_write_item(
                RequestItems={ target_table: put_requests })
            responses.append(response)
        except Exception as e:
            print(dict(put_requests=put_requests))
            raise e

    return responses
