import {RequestHandler} from 'express';
import {genSaltSync, hashSync, compareSync} from 'bcryptjs';

import {IUserModel, UserModel as User} from '../models/User';

export const createUser: RequestHandler = async (req, res) => {
  const {name, email, password} = req.body;
  const userInDb = await User.findOne({email});
  if (userInDb) {
    res.status(400).json({
      ok: false,
      msg: 'Email already in use',
    });
    return;
  }
  const salt = genSaltSync();
  const encryptedPassword = hashSync(password, salt);
  const newUser = new User({
    name,
    email,
    password: encryptedPassword,
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

export const login: RequestHandler = async (req, res) => {
  const {email, password} = req.body;
  try {
    const userInDb = (await User.findOne({email})) as IUserModel;
    if (!userInDb) {
      res.status(400).json({
        ok: false,
        msg: 'Email not found',
      });
      return;
    }
    const areEqual = compareSync(password, userInDb.password);
    if (!areEqual) {
      res.status(400).json({
        ok: false,
        msg: 'Invalid password',
      });
      return;
    }
    res.json({
      ok: true,
      msg: 'login',
      email,
      password,
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      msg: 'Please contact the administrator',
    });
  }
};

export const renewToken: RequestHandler = (req, res) => {
  res.json({
    ok: true,
    msg: 'renew token',
  });
};
