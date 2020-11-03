import express from 'express';

import {
  createUserMiddlewares,
  loginMiddlewares,
  renewTokenMiddlewares,
} from '../middlewares/auth';
import {createUser, login, renewToken} from '../controllers/auth';

export const authRouter = express.Router();

authRouter.post('/new', createUserMiddlewares, createUser);

authRouter.post('/', loginMiddlewares, login);

authRouter.get('/renew', renewTokenMiddlewares, renewToken);
