import { Document } from 'mongoose'

export interface ISignUpUser {
    email: string;
    pass: string;
}
export interface IUser extends ISignUpUser {
    _id: Document['_id'];
    avatar: string;
    bio: string;
    age?: number;

}

export interface IUserModel extends IUser {
    createdAt: Date;
    updatedAt: Date;
    comparePassword(inputPass: string): Promise<boolean>;
    generateToken(): string
}

