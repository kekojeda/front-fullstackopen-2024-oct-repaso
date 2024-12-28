import { configureStore } from '@reduxjs/toolkit'

import AnecdoteReducer from './reducers/anecdoteReducer'
import filterSlice from './reducers/filterReducer'


const store = configureStore({
    reducer: {
      anecdote: AnecdoteReducer,
      filter: filterSlice
    }
  })

export {store}