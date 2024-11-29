import {useNavigate} from "react-router-dom";

const NotFoundPage =()=>{

    const navigate = useNavigate()

    function handleNavToTodolist(){
        navigate("/")
    }

    return (
        <div>
            <h1>404 Not Found</h1>
            <button onClick={handleNavToTodolist} className="nav-button">Go back to Main page</button>
        </div>
    )
}

export default NotFoundPage;