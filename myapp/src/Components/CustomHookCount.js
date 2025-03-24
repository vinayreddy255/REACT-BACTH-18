import { useState } from "react";

function useCounter(input){

    const [count, setCount] =  useState(0);
    
    const deflaut = input?input:1

    const increment=()=>{
        setCount(count+deflaut)
    }
    const decrement=()=>{
        setCount(count-deflaut)
    }

    return [count, increment, decrement]
}

export default useCounter