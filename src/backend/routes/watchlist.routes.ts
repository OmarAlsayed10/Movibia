import { Router } from "express";
import { addWatchlist, getWatchlist, removeWatchlist } from "../controllers/watchlist.controllers";

const watchListRouter = Router()

watchListRouter.post("/:userId",addWatchlist)
watchListRouter.delete("/:userId/:movieId",removeWatchlist)
watchListRouter.get("/:userId",getWatchlist)

export default watchListRouter