import { useRef, useEffect } from "react";

function RefComponet() {
    const difRef = useRef();
    const inputRef = useRef();

    const changeText=()=>{
        difRef.current.innerHTML = '<h1>Hello React</h1>'        
    }
    
    useEffect(()=>{
        console.log("inputRef...", inputRef)
        inputRef.current.focus();
    },[])


  return (
    <div>
      <input type="text" ref={inputRef}/>
      <div ref={difRef}>Hello</div>
      <button onClick={changeText}>ChangeText</button>
    </div>
  );
}
export default RefComponet;
