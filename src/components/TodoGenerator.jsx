import {useContext, useState} from "react";
import './TodoListStyle.css'
import {TodoContext} from "../App";

const TodoGenerator = () => {

    const [input, setInput] = useState();
    const {state, dispatch} = useContext(TodoContext)

    function handleAdd() {
        dispatch({type: "ADD", payload: input})
    }

    function handleInputChange(event) {

        const inputValue = event.target.value

        if (inputValue.length > 100) {
            return setInput(inputValue.substring(0, 99))
        }

        setInput(event.target.value)
    }

    return (
        <div className={'todo-add'}>
            <span>
                <input onChange={handleInputChange}/>
                <button onClick={handleAdd}>add</button>
            </span>

        </div>
    )
}

export default TodoGenerator;