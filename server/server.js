import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import apiCafeRouters from './routers/apiCafeRouters';
import userRouter from './routers/userRouter';

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/', apiCafeRouters);
app.use('/user', userRouter);

app.listen(PORT, () => console.log('work'));
