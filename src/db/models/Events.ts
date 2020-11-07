import {Document, model, Schema} from 'mongoose';

import {IUserModel} from './User';

export interface IEventModel extends Document {
  title: string;
  notes: string;
  start: Date;
  end: Date;
  User: IUserModel;
}

const EventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

EventSchema.method('toJSON', function ToJSON(this: IEventModel) {
  // eslint-disable-next-line no-unused-vars
  const {__v, _id, ...rest} = this.toObject();
  rest.id = _id;
  return rest;
});

export const EventModel = model('Event', EventSchema);
