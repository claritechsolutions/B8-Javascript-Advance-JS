//const World = () => <h1>Hello World</h1>
const World=(props)=>{
    console.log("World props-", props)
    return(
        <h1>
            Hello World{props.name}-{props.abc}
        </h1>
    )
}

export default World;