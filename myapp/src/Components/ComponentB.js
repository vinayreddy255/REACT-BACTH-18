import ComponentC from "./ComponentC"

function ComponentB(props){

    const sendingData=()=>{
        // snding data to parent compoent
        props.reciveData('snding data to parent compoent')
        
    }
console.log(props.reciveData)
    return(
        <div>
            <h1>Component B</h1>
            <button onClick={sendingData}>sendingData</button>
            <ComponentC empolyeData={props.empolyeData}/>
        </div>
    )
}
export default ComponentB