import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import {JWT_SECRET} from "../config/env";
import { ExpressMiddleware,SignUpRequest,SignInRequest, User }from "../types/interfaces";
import { loadUsers, saveUsers } from "../utils/fileHelper";

export const signUp:ExpressMiddleware = async(req:SignUpRequest,res,next)=>{   
    

   try {

    const {username,email,password} = req.body;

    if(!username ){
        res.status(401).json({message:"username is required!"})
        return;
    }
    else if(!email){
        res.status(401).json({message:"email is required!"})
        return;
    }
    else if (!password){
        res.status(401).json({message:"password is required!"})
        return;
    }

    let users = await loadUsers();

    if(users.some((u:User)=>u.email===email)){

        res.status(409).json({message:"user already exists !"})
        return;
    }

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password,salt)

    const newUser = {
        id:( users.length+1).toString(),
        username,
        email,
        password:hashPassword
    }

    users.push(newUser)
    await saveUsers(users);

    res.status(200).json({message:"User Registered Successfully"})
    

    
   } catch (error) {

    next(error)
   }

}

export const signIn:ExpressMiddleware = async(req:SignInRequest,res,next)=>{

    const {email,password} = req.body

    if(!email){
        res.status(401).json({message:"email is required!"})
        return;
    }

    if(!password){
        res.status(401).json({message:"password is required!"})
        return;
    }

  
    

    const users = await loadUsers()

    const user = await users.find((u:User)=>u.email===email)

    if(!user){

        res.status(409).json({message:"User doesn't exist!"})
        return;
       
    }

    const isValidPassword = await bcrypt.compare(password,user.password)

    if(!isValidPassword){
       res.status(409).json({message:"password is invalid !"})
    }

    const token = jwt.sign({userId:user.id},JWT_SECRET,{expiresIn:"1d"})

    const { password: _, ...userWithoutPassword } = user;


    res.status(200).json({
        message: "Logged in successfully!",
        token,
        user: userWithoutPassword
    });

}

export const signOut:ExpressMiddleware = async(req,res)=>{
    

   const token = req.headers.authorization?.split(" ")[1];

   if(!token){
    res.status(409).json({message:"invalid credentials!"})
    return;
   }

   res.status(200).json({message:"logged out successfully"})


    
}

