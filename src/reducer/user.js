import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
    name: 'user',
    initialState: {
        id: null,
        name: null,
        email: null,
        avatar: null,
        token: null,
    },
    reducers:{
        setUser: (state, action) => {
            state.id = action.payload.id
            state.name = action.payload.name
            state.email = action.payload.email
            state.avatar = action.payload.avatar
        }
    }
})

export const {setUser} = userReducer.actions
export default userReducer.reducer