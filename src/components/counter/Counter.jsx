import {useState} from "react";

const Counter = (props) => {

    const {setSum} = props

    const [counterVal, setCounterVal] = useState(0);

    function handleIncrease() {
        setCounterVal(counterVal + 1)
        setSum((prevSum) => setSum(prevSum + 1))
    }

    function handleDecrease() {
        setCounterVal(counterVal - 1)
        setSum((prevSum) => setSum(prevSum - 1))
    }

    function handleReset() {
        setCounterVal(0)
    }


    return (
        <div>
            <button onClick={handleIncrease}>+</button>

            <span>{counterVal}</span>

            <button onClick={handleDecrease}>-</button>
        </div>
    )
}

export default Counter;