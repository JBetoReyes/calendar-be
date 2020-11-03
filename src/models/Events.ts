import {Document, model, Schema} from 'mongoose';

import {IUserModel} from './User';

const EventSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  notes: {
    type: String,
  },
  start: {
    type: Date,
    require: true,
  },
  end: {
    type: Date,
    require: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

export const EventModel = model('Event', EventSchema);

export interface IEventModel extends Document {
  title: string;
  notes: string;
  start: Date;
  end: Date;
  User: IUserModel;
}
