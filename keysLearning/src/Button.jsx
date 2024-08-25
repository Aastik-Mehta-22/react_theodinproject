function Button(props) {

    const buttonStyle = {
        color:props.color,
        fontSize: props.size + 'px'
    }

    return (
        
        <button style={buttonStyle}>{props.text}</button>
    )
}
export default function App(){

    return (
        <>
            <Button text="Click Me!" color="blue" fontSize={12} />
            <Button text="Don't Click Me!" color="red" fontSize={12} />
            <Button text="Click Me!" color="blue" fontSize={20} />
        </>
    )
}