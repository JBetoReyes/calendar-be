import {Middleware} from 'express-validator/src/base';
import {verify} from 'jsonwebtoken';

import {IUserModel} from '../db/models/User';

export const jwtValidator: Middleware = (req, res, next): void => {
  const token = (req.headers as Record<string, string>)['x-token'];
  if (!token) {
    res.status(401).json({
      ok: false,
      msg: 'The x-token header is required',
    });
    return;
  }
  try {
    const {name, email, id} = verify(
      token,
      process.env.JWT_SECRET as string,
    ) as Pick<IUserModel, 'name' | 'email' | 'id'>;
    req.name = name;
    req.email = email;
    req.id = id;
    next();
  } catch (err) {
    res.status(401).json({
      ok: false,
      msg: 'Token is invalid',
    });
  }
};
