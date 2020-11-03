import {Schema, model, Document} from 'mongoose';

const UserSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});

export const UserModel = model('User', UserSchema);

export interface IUserModel extends Document {
  id: string;
  name: string;
  email: string;
  password: string;
}
