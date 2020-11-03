import express from 'express';
import {config} from 'dotenv';
import cors from 'cors';

import {AuthRouter} from './routes/auth';
import {dbConnection} from './db';

config();
const {PORT = 4000} = process.env;
const app = express();
dbConnection();
app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use('/api/auth', AuthRouter);

app.listen(PORT, () => {
  console.log('Server running on port 4000');
});
