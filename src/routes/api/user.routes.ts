import express, { Router, Request, Response } from 'express';
import { IRequest } from '../../interfaces/Request.interface';

const userRouter: Router = express.Router();


// controllers


userRouter.get('/', (req: IRequest, res: Response) => {

    res.json(req.user?.toJSON())
})


export default userRouter