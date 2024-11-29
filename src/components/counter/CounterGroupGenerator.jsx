import {useState} from "react";
import CounterGroup from "./CounterGroup";

const CounterGroupGenerator = (props) => {

    const {size, setSize, setCounterSize, setSum, counterSize} = props

    function handleSetSize(event) {

        const inputSize = event.target.value

        if (checkMin(inputSize)) {
            return setSize(0)
        } else if (checkMax(inputSize)) {
            return setSize(20)
        }

        setSize(event.target.value)
    }

    function checkMin(value) {
        return value < 0
    }

    function checkMax(value) {
        return value > 20
    }

    function handleReset() {
        resetSumWhenSizeChanged()
        setCounterSize(size)
    }

    function resetSumWhenSizeChanged(){
        if (counterSize !== size) {
            setSum(0)
        }
    }

    return (
        <div>
            <span>size:</span>
            <input min={0} max={20} type={"number"} value={size} onChange={handleSetSize}/>
            <button onClick={handleReset}>reset</button>
        </div>
    )
}

export default CounterGroupGenerator;