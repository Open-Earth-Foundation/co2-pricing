import json
import os
from flask import Flask, jsonify, request
from flask_cors import CORS

from query_table.query import handler

from load_csv import load
import noaa

app = Flask(__name__)
cors = CORS(app)

collection_tasks = [
    (load.handler, ('mimifund', 'mimigive', 'damagescountry')),
    (noaa.fetch, ('noaa'))
]

@app.route('/v1/query/<table_name>')
def query_table_handler(table_name):
    search_params = request.args.to_dict()
    api_event = dict(
        queryStringParameters=dict(table=table_name,**search_params))
    response = handler(api_event, None)
    return jsonify(json.loads(response['body']))


@app.route('/v1/collect/<table_name>')
def collect_dataset_handler(table_name):
    search_params = request.args.to_dict()
    api_event = dict(
        queryStringParameters=dict(table=table_name,**search_params))
    
    response = None
    for task in collection_tasks:
        if table_name in task[1]:
            response = task[0](api_event, None)

    if response is None:
        return jsonify(dict(error='Table not found'))
    return jsonify(json.loads(response['body']))


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 4000))
    app.run(debug=True, host='0.0.0.0', port=port)