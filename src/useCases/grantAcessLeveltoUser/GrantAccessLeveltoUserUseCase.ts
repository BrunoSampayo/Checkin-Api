
import { client } from "../../prisma/client"

class GrantAccessLeveltoUserUseCase {
    async execute(  user:string, accessLevel:string) {
        if(!user){
            throw new Error("Userid not Sended")
        }
        if(!accessLevel){
            throw new Error("AccessId not sended")
        }
        //Checando se usuario existe
        const userToBeEdit = await client.user.findFirst({
            where:{id:user}
        })
        if(!userToBeEdit){
            throw new Error("User not found")
        }
         //Checando se access existe
        const accessLeveltoAssigned =await client.access.findFirst({
            where:{
                id:accessLevel
            }
        })
        if(!accessLeveltoAssigned){
            throw new Error("Access Level not found")
        }

        //atualizando usuario
        const updatedUser = await client.user.update({
            where:{
                id:userToBeEdit.id
            },
            data:{
                accessId:accessLeveltoAssigned.id
            }
        })
        return updatedUser;
        
        


    }
}

export { GrantAccessLeveltoUserUseCase }