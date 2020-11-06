import {CustomValidator} from 'express-validator';
import moment from 'moment';

export const isDate: CustomValidator = (value) => {
  if (!value) {
    return false;
  }
  const date = moment(value);
  if (date.isValid()) {
    return true;
  }
  return false;
};
