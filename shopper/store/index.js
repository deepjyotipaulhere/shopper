import { configureStore, createSlice } from '@reduxjs/toolkit'


const shopperSlice = createSlice({
    name: 'auth',
    initialState: {
        loggedIn: false
    },
    reducers: {
        signIn(state) {
            state.loggedIn = true
        },
        signOut(state) {
            state.loggedIn = false
        }
    }
})

const store = configureStore({
    reducer: shopperSlice.reducer,
})

export const shopperActions = shopperSlice.actions;
export default store;