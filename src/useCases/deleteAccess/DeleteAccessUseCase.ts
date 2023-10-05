import { client } from "../../prisma/client"


class DeleteAccessUseCase {
    async execute(accessId: string) {
        //verficar se accessLevel referente a id ainda existe
        const existentAccess = await client.access.findFirst({ where: { id: accessId } })
        if (!existentAccess) {
            return { error: "Access with ID: " + accessId + " " + "Dont exist" }
        }
        //se existir deleta accessLevel
        await client.access.delete({
            where: {
                id: accessId
            }
        })

        //vare todos usuarios que tinha aquele nivel de acesso e limpa o dado de acesso para null
        await client.user.updateMany({
            where: {
                accessId
            },
            data: {
                accessId: null
            }
        })

        return { response: "Access with ID: " + accessId + " " + "Deleted and all users with this access cleared successfully" }
    }
}


export { DeleteAccessUseCase }