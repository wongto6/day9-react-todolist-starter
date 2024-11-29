import {useContext} from "react";
import {TodoContext} from "../../App";
import "./TodoListStyle.css"
import {ACTION} from "../../context/todoReducer";
import {createTodoData, deleteTodoData, updateTodoData} from "../api/todo";

const TodoItem = (props) => {

    const {dispatch} = useContext(TodoContext)

    function handleDone() {

        updateTodoData(props.item).then((todo)=>{
            dispatch({type: ACTION.ADD, payload: todo.id})
        }, [])

    }

    function handleRemove() {
        deleteTodoData(props.id).then(()=>{
            dispatch({type: ACTION.DELETE, payload: props.id})
        }, [])
    }

    return (
        <div>
            <span>
                {props.item.done ? <input value={"It has be done"} contentEditable={false} onClick={handleDone} className={"done-item"} readOnly={true}/> :
                    <input value={props.item.text} contentEditable={false} onClick={handleDone} className={"doing-item"} readOnly={true}/>}
                <button onClick={handleRemove}>X</button>
            </span>
        </div>
    )
}

export default TodoItem