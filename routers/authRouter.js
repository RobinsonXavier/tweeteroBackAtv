import { Router } from 'express';
import authController from '../controllers/authControllers.js';

const authRouter = Router();

authRouter
  .post('/sign-up', authController.postUser);

export default authRouter;