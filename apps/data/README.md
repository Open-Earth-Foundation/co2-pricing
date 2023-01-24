# CO2 Pricing Data API

## Installation

### Prerequisites

- Docker (optional)
- Poetry or Pipenv
- Python 3.9

### Docker

Simply run the following commands to build and run the Docker image:

```bash
docker build -t co2pricing-data-api . 
docker run -p 3000:3000 co2pricing-data-api
```

### Local

You can use either Poetry or Pipenv to install the dependencies and run the API locally.

- Using Poetry

    ```bash
    poetry install
    poetry run flask run
    ```

- Using Pipenv

    ```bash
    pipenv install
    pipenv run flask run
    ```

## API Reference

*Endpoint*: /query

*Method*: GET

*Search Parameters*:

|Property|Type|Required|Default|Description|
|---|---|---|---|---|
|table|string|Yes| |name of the table to query: [`mimifund`](#mimifund), [`mimigive`](#mimigive), [`noaa`](#noaa), [`damagescountry`](#damagescountry)|
|filters|array\<string\>|No| |an array of filters to apply to the query results (e.g. `prpt>=0.010`)|
|order|string|No| |the column name to order the records on (e.g. `year,prtp`)|
|limit|number|No|100|the maximum number of results to return *(max = 1000)*|
|offset|number|No|0|pagination offset to skip * limit|

*Example Request:*

```json
{
    "records": [
        {
            "id": 1,
            "name": "John",
            "age": 30,
            "email": "john@example.com"
        }, {
            "id": 2,
            "name": "John",
            "age": 30,
            "email": "john2@example.com"
        }
    ]
}
```

## Usage

### JavaScript Example

```javascript
const axios = require('axios');

const params = {
  table: 'mimifund',
  filters: ['prtp>0.005,prpt<0.035'],
  order: 'year',
  limit: 10,
//   offset: 2, 
};

try {
  const { records } = await axios.get('/query', { params });
    console.log(records);
} catch (error) {
    console.error(error);
}
```

---

## Table Definitions

Each table has a set of properties that can be queried. The following tables list the properties for each table.

### `mimifund`

|Property|Type|Description|
|---|---|---|
|scc number|number| |
|year|number| |
|snapshot_time|string| |
|prtp|number| |

### `mimigive`

|Property|Type|Description|
|---|---|---|
|scc number|number| |
|year|number| |
|snapshot_time|string| |
|prtp|number| |

### `noaa`

|Property|Type|Description|
|---|---|---|
|year|number| |
|month|number| |
|day|number| |
|snapshot_time|string| |
|trend|number| |
|smoothed|number| |

### `damagescountry`

|Property|Type|Description|
|---|---|---|
|snapshot_time|string| |
|83.3%|number| |
|run|number| |
|50%|number| |
|N|number| |
|SSP|number| |
|dr|number| |
|eta|number| |
|dmgfuncpar|number| |
|climate|string| |
|16.7%|number| |
|prtp|number| |
|ISO3|string| |
|RCP|string| |

---

## Contributing

Instructions on how to contribute to the API.

## License

Information about the license for the API.
