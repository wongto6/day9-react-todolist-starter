import {useContext} from "react";
import {TodoContext} from "../App";

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
                <input value={props.item.text} contentEditable={false} onClick={handleDone}/>
                <button onClick={handleRemove}>X</button>
            </span>
        </div>
    )
}

export default TodoItem