import { client } from "../../../prisma/client";

class CreateLocationUseCase {
    async execute(locationName: string, locationLogoPath: string) {

        if (!locationName) {
            throw new Error("Data missing")
        }
        if (!locationLogoPath) {
            locationLogoPath = "default.png"
        }
        const newLocation = await client.trainingLocation.create({
            data: {
                active:true,
                logo:locationLogoPath,
                name:locationName,
            }
        })
        return newLocation
    }
}
export { CreateLocationUseCase }