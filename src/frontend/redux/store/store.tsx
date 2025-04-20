import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "../slices/movieSlice"
import userSlice from "../slices/userSlice"
import watchlistSlice from "../slices/watchlistSlice"
const store = configureStore({
    reducer:{
        movies:movieSlice,
        user: userSlice,
        watchlist: watchlistSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store