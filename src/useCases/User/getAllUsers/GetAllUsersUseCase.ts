import { client } from "../../../prisma/client"

type UserData ={
    userId:string,
    UserName:string,
    UserEmail:string,
    Location?:string,
    AccessLevel?:string
}

class GetAllUsersUseCase {
    async execute() {
        const users = await client.user.findMany()

        if (users.length <= 0) {
            throw new Error("No users found")
        }

        const usersData:UserData[] = []
        for (let i in users) {

            let userLocation=''
            let userAccessLevel=''
            if (users[i].locationId) {
                const Location = await client.trainingLocation.findFirst({
                    where: {
                        id: users[i].locationId as string
                    }
                })
                if(Location){
                    userLocation=Location.name
                }

               
            }
            if (users[i].accessId) {
                const access = await client.access.findFirst({
                    where: {
                        id: users[i].accessId as string
                    }
                })
                if(access){
                    userAccessLevel=access.name
                }

               
            }
            


            usersData.push(
                {
                userId:users[i].id ,
                UserEmail:users[i].email,
                UserName:users[i].name,
                Location:userLocation,
                AccessLevel:userAccessLevel
                
                
                }
                
            )
           

        }
        return usersData
    }
}



export { GetAllUsersUseCase }