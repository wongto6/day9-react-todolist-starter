import {useContext} from "react";
import {TodoContext} from "../../App";
import {useNavigate} from "react-router-dom";
import DoneGroup from "./DoneGroup";

const DoneList = () => {

    const {state} = useContext(TodoContext)
    const navigate = useNavigate()

    return (
        <div>
            <div className="bottom-space">
                <span className="title">Done List</span>
            </div>
            <DoneGroup/>
            <button onClick={() => {
                navigate("/todolist")
            }} className="nav-button">Navigate to TodoList Page
            </button>
            <br/>
            <button onClick={() => {
                navigate("/unknown")
            }} className="nav-button">Show me 404
            </button>
        </div>
    );
}

export default DoneList