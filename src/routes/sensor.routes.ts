import express from 'express';
import { Schemas, ValidateSchema } from '../middleware/ValidateSchema';
import SensorController from '../controllers/SensorController';

const router = express.Router();

router.get('/sensor', SensorController.retrieveSensorData);
router.post(
  '/sensor',
  // ValidateSchema(Schemas.user.register),
  SensorController.addSensorData,
);

export = router;
