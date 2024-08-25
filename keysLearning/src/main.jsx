import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Button from './Button.jsx'
import './index.css'
import FunctionAsProps from './FunctionAsProps.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <Button /> */}
    <FunctionAsProps />
    
  </StrictMode>,
)
