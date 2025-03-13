import { useState } from "react";
function Counter(){
    const [count,setCount]=useState(0);

    const incremnt=()=>{        
        setCount(count+1)
    }
    
    const decrement=()=>{
        if(count>0){
            setCount(count-1)
        }
    }
    return(
        <div>
            <h1>Count:{count}</h1>
            <button onClick={incremnt}>Inc</button>
            <button onClick={decrement}>Dec</button>
        </div>
    )
}
export default Counter