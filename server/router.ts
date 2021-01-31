import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ message: 'Hello 👋, from Express server' });
});

router.get('/users', (req, res) => res.send(['Sid']));

export { router };
