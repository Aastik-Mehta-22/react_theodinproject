import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {List ,ListItem} from './Props.jsx'

function App() {
  const [count, setCount] = useState(0)

  // return (
  //   // <>
  //   //   <h1>Animals: </h1>
  //   //   <ul>
  //   //     <li>Lion</li>
  //   //     <li>Cow</li>
  //   //     <li>Snake</li>
  //   //     <li>Lizard</li>
  //   //   </ul>
  //   // </>

  // )

  // const animals = ["Lion","Cow","Snake","Lizard"]; // array

  // return (
  //   <>
  //     <h1>Animals : </h1>

  //     <ul>
  //         {animals.map((animal)=> {
  //           return <li key={animal}>{animal}</li>
  //         })}
  //     </ul>
  //   </>
  // )

//   const animals = ["Lion","Cow","Snake","Lizard"];

//   const animalsList = animals.map((animal) =>{

//     return <li key={animal}>{animal}</li> 
// })

  // return (

  //   <>
  //       <h1>Animals: </h1>
  //       <ul>{animalsList}</ul>
  //   </>
  // )


  const animals = ["Lion","Cow","Snake","Lizard"];
  return (
    <>
        <h1>Animals: </h1>
        <List  animals={animals}/>
    </>
  ) 

}

export default App
