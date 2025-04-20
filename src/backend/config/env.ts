import {config} from "dotenv"

config({path:`.env${process.env.NODE_ENV||".development"}.local`})

if (!process.env.JWT_SECRET) {
    throw new Error("Missing required environment variable: JWT_SECRET");
    
}

export const{
    NODE_ENV,
    JWT_SECRET
}=process.env



