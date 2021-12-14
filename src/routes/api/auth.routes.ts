import express, { Router, Request, Response } from 'express';

const authRouter: Router = express.Router();


// controllers
import auth from '../../controller/auth.controller'


authRouter.post('/login', auth.login);
authRouter.post('/signup', auth.signup);


export default authRouter