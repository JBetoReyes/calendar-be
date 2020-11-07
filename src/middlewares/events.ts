import {check} from 'express-validator';

import {isDate} from '../helpers/isDate';

import {fieldValidator} from './fieldValidator';

export const createEventMiddlewares = [
  check('title', 'Title is mandatory.').notEmpty(),
  check('start', 'Start date is mandatory.').notEmpty().custom(isDate),
  check('end', 'End date is mandatory.').notEmpty().custom(isDate),
  fieldValidator,
];
export const updateEventMiddlewares = [];
export const deleteEventMiddlewares = [];
