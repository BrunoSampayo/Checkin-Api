import { Request, Response } from "express";
import { UploadFileProvider } from "../../../provider/UploadFileProvider";

class CreateLocationController {
    async handle(req: Request, res: Response) {
        const { name, manager }: { name: string, manager: string } = req.body;
        const image = req.file


        if (image !== undefined) {

            const uploadFile = new UploadFileProvider()
            let pathName = await uploadFile.execute(image)


        }
        return res.json("Done")
    }

}

export { CreateLocationController } 