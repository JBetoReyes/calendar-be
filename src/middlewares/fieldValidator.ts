import {validationResult} from 'express-validator';
import {Middleware} from 'express-validator/src/base';

export const fieldValidator: Middleware = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json({errors: errors.array()});
    return;
  }
  next();
};
