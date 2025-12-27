import {configureStore} from '@reduxjs/toolkit'
import userReducer from './user.js'
import themeReducer from './theme.js'

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
})

export default store