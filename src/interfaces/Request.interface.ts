import { IUserModel } from "./User.interface";
import { Request } from "express";




export interface IRequest extends Request {
    user?: IUserModel
}