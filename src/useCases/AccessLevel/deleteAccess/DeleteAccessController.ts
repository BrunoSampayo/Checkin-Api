import { Request, Response } from "express";
import { DeleteAccessUseCase } from "./DeleteAccessUseCase";


class DeleteAccessController {
    async handle(req: Request, res: Response) {
        const { accessId } = req.body
        
        if (!accessId) {
           return res.status(406).json({ error: "Acess not found" })
        }

        const deleteAccessUseCase = new DeleteAccessUseCase();
        const deleteAccess = await deleteAccessUseCase.execute(accessId)

        return res.json(deleteAccess )

    }
}

export { DeleteAccessController }