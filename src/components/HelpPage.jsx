import {useNavigate} from "react-router-dom";

const HelpPage = () => {

    const navigate = useNavigate()

    return (
        <div>
            <h2>If you have problem, Please contact wongto6@oocl.com for help.</h2>
            <button onClick={() => {
                navigate("/")
            }} className="nav-button">Go back to Home page
            </button>
        </div>
    )
}

export default HelpPage;