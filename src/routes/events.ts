import {Router} from 'express';

import {getEventsMiddlewares} from '../middlewares/events';
import {getEvents} from '../controllers/events';

export const eventsRouter = Router();

eventsRouter.get('/', getEventsMiddlewares, getEvents);
