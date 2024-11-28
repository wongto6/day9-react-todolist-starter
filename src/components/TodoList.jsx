import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";

const TodoList = () => {
    return (
        <div>
            <div className="bottom-space">
                <span className="title">Todo List</span>
            </div>
            <span className="top-space">Add the things you need to do today...</span>
            <TodoGroup/>
            <TodoGenerator/>
        </div>
    );
}

export default TodoList