import { InfluxDB } from '@influxdata/influxdb-client';
import { config } from '../config/config';
import { Point } from '@influxdata/influxdb-client';
import { Fields, Tags } from '../interfaces/point';

const influxDB = new InfluxDB({
  url: config.influx.url,
  token: config.influx.token,
});

export const queryApi = influxDB.getQueryApi(config.influx.org);
export const writeApi = influxDB.getWriteApi(
  config.influx.org,
  config.influx.bucket,
);

const addField = (point: Point, fieldKey: string, fieldValue: any): void => {
  if (typeof fieldValue === 'number') {
    point.floatField(fieldKey, fieldValue);
  } else if (typeof fieldValue === 'string') {
    point.stringField(fieldKey, fieldValue);
  } else if (typeof fieldValue === 'boolean') {
    point.booleanField(fieldKey, fieldValue);
  } else {
    // Handle other data types as needed
  }
};

export const createPoint = (
  measurement: string,
  tags: Tags,
  fields: Fields,
): Point => {
  const point = new Point(measurement);

  for (const tagKey in tags) {
    if (tags.hasOwnProperty(tagKey)) {
      point.tag(tagKey, tags[tagKey]);
    }
  }

  for (const fieldKey in fields) {
    if (fields.hasOwnProperty(fieldKey)) {
      const fieldValue = fields[fieldKey];
      addField(point, fieldKey, fieldValue);
    }
  }
  return point;
};
