import {useNavigate} from "react-router-dom";

const NotFoundPage =()=>{

    const navigate = useNavigate()

    return (
        <div>
            <h1>404 Not Found</h1>
            <button onClick={()=>{
                navigate("/")
            }} className="nav-button">Go back to Home page</button>
        </div>
    )
}

export default NotFoundPage;