import {RequestHandler} from 'express';

import {UserModel as User} from '../models/User';

export const createUser: RequestHandler = async (req, res) => {
  const {name, email, password} = req.body;
  const userInDb = User.findOne({email});
  if (userInDb) {
    res.status(400).json({
      ok: false,
      msg: 'Email already in use',
    });
    return;
  }
  const newUser = new User({
    name,
    email,
    password,
  });
  try {
    await newUser.save();
    res.json({
      ok: true,
      msg: 'register',
      name,
      email,
      password,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Please contact the administrator',
    });
  }
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
