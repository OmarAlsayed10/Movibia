import { ExpressMiddleware, User } from "../types/interfaces";
import { loadUsers, saveUsers } from "../utils/fileHelper";

export const addWatchlist:ExpressMiddleware=async (req,res)=>{

    const {userId} = req.params
    const {movie}=req.body
    const users = await loadUsers()

    const user = users.find((u:User)=>u.id===userId)

    if(!user){
        res.status(409).json({message:"user not found!"})
        return;
    }

    if (!user.watchlist) {
        user.watchlist = [];
      }
      

    if(!user.watchlist.some((m:any)=>m.id===movie.id)){

        user.watchlist.push(movie)

            await saveUsers(users)

            

        res.json(user.watchlist)

    }
}

export const removeWatchlist:ExpressMiddleware=async (req,res)=>{

    const {userId,movieId}=req.params

    const users = await loadUsers()

    const user = users.find((u:User)=>u.id===userId);

    if(!user){
        res.status(409).json({message:"user not found!"});
        return;
    }

    user.watchlist = user.watchlist.filter((movie:any)=>movie.id!==movieId)

    await saveUsers(users)

    res.json(user.watchlist)
}

export const getWatchlist:ExpressMiddleware=async(req,res)=>{

    const userId = req.params.userId
    const users = await loadUsers()

    const user = users.find((u:any)=>u.id === userId)

    if(!user){
        res.status(409).json({message:"user not found!"});
        return;
    }

    res.json(user.watchlist||[])

}

