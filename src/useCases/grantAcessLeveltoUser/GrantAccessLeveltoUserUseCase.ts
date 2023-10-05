
import { client } from "../../prisma/client"

class GrantAccessLeveltoUserUseCase {
    async execute(  user:string, accessLevel:string) {
        if(!user){
            throw new Error("User not Sended")
        }
        if(!accessLevel){
            throw new Error("Access not sended")
        }
        const userToBeEdit = await client.user.findFirst({
            where:{id:user}
        })
        if(!userToBeEdit){
            throw new Error("User not found")
        }
        const accessLeveltoAssigned
    }
}

export { GrantAccessLeveltoUserUseCase }