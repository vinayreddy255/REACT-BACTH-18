import ComponentD from "./ComponentD"
function ComponentC(props){
    // console.log(props)
    return(
        <div>
            <h1>Component C</h1>
            <ComponentD empolyeData={props.empolyeData}/>
        </div>
    )
}
export default ComponentC