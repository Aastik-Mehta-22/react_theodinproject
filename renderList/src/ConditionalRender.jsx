function List(props) {
    return (

        <ul>
            {props.animals.map((animal) => {
                return (animal.startsWith("L") || animal.startsWith("l")) ? <li key={animal} >{animal}</li> :null;
            })}
        </ul>
    )
}

export default function app(){

    const animals = ["Lion","Tiger","lion","Cow","Lizard"];
    return (
        <>
        <h1>Animals: </h1>
        <List animals={animals}/>
        </>
    )
}