import {configureStore} from "@reduxjs/toolkit"
import postSlice from "./Slice/postSlice.js"
import apiStatusSlice from "./Slice/apiStatusSlice.js"
import apiStatusMiddleware from "./middleware/apiStatusMiddleware.js"


const store = configureStore({
    reducer: {
        posts: postSlice,
        apiStatus: apiStatusSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        apiStatusMiddleware
    ])
})

export default store