import { Request,Response } from "express"
import { GrantAccessLeveltoUserUseCase } from "./GrantAccessLeveltoUserUseCase";


class GrantAccessLeveltoUserController {
    async handle(req: Request, res: Response){
        const{userId,accessLevelId}= req.body;

        const grantAccessLeveltoUserUseCase = new GrantAccessLeveltoUserUseCase();
        const updateAccessLevel = await grantAccessLeveltoUserUseCase.execute(userId,accessLevelId);

        return res.json(updateAccessLevel);
    }
}

export {GrantAccessLeveltoUserController}