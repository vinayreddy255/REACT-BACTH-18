import { useContext } from "react"
import { ContextData } from "../ContextData"

function ComponentD(props){
    const data = useContext(ContextData);
    console.log('Compoent D Context Data...', data)
    return(
        <div>
            <h1>Component D</h1>
            {/* <div>
                <h4>Name:{props.empolyeData.name}</h4>
                <h4>Age:{props.empolyeData.age}</h4>
                <h4>Sal:{props.empolyeData.sal}</h4>
                <h4>City:{props.empolyeData.city}</h4>
            </div> */}
            <button onClick={()=>data.setAge(data.age+2)}>IncremntAge</button>
        </div>
    )
}
export default ComponentD