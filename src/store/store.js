import { configureStore } from '@reduxjs/toolkit'
import postSlice from './slices/postSlice'
import postDetailsSlice from './slices/postDetailsSlice'

const store = configureStore({
     reducer:{
        postSlice,
        postDetailsSlice
     }
    })
export default store