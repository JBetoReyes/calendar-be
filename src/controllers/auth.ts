import {RequestHandler} from 'express';

export const createUser: RequestHandler = (req, res) => {
  const {name, email, password} = req.body;
  res.json({
    ok: true,
    msg: 'register',
    name,
    email,
    password,
  });
};

export const login: RequestHandler = (req, res) => {
  const {email, password} = req.body;
  res.json({
    ok: true,
    msg: 'login',
    email,
    password,
  });
};

export const renewToken: RequestHandler = (req, res) => {
  res.json({
    ok: true,
    msg: 'renew token',
  });
};
