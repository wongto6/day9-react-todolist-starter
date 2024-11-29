import {useContext} from "react";
import {TodoContext} from "../../App";
import TodoItem from "./TodoItem";
import DoneItem from "./DoneItem";

const DoneGroup = () => {

    const {state} = useContext(TodoContext)

    return (
        <div>
            {state.map((item, index) => {return item.done? <DoneItem key={item.id + index} id={item.id} item={item}/> :null})}
        </div>
    )
}

export default DoneGroup;