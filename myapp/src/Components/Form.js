import { useState } from "react";

function Form() {
    const obj = {firstName:"",lastName:"",eamil:""}

    const [formData, setFormData] = useState(obj)
    const [data, setData] = useState({})
    
    const formHandler=(event)=>{
        const{value, name} = event.target        
        setFormData({...formData,[name]:value})
    }
    const hadleSubmit=(event)=>{
        event.preventDefault();        
        setData(formData)   
        setFormData(obj)     
    }
  return (
    <div>
     
      <form onSubmit={hadleSubmit}>
        <div>
          <label>First Name:</label>
          <span>
            <input type="text" onChange={formHandler} name="firstName" value={formData.firstName}/>
          </span>
        </div>
        <div>
          <label>Last Name:</label>
          <span>
            <input type="text"  onChange={formHandler} name="lastName"  value={formData.lastName}/>
          </span>
        </div>
        <div>
          <label>Email:</label>
          <span>
            <input type="text"  onChange={formHandler} name="eamil"  value={formData.eamil}/>
          </span>
        </div>
        <input type="submit" value={"Submit"} />
      </form>
      <div>
        <h2>Form Data</h2>
        <div>First Name: {data.firstName}</div>
        <div>Last Name: {data.lastName}</div>
        <div>Email: {data.eamil}</div>
      </div>
    </div>
  );
}
/**
 * F name
 * L name
 * Email
 * Passowrd
 * user name
 * phone nume
 * 
 */
export default Form;
