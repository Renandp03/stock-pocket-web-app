// store.ts
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user'
import themeReducer from './theme'
import groupReducer from './group'
import productsReducer from './products'

export const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    group: groupReducer,
    products: productsReducer
  }
})

/**
 * Tipos globais do Redux
 */
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
