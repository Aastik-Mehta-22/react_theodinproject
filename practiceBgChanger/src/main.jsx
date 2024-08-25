import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const bd = document.querySelector('body');
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App bd={bd}/>
  </StrictMode>,
)
