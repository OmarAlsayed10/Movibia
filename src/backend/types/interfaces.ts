import {Request,Response,NextFunction} from "express";
import  {JwtPayload}  from "jsonwebtoken";
import {Document,Types} from "mongoose"


export interface User {
        id: string;
        username: string;
        email: string;
        password: string;
        watchList:[]
}

export interface SignUpRequest {
    body:{
    username:string,
    email:string,
    password:string
    }
}

export interface SignInRequest extends SignUpRequest{}

export interface UserType extends Document{
    _id:Types.ObjectId,
    username:string,
    password:string,
    email:string
}

export interface AuthRequest extends Request{
    user?:UserType | null
 }


export type ExpressMiddleware=(

    req:Request,
    res:Response,
    next:NextFunction

 ) => Promise<void>|void

 export interface DecodedToken extends JwtPayload{
    userId:string
 }



