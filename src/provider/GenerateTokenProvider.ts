import { sign } from "jsonwebtoken"
import dotenv from 'dotenv'

dotenv.config()

class GenerateTokenProvider {

    async execute(userId:string){
        const token = sign({},process.env.TOKEN_KEY as string,{
            subject: userId,
            expiresIn: "20s"
        })
        return token
    }
}


export {GenerateTokenProvider}