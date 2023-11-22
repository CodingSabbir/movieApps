import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { MoviesDataProvider } from './ContextApi/ContextData.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
 <MoviesDataProvider>
 <React.StrictMode>
    <App />
  </React.StrictMode>
 </MoviesDataProvider>
  </BrowserRouter>
)
