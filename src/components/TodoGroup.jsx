import {useContext} from "react";
import {TodoContext} from "../App";
import TodoItem from "./TodoItem";

const TodoGroup = () => {

    const {state, dispatch} = useContext(TodoContext)

    return (
        <div>
            {state.map((item, index) => {
                return item.done? null:<TodoItem key={item.id + index} id={item.id} item={item}/>

            })}
        </div>
    )
}

export default TodoGroup;