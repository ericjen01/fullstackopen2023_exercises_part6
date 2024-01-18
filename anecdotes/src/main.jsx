//import { createStore, combineReducers  } from 'redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import store from './reducers/store'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)