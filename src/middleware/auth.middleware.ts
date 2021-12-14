import { Request, Response, NextFunction } from 'express'
import { IJwtUser } from '../interfaces/Jwt.interface'
import jsonTokenUtils from '../utils/jsonToken.utils'
import { UserModel } from '../models/User.model'
class authMiddleware {

    async isAuth(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        const token = req.get('Authorization')
        try {
            if (!token)
                throw new Error('No token provided') // catch block

            const data = jsonTokenUtils.verifyToken(token)

            const user = await UserModel.findById(data._id)

            if (!user)
                throw new Error('User not found') // catch block

            next()


        } catch (error) {
            res.json({
                message: 'Unauthorized',
                data: {}
            })
        }
    }

}
export default new authMiddleware()


