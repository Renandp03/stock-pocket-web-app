// theme.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

/**
 * Estado do tema
 */
export interface ThemeState {
  isDark: boolean
}

/**
 * Estado inicial
 */
const initialState: ThemeState = {
  isDark: false
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    /**
     * Define explicitamente o tema
     */
    setTheme(state, action: PayloadAction<boolean>) {
      state.isDark = action.payload
    },
    /**
     * Alterna entre dark / light
     */
    toggleTheme(state) {
      state.isDark = !state.isDark
    }
  }
})

export const { setTheme, toggleTheme } = themeSlice.actions
export default themeSlice.reducer
