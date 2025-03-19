import { useContext,useRef } from "react"
import ComponentC from "./ComponentC"
import { ContextData } from "../ContextData"

function ComponentB(props){
    const bData = useContext(ContextData);
    console.log('B compoent data...', bData)
    const sendingData=()=>{
        // snding data to parent compoent
        props.reciveData('snding data to parent compoent')
        
    }
// console.log(props.reciveData)
    return(
        <div>
            <h1>Component B</h1>
            <button onClick={sendingData}>sendingData</button>
            <ComponentC empolyeData={props.empolyeData}/>
        </div>
    )
}
export default ComponentB