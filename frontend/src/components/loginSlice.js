import {createSlice} from '@reduxjs/toolkit';

export const loginSlice = createSlice({
    name:'login',
    initialState:{
        success:false
    },
    reducers:{
        update:(state,action) => {
            state.success = action.payload.success;
        }
    }
})

export const {update} = loginSlice.actions;
export default loginSlice.reducer;
