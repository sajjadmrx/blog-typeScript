import jsonwebtoken from 'jsonwebtoken';
import { IJwtUser } from '../interfaces/Jwt.interface';

class jsonMethods {

    // just access this method from the class
    private secretToken: string = process.env.secretToken || ''

    createTokn(data: Object, option?: { expiresIn: string }): string {
        return jsonwebtoken.sign(data, this.secretToken, option)
    }


    verifyToken(tokenInput: string): IJwtUser {

        const data = jsonwebtoken.verify(tokenInput, this.secretToken)
        return data as IJwtUser

    }



}
export default new jsonMethods()