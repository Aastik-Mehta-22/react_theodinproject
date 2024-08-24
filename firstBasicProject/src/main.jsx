import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import PictureMine from './Picture.jsx'
import './index.css'
import { Quote } from './Quote.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
    <PictureMine/>
    <Quote />
  </StrictMode>,
)
