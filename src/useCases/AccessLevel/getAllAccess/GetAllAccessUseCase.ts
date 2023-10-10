import { client } from "../../../prisma/client"


class GetAllAccessUseCase {
    async execute() {
        const accesses = await client.access.findMany({})
        if (accesses.length <= 0) {
            throw new Error("Accesses not found.404")
        }
        return (accesses)
    }
}
export { GetAllAccessUseCase }