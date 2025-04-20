import fs from "fs/promises"
import path from "path"
import {User} from "../types/interfaces"

const filePath = path.join(__dirname,"../database/users.json")
export const loadUsers = async()=>{

    try {

        const data = await fs.readFile(filePath,"utf-8");
        return JSON.parse(data)
       
    } catch (error) {
        return[]
    }
}

export const saveUsers = async(users:User[]):Promise<void>=>{
    await fs.writeFile(filePath,JSON.stringify(users,null,2))
}