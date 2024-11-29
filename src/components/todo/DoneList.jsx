import {useContext} from "react";
import {TodoContext} from "../../App";
import {useNavigate} from "react-router-dom";
import DoneGroup from "./DoneGroup";

const DoneList = () => {

    const {state} = useContext(TodoContext)
    const navigate = useNavigate()

    function handleNavToCounter() {
        navigate("/counter")
    }

    function handleNavToUnknown() {
        navigate("/unknown")
    }

    function handleNavToTodolist() {
        navigate("/")
    }

    return (
        <div>
            <div className="bottom-space">
                <span className="title">Done List</span>
            </div>
            <DoneGroup/>
            <button onClick={handleNavToTodolist} className="nav-button">Navigate to TodoList Page</button>
            <br/>
            <button onClick={handleNavToCounter} className="nav-button">Navigate to Counter Page</button>
            <br/>
            <button onClick={handleNavToUnknown} className="nav-button">Show me 404</button>
        </div>
    );
}

export default DoneList