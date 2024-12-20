import {createContext, useReducer} from "react";
import './App.css';
import TodoList from "./components/todo/TodoList";
import {initialState, todoReducer} from "./context/todoReducer";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import {Navigate, useNavigate} from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";
import DoneList from "./components/todo/DoneList";
import HomePage from "./components/HomePage";
import HelpPage from "./components/HelpPage";

export const TodoContext = createContext();

function App() {
    const [state, dispatch] = useReducer(todoReducer, []);

    return (
        <div className="App">
            <TodoContext.Provider value={{state, dispatch}}>
                <Router>
                    <nav>
                        <Link to={'/'}>Home</Link> |
                        <Link to={'/todolist'}>Todo-List</Link> |
                        <Link to={'/done'}>Done-List</Link> |
                        <Link to={'/help'}>Help Page</Link> |
                    </nav>
                    <Routes>
                        <Route path='/' element={<HomePage/>}/>
                        <Route path='/todolist' element={<TodoList/>}/>
                        <Route path='/help' element={<HelpPage/>}/>
                        <Route path='/done' element={<DoneList/>}/>
                        <Route path='*' element={<NotFoundPage/>}/>
                    </Routes>
                </Router>
            </TodoContext.Provider>
        </div>
    );
}

export default App;
