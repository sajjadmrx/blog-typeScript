import express, { Router, Request, Response } from 'express';

const authRouter: Router = express.Router();


// controllers
import auth from '../../controller/auth'

authRouter.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
})

authRouter.post('/login', auth.login);
authRouter.post('/signup', auth.signup);


export default authRouter