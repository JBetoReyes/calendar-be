import express from 'express';

import {createUser, login, renewToken} from '../controllers/auth';

export const AuthRouter = express.Router();

AuthRouter.post('/new', createUser);

AuthRouter.post('/', login);

AuthRouter.get('/renew', renewToken);
