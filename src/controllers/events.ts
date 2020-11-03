import {RequestHandler} from 'express';

export const getEvents: RequestHandler = (req, res) => {
  res.json({
    ok: true,
    msg: 'getEvents',
  });
};

export const createNewEvent: RequestHandler = (req, res) => {
  res.json({
    ok: true,
    msg: 'createNewEvents',
  });
};

export const updateEvent: RequestHandler = (req, res) => {
  res.json({
    ok: true,
    msg: 'updateEvent',
  });
};

export const deleteEvent: RequestHandler = (req, res) => {
  res.json({
    ok: true,
    msg: 'deleteEvent',
  });
};
