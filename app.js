import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import cardsRouter from './routes/cards.js';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

app.use('/api/index', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/cards', cardsRouter);


export default app;