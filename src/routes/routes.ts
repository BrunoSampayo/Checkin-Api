import { Router } from "express";
import { CreateUserController } from "../useCases/User/createUser/CreateUserController";
import { AuthenticateUserController } from "../useCases/User/authenticateUser/AuthenticateUserUseController";
import { RefreshTokenUserController } from "../useCases/refreshTokenUser/RefreshTokenUserController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureAdminstratorAuth } from "../middlewares/ensureAdminstratorAuth";

import adminRoutes from "./adminRoutes";



const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController()
const refreshTokenUserController = new RefreshTokenUserController();



const router = Router();

router.post('/register', createUserController.handle)
router.post('/login', authenticateUserController.handle)
router.post("/refresh-token", refreshTokenUserController.handle)
router.get('/courses', ensureAuthenticated, (request, response) => {
    return (response.json([
        { id: 1, name: "Nodejs" },
        { id: 2, name: "TS" },
        { id: 3, name: "Phyton" },
        { id: 4, name: "Html" },
        { id: 5, name: "Css3" },
    ]))
})




router.use("/admin", ensureAuthenticated, ensureAdminstratorAuth, adminRoutes)
export { router }