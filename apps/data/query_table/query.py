import json
import awswrangler as wr


def handler(event, _):
    # Retrieve the database.table names and column names from the request
    from_table = f"{event['database']}.{event['table_name']}"
    select_columns = ", ".join(event['columns'])

    # Build the SQL query string
    query_string = f"SELECT {from_table} FROM {select_columns}"

    # Check if filter criteria was provided in the request
    if 'filters' in event:
        filters = event['filters']
        # Add the filter criteria to the query string
        query_string += " WHERE {}".format(" AND ".join(filters))

    query_string += f" LIMIT {event.get('limit', 100)}"
    query_string += f" OFFSET {event.get('offset', 0)}"
    
    if 'order_by' in event:
        query_string += f" ORDER BY {event.get('order_by', 'id')}"

    df = wr.athena.read_sql_query(query_string)

    return {
        'statusCode': 200,
        'body': json.dumps(df.to_json())
    }