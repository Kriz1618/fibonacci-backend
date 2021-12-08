import express, { Express } from 'express';
import fibonacciHandler from '../controllers';

// The router was defined here because we only need one route
const router = express.Router();
router.get('/fibonacci/:num', fibonacciHandler);

export default (app: Express) => {
  app.use('/api/', router);
};
