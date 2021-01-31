import express from 'express';
import { router } from './router';

const PORT = 4201;
const HOSTNAME = '127.0.0.1';
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested, Content-Type, Accept',
  );
  res.header('Access-COntrol-Allow-Access', 'OPTIONS, GET, POST, PUT, DELETE');

  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  } else {
    console.log(`${req.ip} ${req.method} ${req.url}`);
    next();
  }
});

app.use(express.json());
app.use('/', router);

app.listen(PORT, HOSTNAME, () => {
  console.log(`Sever now listening at http://${HOSTNAME}:${PORT}`);
});
