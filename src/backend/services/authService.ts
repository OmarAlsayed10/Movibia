import { writeFile,readFile } from "../utils/jsonHelpers";
import bcrypt from "bcryptjs"

export const registerAuth = (email:string,username:string,password:string)=>{

  if(!email || !username || !password){
    return{success:false,message:"All fields are required"}
  }

    const db = readFile("users")


    if(db.users.find((user:any)=>user.username===username && user.email === email)){
      return { success: false, message: "Username or email already exists" };

    }

    const hashPassword = bcrypt.hashSync(password,10);

    const newUser = {id:db.users.length + 1 , email , username , password:hashPassword}
    db.users.push(newUser)
    writeFile("users",db)   

    return{success:true}
}

export const signAuth = (username: string, password: string) => {
    const db = readFile("users");
    const user = db.users.find((user: any) => user.username === username);
  
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return { success: false, message: "username or password is wrong" };
    }

    return{success:true}
  
}

