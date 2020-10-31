import express from 'express';
import {config} from 'dotenv';

import {AuthRouter} from './routes/auth';

config();
const {PORT = 4000} = process.env;
const app = express();

app.use(express.static('public'));
app.use('/api/auth', AuthRouter);

app.listen(PORT, () => {
  console.log('Server running on port 4000');
});
