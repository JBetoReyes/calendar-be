import express from 'express';
import {config} from 'dotenv';
import cors from 'cors';

import {authRouter} from './routes/auth';
import {dbConnection} from './db';
import {eventsRouter} from './routes/events';

config();
const {PORT = 4000} = process.env;
const app = express();
dbConnection();
app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/events', eventsRouter);

app.listen(PORT, () => {
  console.log('Server running on port 4000');
});
