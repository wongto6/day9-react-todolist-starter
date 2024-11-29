import {useContext, useState} from "react";
import './TodoListStyle.css'
import {TodoContext} from "../../App";
import {ACTION} from "../../context/todoReducer";

const TodoGenerator = () => {

    const [input, setInput] = useState("");
    const {dispatch} = useContext(TodoContext)

    function handleAdd() {

        const trimmedInput = input.trim()

        if (trimmedInput.length === 0) {
            return
        }

        dispatch({type: ACTION.ADD, payload: trimmedInput})
    }

    function handleInputChange(event) {
        setInput(event.target.value)
    }

    return (
        <div className={'todo-add'}>
            <span>
                <input onChange={handleInputChange} maxLength={100} className={"add-item"}/>
                <button className="button" onClick={handleAdd}>add</button>
            </span>
        </div>
    )
}

export default TodoGenerator;