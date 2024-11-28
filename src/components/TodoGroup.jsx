import {useContext} from "react";
import {TodoContext} from "../App";
import TodoItem from "./TodoItem";

const TodoGroup = () => {

    const {state, dispatch} = useContext(TodoContext)

    return (
        <div>
            {state.map((item, index) => {
                return <TodoItem key={item.id + index} item={item}/>
            })}
        </div>
    )
}

export default TodoGroup;