import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";


class AuthenticateUserController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body;

        const authenticateUserUsecase = new AuthenticateUserUseCase();

        const token = await authenticateUserUsecase.execute({
            email,
            password
        })

        return res.json(token)
    }
}

export { AuthenticateUserController }