import { useState , useEffect} from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(0);

  // setInterval(() => {
  //   setCounter(count=>count + 1)
  // },1000)

  useEffect(() => {
    setInterval(() => {
      setCounter(count => count + 1)
    },1000);
    return () => {
      clearInterval(key);
    };
  },[])

  return (
    <>

      <p>{counter} seconds have passed</p>
    </>
  )
}

export default App
