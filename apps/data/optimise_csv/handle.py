import awswrangler as wr


def handler(event, _):
    s3_path = f"s3://{event['Bucket']}/{event['Key']}"
    
    # Read the CSV file from S3
    df = wr.s3.read_csv(
        s3_path, 
        skipinitialspace=True,
        skiprows=42,
    )

    wr.s3.to_parquet(
        df=df,
        path=s3_path.replace('.csv', '.parquet'),
        dataset=True,
        mode="overwrite",
        database=event["database"],
        table=event["table"],
    )

    return {"message": "Success!"}