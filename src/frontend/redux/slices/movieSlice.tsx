import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const movieAction = createAsyncThunk("movie/getAll",async()=>{
    
    const res = await axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7")
    return res.data
})

const movieSlice = createSlice({
    name: "movie",
    initialState: { movies:[], status:"idle" },
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(movieAction.fulfilled, (state, action) => {
            state.movies = action.payload.results
        });
        builder.addCase(movieAction.pending, (state) => {
            state.status="loading"
        });

        builder.addCase(movieAction.rejected, (state) => {
            state.status="failed"
        });
    },
   
})

export default movieSlice.reducer