import { Request, Response, NextFunction } from 'express';
import { createPoint, queryApi, writeApi } from '../database';
import { Point } from '@influxdata/influxdb-client';
import { config } from '../config/config';

const addSensorData = (req: Request, res: Response, next: NextFunction) => {
  const newPoint: Point = createPoint(
    'temperature',
    { sensor_id: 'TLM01' },
    { value: 20.0 },
  );
  writeApi.writePoint(newPoint);
  writeApi.close().then(() => {
    res.status(201).json({ newPoint });
  });
};
const retrieveSensorData = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const fluxQuery = `from(bucket:"${config.influx.bucket}") |> range(start: 0) |> filter(fn: (r) => r._measurement == "temperature")`;
  const result = await queryApi.collectRows(fluxQuery);
  res.status(201).json(result);
};

export default { addSensorData, retrieveSensorData };
