import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { userState } from "../../interfaces/interface"

const initialState:userState={
    loggedIn:false,
    loading:false,
    error:null
}


export const fetchByEmail=createAsyncThunk("user/fetchEmail",
    async(email:string,{rejectWithValue})=>{
        const response = await axios.get(`http://localhost:3000/user/get-user?email=${email}`)
        if(response.data.success){
            return true;
          }
          rejectWithValue("user not found")
    })

    const userSlice = createSlice({
        name:"user",
        initialState,
        reducers:{
            handleLogOutstate(state){
            localStorage.removeItem("email")
            localStorage.removeItem("token")
            localStorage.removeItem("username")
            localStorage.removeItem("id")
            state.loggedIn=false
            }
        },
        extraReducers:(builder)=>{
            builder.addCase(fetchByEmail.fulfilled,(state,)=>{
                state.loggedIn=true;
                state.error=null
            })
            .addCase(fetchByEmail.pending,(state,)=>{
                state.loggedIn=true;
                state.loading=true
            })
            .addCase(fetchByEmail.rejected,(state,action)=>{
                state.loggedIn=false;
                state.loading=false;
                state.error=action.payload as string
            })
        }
    })

    export const {handleLogOutstate} = userSlice.actions
    export default userSlice.reducer