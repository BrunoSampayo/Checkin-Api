import { client } from "../../prisma/client"



class CreateAccessUseCase {
    async execute(name: string) {


        const userAlreadyExist = await client.access.findFirst({
            where: { name: name.toLowerCase() }
        })



        if (userAlreadyExist) {
            throw new Error("Acess level already exist.226")
        }
        //Cadastro nivel de acesso
        const access = await client.access.create({
            data: { name: name.toLowerCase() }
        })

        return access

    }
}

export { CreateAccessUseCase }