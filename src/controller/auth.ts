import { Request, Response } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import { ParsedQs } from 'qs'
import { IAuthController } from '../interfaces/Auth'
import { ISignUpUser } from '../interfaces/User'

import { UserModel } from '../models/User'
import bcrypt from 'bcrypt'


class auth implements IAuthController {


    async login(req: Request, res: Response): Promise<Response | void> {
        try {
            const userData: ISignUpUser = req.body
            let user = await UserModel.findOne({ email: userData.email })
            if (!user) {
                return res.status(400).send({ error: 'User not found' })
            }
            const isMatch: boolean = await user.comparePassword(userData.pass)
            if (!isMatch) {
                return res.status(400).send({ error: 'User not found' })
            }
            const token: string = user.generateToken()
            res.status(200).json({
                token,
            })
        } catch (error: any) {
            res.status(500)
                .json({
                    message: 'Internal server error',
                    data: {}
                })
        }
    }

    async signup(req: Request, res: Response): Promise<Response | void> {
        try {
            const userData: ISignUpUser = req.body
            let user = await UserModel.findOne({ email: userData.email })

            if (user) {
                return res.status(400).json({
                    message: 'User already exists',
                    data: {}
                })
            }
            const pass: string = await bcrypt.hash(userData.pass, 10)
            user = await UserModel.create({
                email: userData.email,
                pass: pass,
            })

            const token = user.generateToken()

            res.status(200).json({
                message: '',
                data: {
                    token
                }
            })
        } catch (error: any) {
            res.status(500)
                .json({
                    message: 'Internal server error',
                    data: {}
                })
        }

    }

}

export default new auth()