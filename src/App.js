import {createContext, useReducer} from "react";
import './App.css';
import TodoList from "./components/todo/TodoList";
import {initialState, todoReducer} from "./context/todoReducer";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Navigate, useNavigate} from "react-router-dom";
import MultipleCounter from "./components/counter/MultipleCounter";
import NotFoundPage from "./components/NotFoundPage";

export const TodoContext = createContext();

function App() {
    const [state, dispatch] = useReducer(todoReducer, []);

    return (
        <div className="App">
            <TodoContext.Provider value={{state, dispatch}}>
                <Router>
                    <Routes>
                        <Route path='/' element={<TodoList/>}/>
                        <Route path='/counter' element={<MultipleCounter/>}/>
                        <Route path='*' element={<NotFoundPage/>}/>
                    </Routes>
                </Router>
            </TodoContext.Provider>
        </div>
    );
}

export default App;
