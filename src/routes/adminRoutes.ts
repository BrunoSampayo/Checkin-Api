import {Router} from 'express'

import { CreateAccessController } from "../useCases/AccessLevel/createAccess/CreateAccessController";
import { DeleteAccessController } from '../useCases/AccessLevel/deleteAccess/DeleteAccessController';
import { GetAllAccessController } from '../useCases/AccessLevel/getAllAccess/GetAllAccessController';
import { GrantAccessLeveltoUserController } from '../useCases/AccessLevel/grantAcessLeveltoUser/GrantAccessLeveltoUserController';
import { GetAllUsersController } from "../useCases/User/getAllUsers/GetAllUsersController";
import { CreateLocationController } from '../useCases/Location/createLocation/CreateLocationController';
import uploadConfig from '../config/multer';

const adminRouter = Router()

const createAccessController = new CreateAccessController();
const deleteAccessController = new DeleteAccessController();
const getAllAccessController = new GetAllAccessController();
const grantAccessLeveltoUserController = new GrantAccessLeveltoUserController();
const getAllUsersController = new GetAllUsersController();
const createLocationController = new CreateLocationController();

adminRouter.post("/access", createAccessController.handle); // criar nivel de acesso
adminRouter.get("/access", getAllAccessController.handle); // ver todos niveis de acesso
adminRouter.delete("/access", deleteAccessController.handle); // deletar um nivel de acesso

adminRouter.post("/user-access",grantAccessLeveltoUserController.handle) // atribuir nivel de accesso a um usuario

adminRouter.get("/users", getAllUsersController.handle) //retornar todos usuarios
adminRouter.post("/location",uploadConfig.single("image"),createLocationController.handle); //Criar local de treino novo 

export default adminRouter;