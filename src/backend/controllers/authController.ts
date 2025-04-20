import { Request, Response,RequestHandler } from "express";
import { registerAuth,signAuth } from "../services/authService";

export const signup : RequestHandler = (req:Request,res:Response):void=>{
    const {email,username,password}= req.body;
    const result = registerAuth(email,username,password)

    if(!result.success){
        res.status(400).json({error:result.message})
        return;
        
    }

    res.json({ message: "You have successfully registered" });

};

export const login : RequestHandler = (req:Request,res:Response):void => {
    const { username, password } = req.body;
    const result = signAuth(username, password);
    if (!result.success) {
      res.status(400).json({ error: result.message });
      return;
    }

    res.json({ message: "You have successfully logged in" }); 
    
}