import express, { Router, Request, Response } from 'express';
import authMiddleware from '../../middleware/auth.middleware';

const apiRouter: Router = express.Router();


// routes
import authRouter from './auth.routes';
import userRouter from './user.routes';

apiRouter.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
})


apiRouter.use('/auth', authRouter)
apiRouter.use('/user', authMiddleware.isAuth, userRouter)

export default apiRouter