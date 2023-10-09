import {Router} from 'express'

import { CreateAccessController } from "../useCases/createAccess/CreateAccessController";
import { DeleteAccessController } from '../useCases/deleteAccess/DeleteAccessController';
import { GetAllAccessController } from '../useCases/getAllAccess/GetAllAccessController';
import { GrantAccessLeveltoUserController } from '../useCases/grantAcessLeveltoUser/GrantAccessLeveltoUserController';
import { GetAllUsersController } from "../useCases/getAllUsers/GetAllUsersController";
 

const accessRouter = Router()

const createAccessController = new CreateAccessController();
const deleteAccessController = new DeleteAccessController();
const getAllAccessController = new GetAllAccessController();
const grantAccessLeveltoUserController = new GrantAccessLeveltoUserController();
const getAllUsersController = new GetAllUsersController();

accessRouter.post("/accessCreate", createAccessController.handle);
accessRouter.get("/get-all-access", getAllAccessController.handle);
accessRouter.post("/deleteAccess", deleteAccessController.handle);
accessRouter.post("/grant-to-userAccess",grantAccessLeveltoUserController.handle)
accessRouter.get("/get-all-users", getAllUsersController.handle)


export default accessRouter;