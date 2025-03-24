import useCounter from "./CustomHookCount"

function CounterClick(){
    const [count, increment, decrement] = useCounter()
    return(
        <div>
            <h1>Count Click:{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decreemnt</button>
        </div>
    )
}
export default CounterClick