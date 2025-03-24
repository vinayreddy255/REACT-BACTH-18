import { useMemo, useState } from "react"

function sumOftheValue(){    
    let reslut=0;
    for(let i=1; i<=100000; i++){
        reslut+=i
    }
    return reslut;
}

function UseMemoHook(){
    const [count, setCount] = useState(0);
    const totolSum = useMemo(()=>sumOftheValue(),[])
    
    console.log(totolSum)

    const inc=()=>{
        setCount(count+1)
    }

    return(
        <div>
            <h1>Count:{count}</h1>
            <h2>Use UseMemoHook</h2>
            <button onClick={inc}>Click</button>
        </div>
    )
}
export default UseMemoHook