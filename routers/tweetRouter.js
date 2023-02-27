import { Router } from 'express';
import tweetsController from '../controllers/tweetsController.js';

const tweetRouter = Router();

tweetRouter
  .post('/tweets', tweetsController.postTweet)
  .get('/tweets', tweetsController.getTweets)
  .get('/tweets/:username', tweetsController.getUserTweets);

export default tweetRouter;