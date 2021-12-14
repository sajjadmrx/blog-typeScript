import { Request, Response, NextFunction } from 'express'
import { IJwtUser } from '../interfaces/Jwt.interface'
import jsonTokenUtils from '../utils/jsonToken.utils'
import { UserModel } from '../models/User.model'
import { permissions } from '../enums/permissions.enum'
import { IUserModel } from '../interfaces/User.interface'
import { IRequest } from '../interfaces/Request.interface'



class authMiddleware {

    async isAuth(req: IRequest, res: Response, next: NextFunction): Promise<Response | void> {
        const token = req.get('Authorization')
        try {
            if (!token)
                throw new Error('No token provided') // catch block

            const data = jsonTokenUtils.verifyToken(token)

            const user = await UserModel.findById(data._id, '-pass')

            if (!user)
                throw new Error('User not found') // catch block

            req.user = user
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


