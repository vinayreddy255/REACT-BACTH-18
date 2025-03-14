import { useState } from "react"
import '../App.css';
function Condational(){
    const[show, setShow] = useState(true);
    const showBtn=()=>{
        console.log('hidd')
        setShow(true)
    }
    const hideBtn=()=>{
        setShow(false)
    }

    return(
        <div>
            {/* {show?<h1>Data hello</h1>:''} */}
            {show&&<h1>Data hello</h1>}
            {/* <h2 style={{backgroundColor: show?'blue':'red', color:'white'}}>Content colors</h2> */}
            <h2 className={show?'cls1':'cls2'}>Content colors</h2>
            {/* <button onClick={showBtn} disabled={show==true}>Show</button>
            <button onClick={hideBtn} disabled={show==false}>Hide</button> */}
            <button onClick={showBtn} disabled={show}>Show</button>
            <button onClick={hideBtn} disabled={!show}>Hide</button>
        </div>
    )
}

export default Condational