import express from 'express';
import SensorController from '../controllers/SensorController';

const router = express.Router();

router.get('/sensor', SensorController.retrieveSensorData);
router.post('/sensor', SensorController.addSensorData);

export = router;
