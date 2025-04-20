import {Router} from "express"
import { getUser } from "../controllers/users.controller"

const usersRouter = Router()

usersRouter.get("/get-user",getUser)

export default usersRouter;
