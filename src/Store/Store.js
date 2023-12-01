import {configureStore} from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import  UserSlice  from './Features/UserSlice' 
 import AppApi from '../Api/Query'


const rootReducer = combineReducers({
    user:UserSlice,
    [AppApi.reducerPath]:AppApi.reducer
})

const persistConfig = {
    key:'root',
    storage,
    blacklist:[]
}


const persistedReducer = persistReducer(persistConfig,rootReducer)

const Store = configureStore({
    reducer:persistedReducer,
    middleware:[thunk,AppApi.middleware]
})

export default Store