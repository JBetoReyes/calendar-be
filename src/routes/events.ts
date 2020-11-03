import {Router} from 'express';

import {jwtValidator} from '../middlewares/jwtValidator';
import {
  createEventMiddlewares,
  deleteEventMiddlewares,
  getEventsMiddlewares,
  updateEventMiddlewares,
} from '../middlewares/events';
import {
  createNewEvent,
  deleteEvent,
  getEvents,
  updateEvent,
} from '../controllers/events';

export const eventsRouter = Router();

eventsRouter.use(jwtValidator);

eventsRouter.get('/', getEventsMiddlewares, getEvents);

eventsRouter.post('/', createEventMiddlewares, createNewEvent);

eventsRouter.put('/:id', updateEventMiddlewares, updateEvent);

eventsRouter.delete('/:id', deleteEventMiddlewares, deleteEvent);
