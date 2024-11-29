import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import {useContext, useEffect, useState} from "react";
import {TodoContext} from "../../App";
import {useNavigate} from "react-router-dom";
import {getTodoData} from "../api/todo";
import {ACTION} from "../../context/todoReducer";
import {LoadingOutlined} from '@ant-design/icons';
import {Flex, Spin} from 'antd';
import {Pagination} from 'antd';

const TodoList = () => {
    const {state, dispatch} = useContext(TodoContext)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 5

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

    function handlePageChange(page){
        setCurrentPage(page)
    }

    return (
        <div>{
            loading ? <Spin indicator={<LoadingOutlined style={{fontSize: 48}} spin/>}/> : <div>
                <div className="bottom-space">
                    <span className="title">Todo List</span>
                </div>
                {state.length > 0 ? null : <span className="top-space">Add the things you need to do today...</span>}
                <TodoGroup currentPage={currentPage} pageSize={pageSize}/>
                <TodoGenerator/>
                <Pagination defaultCurrent={1} pageSize={pageSize} showTotal={false} total={state.length}
                            onChange={handlePageChange} className={"paging"}/>
                <button onClick={handleNavToCounter} className="nav-button">Navigate to Counter Page</button>
                <br/>
                <button onClick={handleNavToDoneList} className="nav-button">Navigate to Done List Page</button>
                <br/>
                <button onClick={handleNavToUnknown} className="nav-button">Show me 404</button>
            </div>
        }
        </div>
    );
}

export default TodoList