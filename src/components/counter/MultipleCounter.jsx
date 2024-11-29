import CounterGroupGenerator from "./CounterGroupGenerator";
import {useState} from "react";
import CounterGroup from "./CounterGroup";
import './MultipleCounter.css'
import {useNavigate} from "react-router-dom";

const MultipleCounter = () => {

    const [inputSize, setInputSize] = useState(0);
    const [counterSize, setCounterSize] = useState(0);
    const [sum, setSum] = useState(0);
    const navigate = useNavigate()

    function handleNavToTodolist(){
        navigate("/")
    }

    function handleNavToUnknown(){
        navigate("/unknown")
    }

    return (
        <div className={'multiple-counter'}>
            <CounterGroupGenerator size={inputSize} setSize={setInputSize}
                                   setCounterSize={setCounterSize} setSum={setSum} counterSize={counterSize}/>
            <span>sum: {sum}</span>
            <CounterGroup counterSize={counterSize} setSum={setSum}/>
            <button onClick={handleNavToTodolist} className="nav-button">Navigate to TodoList Page</button>
            <br/>
            <button onClick={handleNavToUnknown} className="nav-button">Show me 404</button>
        </div>
    )
}

export default MultipleCounter;