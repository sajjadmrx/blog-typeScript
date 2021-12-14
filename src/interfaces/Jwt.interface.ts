import { Document } from 'mongoose'

interface IJwt {
    iat: number,
    exp: number,
}

export interface IJwtUser extends IJwt {
    _id: Document['_id'],
} 