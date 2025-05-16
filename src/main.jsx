import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import Index from './Index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Index />
  </BrowserRouter>,
)
