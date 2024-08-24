function ListItem(props) {

    return <li>{props.animal}</li>
}

function List(props){
    return (

        <ul>
            {props.animals.map((animal) => {
                return <ListItem key={animal} animal={animal}/>
            })}
        </ul>
    )
}

export default function app(){
    const animals = ["Lion","Cow","Snake","Lizard"];
    return(
        <>
        <h1>Animals: </h1>
        <List animals={animals}/>
        </>
    )
}