import {createSlice} from '@reduxjs/toolkit'
import AppApi from '../../Api/Query'

const initialState = null


export const UserSlice = createSlice({
    name:'user',
    initialState,

    reducers:{
        logout: () => initialState
    },

   extraReducers:(builder)=>{
        builder.addMatcher(AppApi.endpoints.register.matchFulfilled,(_,{payload})=> payload)
        builder.addMatcher(AppApi.endpoints.login.matchFulfilled,(_, {payload})=> payload)
   }
})

export const {logout} = UserSlice.actions
export default UserSlice.reducer