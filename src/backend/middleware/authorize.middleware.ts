import {  DecodedToken, ExpressMiddleware,AuthRequest } from "../types/interfaces";
import jwt from "jsonwebtoken"
import {JWT_SECRET} from "../config/env"
import { loadUsers } from "../utils/fileHelper";
import {User} from "../types/interfaces"


export const Authorize:ExpressMiddleware = async(req:AuthRequest,res,next)=>{

    try {

            let token:string|undefined;

            if(req.headers.authorization && req.headers.authorization.startsWith("bearer")){
                token = req.headers.authorization.split(" ")[1]
            }

            if(!token){
                res.status(409).json({message:"unathorized"})
                return;
            }

           

            const decoded=jwt.verify(token,JWT_SECRET) as unknown as DecodedToken

            const users = await loadUsers();

            const user = users.find((u:User)=>u.id === decoded.userId)

            if(!user){
               res.status(409).json({message:"user doesn't exist"})
               return;
            }
            req.user=user
            next()
        
    } catch (error) {
        
    }

}