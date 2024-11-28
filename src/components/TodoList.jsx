import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";

const TodoList = () => {
    return (
        <div>
            <span>This is the TodoListComponent</span>
            <TodoGroup/>
            <TodoGenerator/>
        </div>
    );
}

export default TodoList