import { useState, useContext } from "react";
import ComponentB from "./ComponentB"
import { ContextData } from "../ContextData"
function ComponentA(){
    const emp = {name:'Siva', age:22, sal:2000, city:'Banglore'};
    const [empData, setEmpData] = useState(emp)
    const [chaildData, setChaildData] = useState('')
    const context = useContext(ContextData)

    const changeEmpData=()=>{
        setEmpData({name:'Ram', age:26, sal:5000, city:'Hyderbad'})
    }

    const reciveData=(data)=>{
        console.log(data)
        setChaildData(data)
    }

    return(
        <div>
            <h1>Component A</h1>
            <h2>Age: {context.age}</h2>
            <h3>{chaildData}</h3>
            <button onClick={changeEmpData}>ChangeData</button>
            <ComponentB empolyeData={empData} reciveData={reciveData}/>
        </div>
    )
}
export default ComponentA