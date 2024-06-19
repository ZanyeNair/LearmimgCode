import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/Counting/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})