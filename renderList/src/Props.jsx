function ListItem(props){

    return <li>{props.animal}</li>
}

function List(props){
    
    return (
        <>
            <ul>
                {
                    props.animals.map((animal) => {
                        return <ListItem key={animal} animal={animal}/>
                    })
                }
            </ul>
        </>
    )
}

export {List , ListItem}