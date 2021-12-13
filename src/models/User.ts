import mongoose from 'mongoose';
import { Document, Schema } from 'mongoose';
import { IUser, IUserModel } from '../interfaces/User';

import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';


const UserSchema = new Schema<IUserModel>({
    email: { type: String, required: true, unique: true },
    pass: { type: String, required: true },
    avatar: { type: String, default: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y' },
    bio: {
        type: String, default: 'hello',
    },
    age: { type: Number, required: false },

}, { timestamps: true });

UserSchema.methods.comparePassword = async function (inputPass: string): Promise<boolean> {

    const user = this as IUserModel;
    const isMatch: boolean = await bcrypt.compare(inputPass, user.pass)
    return isMatch

}
UserSchema.methods.generateToken = function (): string {
    return jsonwebtoken.sign({ _id: this._id }, 'secret', {
        expiresIn: '1d'
    })
}

export const UserModel = mongoose.model<IUserModel & Document>('User', UserSchema);


