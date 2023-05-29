# InfluxDB NodeJS Setup

InfluxDB is an open-source time series database that is designed to store and analyze time series data. It is a popular choice for storing data from IoT devices, applications, and other systems that generate time-based data.

## Prerequisites

Before running this code, make sure you have the following prerequisites:

- Node.js (version 16 or higher) installed on your machine.
- An InfluxDB instance set up with a valid URL, token, organization, and bucket.
- Configuration values properly set in the src/config/config.ts file.

## Installation

To install InfluxDB using Docker, you can use the following command:

```bash
  docker compose up -d
```

Open - [http://localhost:8086](http://localhost:8086) and register local setup.

## Local setup

- Clone this repository to your local machine.
- Navigate to the project directory.
- Install the required dependencies by running the following command:

```bash
  npm install
```

## Usage

The provided code consists of several files:

- **src/database/index.ts**: This file initializes the InfluxDB client, creates instances of the query and write APIs, and exports them for use in other modules.
- **src/config/config.ts**: This file contains the configuration values for your InfluxDB instance. Make sure to update these values with your own details.

To use the InfluxDB client in your application, follow these steps:

1. Import the necessary modules:

```javascript
import { createPoint, queryApi, writeApi } from '../database';
```

## Support

- [InfluxDB Docs](https://docs.influxdata.com/influxdb/v2.7/)
