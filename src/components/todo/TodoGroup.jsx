import {useContext} from "react";
import {TodoContext} from "../../App";
import TodoItem from "./TodoItem";

const TodoGroup = (props) => {

    const {currentPage, pageSize} = props

    const {state} = useContext(TodoContext)

    return (
        <div>
            {state.slice((currentPage - 1) * pageSize, currentPage * pageSize).map((item, index) => {
                return <TodoItem key={item.id + index} id={item.id} item={item}/>
            })}
        </div>
    )
}

export default TodoGroup;