import { Router } from 'express';

const tweetRouter = Router();

tweetRouter
  .post('/tweets')
  .get('/tweets')
  .get('/tweets/:username');

export default tweetRouter;