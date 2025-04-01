import fs from "fs"
import path from "path"

const dbFilePath = path.join(__dirname,"../users.json")



export const readFile = (filename: string)=>{
    if(!fs.existsSync(dbFilePath)) return{users:[]}
    const data = fs.readFileSync(dbFilePath,"utf-8")
    return JSON.parse(data)
}

export const writeFile = (filename:string,data:object)=>{
    fs.writeFileSync(dbFilePath,JSON.stringify(data,null,2))
}