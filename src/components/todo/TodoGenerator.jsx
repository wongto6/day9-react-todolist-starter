import {useContext, useState} from "react";
import './TodoListStyle.css'
import {TodoContext} from "../../App";
import {ACTION} from "../../context/todoReducer";
import {createTodoData} from "../api/todo";

const TodoGenerator = () => {

    const [input, setInput] = useState("");
    const {dispatch} = useContext(TodoContext)
    const [loading, setLoading] = useState(false)

    function handleAdd() {

        const trimmedInput = input.trim()

        if (trimmedInput.length === 0) {
            return
        }

        createTodoData(trimmedInput).then((todo) => {
            setLoading(false)
            console.log(todo)
            dispatch({type: ACTION.ADD, payload: todo})
        }, []).finally(() => {
            setLoading(false)
        })

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