import {Request} from 'express';

import {IUserModel} from './User';

export type ProtectedRequestType = Request & Omit<IUserModel, 'password'>;
