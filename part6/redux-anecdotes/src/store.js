import { configureStore } from '@reduxjs/toolkit'

import anecdoteSlice from './reducers/anecdoteReducer'
import filterSlice from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'


const store = configureStore({
    reducer: {
      anecdote: anecdoteSlice,
      filter: filterSlice,
      notification: notificationReducer
    }
  })

export {store}