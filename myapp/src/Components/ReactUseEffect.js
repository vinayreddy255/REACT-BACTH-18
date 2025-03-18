import { useEffect, useState } from "react";
import axios from 'axios';
function ReactUseEffect(){
    const [count, setCount] =  useState(0);
    const [users, setUsers] = useState([])
    /**
     * 1. Compoent did mount
     * 2. Compoenent did update
     * 3. compent will unmount
     */
    useEffect(()=>{
        const url = "https://jsonplaceholder.typicode.com/users";
        // fetch(url).then(ressponse=>ressponse.json()).then(data=>console.log(data))
        axios.get(url).then(response=>setUsers(response.data))
        // console.log('use effecnt calling')
    },[])

    useEffect(()=>{
        console.log('did mount..', count);

        return ()=>{
            console.log('unmountining...')
        }

    },[count])

    // console.log(1)
    // console.log(2)
    return(
        <div>
            <h2>ReactUseEffect</h2>
            <h3>Count: {count}</h3>
            <button onClick={()=>setCount(count+1)}>Incremnt</button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length>0&&users.map((user)=>(
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default ReactUseEffect

/**
 * useContext
 * useRef
 * useReducers
 * usecallback
 * useMmemo
 * customhook
 */