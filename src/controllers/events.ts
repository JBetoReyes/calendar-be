import {RequestHandler} from 'express';

import {ProtectedRequestType} from '../db/models/Auth';
import {EventModel as Event, IEventModel} from '../db/models/Events';

export const getEvents: RequestHandler = async (req, res) => {
  try {
    const events = await Event.find({}).populate('user', 'name');
    res.json({
      ok: true,
      events,
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      msg: 'Please contact the administrator',
    });
  }
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

type IdRequestType = {
  params: Pick<IEventModel, 'id'>;
} & ProtectedRequestType;
export const updateEvent: RequestHandler<
  Pick<IEventModel, 'id'>,
  unknown,
  Omit<IEventModel, 'user'>
> = async (req, res) => {
  const {id} = req as IdRequestType;
  const {id: eventId} = req.params;
  const {title, notes, start, end} = req.body;
  try {
    const eventToUpdate = await Event.findById(eventId);
    if (!eventToUpdate) {
      res.status(404).json({
        ok: false,
        msg: 'Event to update not found.',
      });
      return;
    }
    if ((eventToUpdate as IEventModel).user.toString() !== id) {
      res.status(401).json({
        ok: false,
        msg: "You don't have enough privileges.",
      });
      return;
    }
    const newEvent = await Event.findByIdAndUpdate(
      eventId,
      {
        title,
        notes,
        start,
        end,
        user: id,
      },
      {new: true},
    );
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

export const deleteEvent: RequestHandler<
  Pick<IEventModel, 'id'>,
  unknown
> = async (req, res) => {
  const {id: eventId} = req.params;
  const {id: uid} = req as IdRequestType;
  try {
    const eventToDelete = await Event.findById(eventId);
    if (!eventToDelete) {
      res.status(404).json({
        ok: false,
        msg: 'Event to delete not found.',
      });
      return;
    }
    const eventUser = (eventToDelete as IEventModel).user.toString();
    if (eventUser !== uid) {
      res.status(401).json({
        ok: false,
        msg: "You don't have enough privileges.",
      });
      return;
    }
    await eventToDelete.deleteOne();
    res.json({
      ok: true,
      msg: 'Event deleted',
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      msg: 'Please contact the administrator.',
    });
  }
};
