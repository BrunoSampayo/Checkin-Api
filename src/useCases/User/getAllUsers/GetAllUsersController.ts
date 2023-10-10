import { Request, Response } from "express"
import { GetAllUsersUseCase } from "./GetAllUsersUseCase"


class GetAllUsersController {
    async handle(req: Request, res: Response) {
        const getAllUsersUseCase = new GetAllUsersUseCase();

        const users = await getAllUsersUseCase.execute()

        return res.json(users);
    }
}

export { GetAllUsersController }