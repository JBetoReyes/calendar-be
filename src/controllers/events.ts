import {RequestHandler} from 'express';

import {ProtectedRequestType} from '../db/models/Auth';
import {EventModel as Event, IEventModel} from '../db/models/Events';

export const getEvents: RequestHandler = (req, res) => {
  res.json({
    ok: true,
    msg: 'getEvents',
  });
};

export const createNewEvent: RequestHandler<
  unknown,
  unknown,
  Omit<IEventModel, 'user'>
> = async (req, res) => {
  const {id} = req as ProtectedRequestType;
  const {title, notes, start, end} = req.body;
  const newEvent = new Event({
    title,
    notes,
    start,
    end,
    user: id,
  }) as IEventModel;

  try {
    await newEvent.save();
    res.json({
      ok: true,
      event: newEvent,
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      msg: 'Please contact the administrator',
    });
  }
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
