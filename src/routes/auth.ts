import express from 'express';

export const AuthRouter = express.Router();

AuthRouter.get('/', (req, res) => {
  res.json({ok: true});
});
