import {createSlice} from '@reduxjs/toolkit';

const initialState={
    currentUser:null,
    error:null,
    Loading:false
    
}
const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        signInStart:(state)=>{
            state.Loading=true;
        },
        signInSuccess:(state,action)=>{
            state.currentUser = action.payload;
            state.Loading=false;
            state.error=null;
        },
        signInFailure:(state,action)=>{
        state.error=action.payload;
        state.Loading=false;
        }

    }
});
export const {signInStart,signInSuccess,signInFailure}=userSlice.actions;
export default userSlice.reducer;