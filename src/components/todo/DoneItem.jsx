import {useContext} from "react";
import {TodoContext} from "../../App";
import "./TodoListStyle.css"
import {ACTION} from "../../context/todoReducer";

const DoneItem = (props) => {

    return (
        <div>
            <span>
               <input value={props.item.text} contentEditable={false} className={"doing-item"}
                      readOnly={true}/>
                <button>X</button>
            </span>
        </div>
    )
}

export default DoneItem