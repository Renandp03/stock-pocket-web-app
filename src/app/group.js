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
            state.id = action.id,
            state.name = action.name,
            state.logo = action.logo,
            state.branch = action.branch
        }
    }
})

export const {setGroup} = groupReducer.actions
export default groupReducer.reducer