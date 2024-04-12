import {createSlice} from '@reduxjs/toolkit'


const apiStatusSlice = createSlice({
    name: "apiStatus",
    initialState: {
        type: '',
        status: 'idle'
    },
    reducers: {
        updateStatus(state,action) {
           return action.payload
        }
    }
})

export const {
    updateStatus
} = apiStatusSlice.actions


export default apiStatusSlice.reducer