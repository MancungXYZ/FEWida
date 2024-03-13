import React from 'react'
import ReactDOM from 'react-dom/client'
import cartSlice from './redux/cartSlice.js'
import App from './App.jsx'
import './index.css'

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

const store = configureStore({
  reducer: {
    cart: cartSlice
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
