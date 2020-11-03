import mongoose from 'mongoose';

export const dbConnection = async () => {
  try {
    await mongoose.connect('mongodb://root:root@localhost:27017/calendar-app', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('DB online');
  } catch (error) {
    throw new Error(`Error while trying to connect to db ${error}`);
  }
};
