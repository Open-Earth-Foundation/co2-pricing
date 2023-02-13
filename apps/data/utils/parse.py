import json
from decimal import Decimal


def generate_record(raw_record, snapshot_time):
    parsed_record = json.loads(json.dumps(raw_record), parse_float=Decimal)
    return {
        **parsed_record,
        'snapshot_time': snapshot_time,
    }