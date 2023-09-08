import { configureStore } from "@reduxjs/toolkit";

import AuthReducer from './feature/authSlice';

export default configureStore({
    reducer:{
        auth:AuthReducer,
    },
})