import React from 'react'
import { useState } from 'react'

function Person() {

    const [person,setPerson] = useState({name: "john",age: 15});
    const [value, setValue] = useState("");

    // Bad Practice will not work
    // const handleClick = () => {

    //     person.age = person.age + 1;
    //     setPerson(person);
    // }

    //Good Practice

    const handleClick = () => {

        const newPerson = {...person,age:person.age + 1 };

        setPerson(newPerson);
    }
    const handleIncreaseAge = () => {
        setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
        setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
    };

    console.log("rerender")
  return (

    <>

        <h1>{person.name}</h1>
        <h1>{person.age}</h1>
        <button onClick={handleIncreaseAge}>Increase Age !</button>
        <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        />
    </>
  )
}

export default Person



