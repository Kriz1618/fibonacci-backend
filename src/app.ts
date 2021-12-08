import express, { Request, Response } from 'express';
import setRoutes from './routes';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Backend is running');
});

// Here Iit is setting the routes to the app
setRoutes(app);

app.listen(3001, () => console.info('App listening on PORT 3001'));