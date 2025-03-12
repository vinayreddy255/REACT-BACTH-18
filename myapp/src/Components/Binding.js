import {useState} from "react"

const Binding=()=>{
    const obj = {name:'Siva', age:22, city:'Pune', pinCode:234234}
    const  [city, setCity] = useState('Bangalore')
    const [emp,setEmp] = useState(obj)
    
    const clickHandler = ()=>{
        setCity('Hyderbad')
        console.log(city) //Banglore
        setEmp({...emp, name:'Raju'})
    }
    return (
        <div>
            <h1>Binding</h1>
            <h3>City:{city}</h3>
            <button onClick={clickHandler}>CahngeCity</button>
            <div>
                <h3>Name: {emp.name}</h3>
                <h3>Age: {emp.age}</h3>
                <h3>City: {emp.city}</h3>
                <h3>Pincode: {emp.pinCode}</h3>
            </div>
        </div>
    )
}

export default Binding