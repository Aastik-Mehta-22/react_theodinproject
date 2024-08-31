import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RenderName from './RenderName'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RenderName name="Aastik" title="here is title"/>
    </>
  )
}

export default App
