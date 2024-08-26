import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Person from './Persons.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Person />
  </StrictMode>,
)
