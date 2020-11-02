import {check} from 'express-validator';

import {fieldValidator} from './fieldValidator';

export const createUserMiddlewares = [
  check('name', 'Name is required').notEmpty(),
  check('email', 'Email is required').notEmpty().isEmail(),
  check('password', 'Password is required').notEmpty().isLength({min: 6}),
  fieldValidator,
];

export const loginMiddlewares = [
  check('name', 'Name is required').notEmpty(),
  check('email', 'Email is required').notEmpty().isEmail(),
  fieldValidator,
];
