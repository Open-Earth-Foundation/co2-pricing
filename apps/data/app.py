import json
import os
from flask import Flask, jsonify
from flask_cors import CORS

from query_table.query import handler

app = Flask(__name__)
cors = CORS(app)

@app.route('/v1/query/<table_name>')
def query_table_handler(table_name):
    api_event = dict(queryStringParameters=dict(table=table_name))
    response = handler(api_event, None)
    return jsonify(json.loads(response['body']))


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 4000))
    app.run(debug=True, host='0.0.0.0', port=port)