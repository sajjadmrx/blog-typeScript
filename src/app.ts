import express, { Request, Response, NextFunction, Application } from 'express';
import mongoose from 'mongoose';
import apiRouter from './routes/api/index.routes'

const port = process.env.PORT || 3000;

const app: Application = express();


export class Blog {

    constructor() {
        this.configDB()
        this.runApp()
        this.routes()
    }

    async configDB(): Promise<void> {
        await mongoose.connect('mongodb://localhost/blog-ts')
    }

    runApp(): void {

        app.use(express.json());


        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        })
    }

    routes(): void {
        app.use('/api', apiRouter)
    }

}

