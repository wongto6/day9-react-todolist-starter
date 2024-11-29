import {useContext, useState} from "react";
import './TodoListStyle.css'
import {TodoContext} from "../App";

const TodoGenerator = () => {

    const [input, setInput] = useState("");
    const {dispatch} = useContext(TodoContext)

    function handleAdd() {

        const trimmedInput = input.trim()

        if (trimmedInput.length === 0) {
            return
        }

        dispatch({type: "ADD", payload: trimmedInput})
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
                <input onChange={handleInputChange} className={"add-item"}/>
                <button className="button" onClick={handleAdd}>add</button>
            </span>
        </div>
    )
}

export default TodoGenerator;