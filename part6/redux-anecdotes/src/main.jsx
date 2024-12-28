import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import {store} from './store'
// import AnecdoteReducer from './reducers/anecdoteReducer'
// import filterReducer from './reducers/filterReducer'

// const reducer = combineReducers({
//   anecdotes: AnecdoteReducer,
//   filter: filterReducer
// })

// const store = createStore(reducer)


console.log(store.getState())


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
