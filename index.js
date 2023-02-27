import chalk from 'chalk';
import cors from 'cors';
import express, { json } from 'express';
import authRouter from './routers/authRouter.js';
import tweetRouter from './routers/tweetRouter.js';

const app = express();

app.use(cors());
app.use(json());
app.use(authRouter);
app.use(tweetRouter);

app.listen(5001, () => {
  console.log(chalk.bold.blue('Servidor funfando de boas!!!'));
});
