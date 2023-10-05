import { compare } from "bcryptjs";
import { client } from "../../prisma/client";
import { sign } from "jsonwebtoken";
import dotenv from 'dotenv'
import { GenerateRefreshToken } from "../../provider/GenerateRefreshToken";
import { GenerateTokenProvider } from "../../provider/GenerateTokenProvider";


type IRequest = {
    email: string,
    password:string
}

dotenv.config()
class AuthenticateUserUseCase {
    async execute({email, password}:IRequest){

        //Verificar se usuario existe
        const userAlreadyExist = await client.user.findFirst({
            where:{
                email
            }
        })
        if(!userAlreadyExist){
            throw new Error("User or password incorrect.401");
        }


        //Verifica se a senha esta correta 
        const passwordMatch = await compare(password,userAlreadyExist.password)

        if(!passwordMatch){
            throw new Error("User or password incorrect.401");
        }


        //gerar token usuario

        const generateTokenProvider = new GenerateTokenProvider()
        const token = await generateTokenProvider.execute(userAlreadyExist.id)

        await client.refreshToken.deleteMany({
            where:{
                userId:userAlreadyExist.id
            }
        })
        

        //gerar refresh token
        const generateRefreshToken = new GenerateRefreshToken()
        const refreshToken = await generateRefreshToken.execute(userAlreadyExist.id)

        return {token, refreshToken}

    }
}

export {AuthenticateUserUseCase}