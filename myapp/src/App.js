import logo from './logo.svg';
import React, { useState } from 'react';
// import './App.css';
// import HelloWorld from './Components/HelloWorld';
import Binding from './Components/Binding';
import UserList from './Components/UserList';
import Counter from './Components/Counter';
import InputHandler from './Components/InputHandler';
import Form from './Components/Form';
import ComponentA from './Components/ComponentA';
import Condational from './Components/Condational.js';
import ReactFr from './Components/ReactFr.js';
import ReactUseEffect from './Components/ReactUseEffect.js';

import { ContextData } from './ContextData.js';
import RefComponet from './Components/RefComponet.js';
function App() {
  const obj = {name:'abc', city:'Hyderbad'}
  const [age, setAge] = useState(10)
  return (
   
    <div className="App">
       <ContextData.Provider value={{...obj,age:age, setAge:setAge}}>
        {/* <HelloWorld/> */}
        {/* <Binding/> */}
        {/* <UserList/> */}
        {/* <Counter/> */}
        {/* <InputHandler/> */}
        {/* <Form/> */}
        
        {/* <ComponentA/> */}

        {/* <Condational/> */}
        {/* <ReactFr/> */}
        {/* <ReactUseEffect/>         */}
        </ContextData.Provider>

        <RefComponet/>
    </div>
   

  );
}

export default App;
