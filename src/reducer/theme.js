import { createSlice } from "@reduxjs/toolkit";

const themeReducer = createSlice({
    name: 'theme',
    initialState: {
        isDark: false,
    },
    reducers:{
        setTheme: (state, action) => {
            state.isDark = action.payload.isDark
        }
    }
})

export const {setTheme} = themeReducer.actions
export default themeReducer.reducer