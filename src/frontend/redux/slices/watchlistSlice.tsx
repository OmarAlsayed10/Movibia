import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Movie, RemoveFromWatchlistPayload, WatchlistState, AddToWatchlistPayload, getWatchListPayLoad } from "../../interfaces/interface";



const initialState: WatchlistState = {
  items: [],
  loading: false,
  error: null,
};

export const addToWatchList = createAsyncThunk<Movie[], AddToWatchlistPayload>(
  "watchlist/add",
  async ({ userId, movie }) => {
    // console.log("User ID:", userId);
    // console.log("Movie:", movie);      
    const response = await axios.post(`http://localhost:3000/watchlist/${userId}`, { movie });
    // console.log("Response Data:", response.data);
    return response.data;
  }
);

export const removeFromWatchList = createAsyncThunk<Movie[], RemoveFromWatchlistPayload>(
  "watchlist/remove",
  async ({ userId, movieId }) => {
    const response = await axios.delete(`http://localhost:3000/watchlist/${userId}/${movieId}`);
    return response.data;
  }
);

export const getWatchList = createAsyncThunk<Movie[],getWatchListPayLoad>(
  "watchlist/get",
  async({userId})=>{
    const response = await axios.get(`http://localhost:3000/watchlist/${userId}`)
    return response.data;
  }
)

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToWatchList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToWatchList.fulfilled, (state, action: PayloadAction<Movie[]>) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(addToWatchList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to add to watchlist";
      })

      .addCase(removeFromWatchList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeFromWatchList.fulfilled, (state, action: PayloadAction<Movie[]>) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(removeFromWatchList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to remove from watchlist";
      })
      .addCase(getWatchList.pending,(state)=>{
        state.loading=true;
      })
      .addCase(getWatchList.fulfilled,(state,action)=>{
        state.loading=false
        state.items = action.payload
      })
      .addCase(getWatchList.rejected,(state,action)=>{
        state.loading=false;
        state.error = action.error.message || "failed to get watchlist"
      })
  },
});

export default watchlistSlice.reducer;
