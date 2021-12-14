import express, { Router, Request, Response } from 'express';

const apiRouter: Router = express.Router();


// routes
import authRouter from './auth.routes';


apiRouter.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
})


apiRouter.use('/auth', authRouter)


export default apiRouter