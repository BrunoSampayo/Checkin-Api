import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";


class AuthenticateUserController {
    async handle(req: Request, res: Response) {
        const { username, password } = req.body;

        const authenticateUserUsecase = new AuthenticateUserUseCase();

        const token = await authenticateUserUsecase.execute({
            email: username,
            password
        })

        return res.json(token)
    }
}

export { AuthenticateUserController }