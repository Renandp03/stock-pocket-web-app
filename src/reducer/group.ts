import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


export interface GroupState {
    id: string | null,
    name: string | null,
    logo: string | null,
    branch:{
        id: string | null,
        name: string | null
    }
}

/**
 * Estado inicial
 */
const initialState: GroupState = {
    id: null,
    name: null,
    logo: null,
    branch:{
        id:null,
        name:null
    }
}

const groupReducer = createSlice({
    name: 'group',
    initialState,
    reducers: {
        /**
         * Define explicitamente o grupo
         */
        setGroup(state, action: PayloadAction<GroupState>) {
            state.id = action.payload.id,
            state.name = action.payload.name,
            state.logo = action.payload.logo,
            state.branch = action.payload.branch
        }
    }
})

export const {setGroup} = groupReducer.actions
export default groupReducer.reducer