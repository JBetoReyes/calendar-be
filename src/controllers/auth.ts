import {RequestHandler} from 'express';

export const createUser: RequestHandler = (req, res) => {
  res.json({
    ok: true,
    msg: 'register',
  });
};

export const login: RequestHandler = (req, res) => {
  res.json({
    ok: true,
    msg: 'login',
  });
};

export const renewToken: RequestHandler = (req, res) => {
  res.json({
    ok: true,
    msg: 'renew token',
  });
};
