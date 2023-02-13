import os

from flask import Flask, jsonify, request
from flask_cors import CORS

import pandas as pd

app = Flask(__name__)
CORS(app)


@app.route('/query/csv')
def query_csv():
    file_path = '__FILES__/MimiFUND.csv'
    df = pd.read_csv(file_path)
    
    params = request.args.to_dict()
    wheres = params.get('where', '')
    wheres = wheres.replace('=', '==')
    for where in wheres.split(','):
        if where:
            df = df.query(where)

    records = df.to_dict(orient='records')
    return jsonify(dict(records=records))


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 4000))
    app.run(debug=True, host='0.0.0.0', port=port)
