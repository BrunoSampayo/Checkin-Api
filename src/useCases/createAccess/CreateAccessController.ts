import { Request, Response } from "express";
import { CreateAccessUseCase } from "./CreateAccessUseCase";



class CreateAccessController {
    async handle(req: Request, res: Response) {
        const { name } = req.body

        if (!name) {
            return res.status(406).json({ error: "Need a name to create access" })
        }
        const createAcessUseCase = new CreateAccessUseCase()
        const access = await createAcessUseCase.execute(name)

        return res.json({ access })
    }
}

export { CreateAccessController }