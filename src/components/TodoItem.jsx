import {useContext} from "react";
import {TodoContext} from "../App";
import "./TodoListStyle.css"

const TodoItem = (props) => {

    const {dispatch} = useContext(TodoContext)

    function handleDone() {
        dispatch({type: "UPDATE", payload: props.id})
    }

    function handleRemove() {
        dispatch({type: "DELETE", payload: props.id})
    }

    return (
        <div>
            <span>
                {props.item.done ? <input value={"It has be done"} contentEditable={false} onClick={handleDone} className={"done-item"}/> :
                    <input value={props.item.text} contentEditable={false} onClick={handleDone} className={"doing-item"}/>}
                <button onClick={handleRemove}>X</button>
            </span>
        </div>
    )
}

export default TodoItem