import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { unstable_HistoryRouter as Router } from 'react-router-dom'
import { history } from './utils'
import App from './App'
import store from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
)
