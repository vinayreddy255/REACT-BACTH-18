import { useState } from "react"

function InputHandler(){
    const [inputValue, setInputValue] = useState('')
    const inputHandler=(e,a)=>{
        // console.log(e.target.value)
        setInputValue(e.target.value.toUpperCase())

    }

    return(
        <div>
            <h1>InputHandler</h1>
            {/* <input type="text" onChange={(event)=>inputHandler(event,123)}/> */}
            <input type="text" onChange={(event)=>inputHandler(event,123)}/>
            <div>
                <span><h3>Input Data:{inputValue}</h3></span>
            </div>
        </div>
    )
}
export default InputHandler