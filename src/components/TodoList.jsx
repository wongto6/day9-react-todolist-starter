import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import {useContext} from "react";
import {TodoContext} from "../App";

const TodoList = () => {

    const {state} = useContext(TodoContext)

    return (
        <div>
            <div className="bottom-space">
                <span className="title">Todo List</span>
            </div>
            {state.length > 0 ? null : <span className="top-space">Add the things you need to do today...</span>}
            <TodoGroup/>
            <TodoGenerator/>
        </div>
    );
}

export default TodoList