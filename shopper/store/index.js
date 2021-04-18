import { configureStore, createSlice } from '@reduxjs/toolkit'


const shopperSlice = createSlice({
    name: 'auth'
})

const store = configureStore({
    reducer: shopperSlice.reducer,
})

export default store;