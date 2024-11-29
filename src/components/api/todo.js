import axios from "axios";


export const http = axios.create(
    {baseURL: "https://67495be5868020296630a61f.mockapi.io/", timeout: 5000}
)

export const getTodoData = async () =>{
    const response = await http.get("todo/TodoItems")
    return response.data
}

export const createTodoData = async(text)=>{
    const response = await http.post("todo/TodoItems",{id:Date.now(), text:text, done:false})
    return response.data
}

export const deleteTodoData = async(id)=>{
    const response = await http.delete("todo/TodoItems/" + id)
    return response.status
}

export const updateTodoData = async(id)=>{
    const response = await http.put("todo/TodoItems/" + id)
    return response.data
}