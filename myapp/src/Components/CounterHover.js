import useCounter from "./CustomHookCount"

function CounterHover(){
    const [count, increment, decrement] = useCounter(5)

    return(
        <div>
            <h1>Count hover:{count}</h1>
            <button onMouseOver={increment}>Increment</button>
            <button onMouseOver={decrement}>Decreemnt</button>
        </div>
    )
}
export default CounterHover