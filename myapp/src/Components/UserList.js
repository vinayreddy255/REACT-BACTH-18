const UserList=()=>{
    const arr = [
        {name:'siva',age:22, city:'hyderbad'},
        {name:'Rju',age:32, city:'Chennai'},
        {name:'Ravi',age:25, city:'Banglore'},
        {name:'Sury',age:26, city:'hyderbad'},
        {name:'Sam',age:29, city:'Pune'},
    ]
    return(
        <div>
            <h2>User List</h2>
            {arr.map((user,index)=>{
                return(
                    <li key={index}>Name:{user.name} --- Age:{user.age}---City:{user.city}</li>
                )
            })}
            {/* {arr.map((user)=><li>{user.name}</li>)} */}
        </div>
    )
}
export default UserList;