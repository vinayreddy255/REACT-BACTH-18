function ComponentD(props){
    return(
        <div>
            <h1>Component D</h1>
            <div>
                <h4>Name:{props.empolyeData.name}</h4>
                <h4>Age:{props.empolyeData.age}</h4>
                <h4>Sal:{props.empolyeData.sal}</h4>
                <h4>City:{props.empolyeData.city}</h4>
            </div>
        </div>
    )
}
export default ComponentD