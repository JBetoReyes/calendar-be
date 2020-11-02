import express from 'express';

import {createUserMiddlewares, loginMiddlewares} from '../middlewares/auth';
import {createUser, login, renewToken} from '../controllers/auth';

export const AuthRouter = express.Router();

AuthRouter.post('/new', createUserMiddlewares, createUser);

AuthRouter.post('/', loginMiddlewares, login);

AuthRouter.get('/renew', renewToken);
