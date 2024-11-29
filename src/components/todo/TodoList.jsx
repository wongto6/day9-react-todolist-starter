import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import {useContext, useEffect, useState} from "react";
import {TodoContext} from "../../App";
import {useNavigate} from "react-router-dom";
import {getTodoData, todoData} from "../api/todo";
import {ACTION} from "../../context/todoReducer";

const TodoList = () => {
    const {state, dispatch} = useContext(TodoContext)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        getTodoData().then((todos) => {
            dispatch({type: ACTION.LOAD, payload: todos})
        }).finally(() => {
                setLoading(false)
            }
        )
    }, []);

    function handleNavToCounter() {
        navigate("/counter")
    }

    function handleNavToUnknown() {
        navigate("/unknown")
    }

    function handleNavToDoneList() {
        navigate('done')
    }

    return (
        <div>
            <div className="bottom-space">
                <span className="title">Todo List</span>
            </div>
            {state.length > 0 ? null : <span className="top-space">Add the things you need to do today...</span>}
            <TodoGroup/>
            <TodoGenerator/>
            <button onClick={handleNavToCounter} className="nav-button">Navigate to Counter Page</button>
            <br/>
            <button onClick={handleNavToDoneList} className="nav-button">Navigate to Done List Page</button>
            <br/>
            <button onClick={handleNavToUnknown} className="nav-button">Show me 404</button>
        </div>
    );
}

export default TodoList