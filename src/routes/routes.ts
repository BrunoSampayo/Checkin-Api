import { Router } from "express";
import { CreateUserController } from "../useCases/createUser/CreateUserController";
import { AuthenticateUserController } from "../useCases/authenticateUser/AuthenticateUserUseController";
import { RefreshTokenUserController } from "../useCases/refreshTokenUser/RefreshTokenUserController";
import { GetAllUsersController } from "../useCases/getAllUsers/GetAllUsersController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import accessRouter from "./accessRoutes";

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController()
const refreshTokenUserController = new RefreshTokenUserController();
const getAllUsersController = new GetAllUsersController(); 




const router = Router();

router.post('/register', createUserController.handle)
router.post('/login', authenticateUserController.handle)
router.get("/admin/get-all-users", getAllUsersController.handle)
router.post("/refresh-token", refreshTokenUserController.handle)

router.get('/courses', ensureAuthenticated, (request, response) => {
    return response.json([
        { id: 1, name: "Nodejs" },
        { id: 2, name: "TS" },
        { id: 3, name: "Phyton" },
        { id: 4, name: "Html" },
        { id: 5, name: "Css3" },
    ])
})




router.use("/access",accessRouter)
export { router }