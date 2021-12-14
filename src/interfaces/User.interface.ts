import { Document } from 'mongoose'
import { permissions } from '../enums/permissions.enum';

export interface ISignUpUser {
    email: string;
    pass: string;

}
export interface IUser extends ISignUpUser, Document {
    _id: Document['_id'];
    avatar: string;
    bio: string;
    age?: number;
    permissions: Array<permissions>;
}

export interface IUserModel extends IUser {
    createdAt: Date;
    updatedAt: Date;
    comparePassword(inputPass: string): Promise<boolean>;
    generateToken(): string
}

