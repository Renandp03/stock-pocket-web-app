// user.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

/**
 * Estado do usuário
 */
export interface UserState {
  id: string | undefined 
  name: string | undefined 
  email: string | undefined 
  avatar: string | undefined
  token: string | undefined 
}

/**
 * Estado inicial
 */
const initialState: UserState = {
  id: undefined ,
  name: undefined ,
  email: undefined ,
  avatar: undefined,
  token: undefined 
}

/**
 * Payload do setUser
 * (token opcional para permitir uso em diferentes fluxos)
 */
interface SetUserPayload {
  id: string | undefined 
  name: string | undefined 
  email: string | undefined 
  avatar: string | undefined
  token?: string | undefined 
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<SetUserPayload>) {
      state.id = action.payload.id
      state.name = action.payload.name
      state.email = action.payload.email
      state.avatar = action.payload.avatar

      if (action.payload.token !== undefined) {
        state.token = action.payload.token
      }
    },
    /**
     * Boa prática: limpar o usuário (logout)
     */
    clearUser() {
      return initialState
    }
  }
})

export const { setUser, clearUser } = userSlice.actions
export default userSlice.reducer
