import {Router} from "express";
import {signIn, signOut, signUp } from "../controllers/auth.controllers";

const authRouter = Router()

authRouter.post("/sign-up",signUp)
authRouter.post("/sign-in",signIn)
authRouter.delete("/sign-out",signOut)

export default authRouter;