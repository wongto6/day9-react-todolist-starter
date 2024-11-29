import {useContext, useState} from "react";
import {TodoContext} from "../../App";
import "./TodoListStyle.css"
import {ACTION} from "../../context/todoReducer";
import {deleteTodoData, updateTodoData} from "../api/todo";
import {LoadingOutlined} from "@ant-design/icons";
import {Spin} from "antd";

const TodoItem = (props) => {

    const {dispatch} = useContext(TodoContext)
    const [updateLoading, setUpdateLoading] = useState(false)
    const [deleteLoading, setDeleteLoading] = useState(false)

    function handleDone() {

        updateTodoData(props.item).then((todo) => {
            setUpdateLoading(true)
            dispatch({type: ACTION.UPDATE, payload: todo.id})
        }, []).finally(() => {
            setUpdateLoading(false)
        })

    }

    function handleRemove() {
        deleteTodoData(props.id).then(() => {
            setDeleteLoading(true)
            dispatch({type: ACTION.DELETE, payload: props.id})
        }, []).finally(() => {
            setDeleteLoading(false)
        })
    }

    function handleEdit(){

    }

    return (
        <div>
            <span>
                {updateLoading || deleteLoading ? <Spin indicator={<LoadingOutlined spin/>}/> : props.item.done ?
                    <input value={"It has be done"} contentEditable={false} onClick={handleDone} className={"done-item"}
                           readOnly={true}/> :
                    <input value={props.item.text} contentEditable={false} onClick={handleDone} className={"doing-item"}
                           readOnly={true}/>}
                <button onClick={handleEdit} className={"edit-bt"}>Edit</button>
                <button onClick={handleRemove}>X</button>
            </span>
        </div>
    )
}

export default TodoItem