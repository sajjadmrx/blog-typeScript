import express, { Router, Request, Response } from 'express';

const userRouter: Router = express.Router();


// controllers


userRouter.get('/', (req: Request, res: Response) => {
    res.send('Hello User!');
})


export default userRouter