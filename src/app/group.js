import { createSlice } from "@reduxjs/toolkit";

const groupReducer = createSlice({
    name: 'group',
    initialState: {
        id: null,
        name: null,
        logo: null,
        branch:{
            id:null,
            name:null
        }
    },
    reducers:{
        setGroup: (state, action) => {
            state.id = action.payload.id,
            state.name = action.payload.name,
            state.logo = action.payload.logo,
            state.branch = action.payload.branch
        }
    }
})

export const {setGroup} = groupReducer.actions
export default groupReducer.reducer