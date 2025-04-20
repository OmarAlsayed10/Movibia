import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.routes";
import watchListRouter from "./routes/watchlist.routes";
import usersRouter from "./routes/user.routes";

const app = express();

app.use(cors());
app.use(express.json());


app.use("/auth",authRouter);
app.use("/watchlist",watchListRouter)
app.use("/user",usersRouter)

export default app;
