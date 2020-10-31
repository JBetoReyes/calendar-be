import express from 'express';

export const AuthRouter = express.Router();

AuthRouter.post('/new', (req, res) => {
  res.json({
    ok: true,
    msg: 'register',
  });
});

AuthRouter.post('/', (req, res) => {
  res.json({
    ok: true,
    msg: 'login',
  });
});

AuthRouter.get('/renew', (req, res) => {
  res.json({
    ok: true,
    msg: 'renew',
  });
});
