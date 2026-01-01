import {configureStore} from '@reduxjs/toolkit'
import userReducer from './user.js'
import themeReducer from './theme.js'
import groupReducer from './group.js'

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    group: groupReducer
  },
})

export default store