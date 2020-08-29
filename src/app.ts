import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import { requestLoggerMiddleware } from './request-logger-middleware';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(requestLoggerMiddleware);

app.get('/todo', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.json([{id: 1, description: 'Buy Bread'}]);
});

app.post('/todo', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.info(req.body);
  console.info(req.params.id);
  res.end();
});

app.put('/todo/:id', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.info(req.body);
  console.info(req.params.id);
  res.end();
});

app.delete('/todo/:id', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.info(req.params.id);
  res.end();
});

export { app };