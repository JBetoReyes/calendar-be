import {RequestHandler} from 'express';

import {IUserModel, UserModel as User} from '../models/User';

export const createUser: RequestHandler = async (req, res) => {
  const {name, email, password} = req.body;
  const userInDb = await User.findOne({email});
  console.log('user in db', userInDb);
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
  }) as IUserModel;
  try {
    await newUser.save();
    res.json({
      ok: true,
      msg: 'register',
      name: newUser.name,
      id: newUser.id,
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
