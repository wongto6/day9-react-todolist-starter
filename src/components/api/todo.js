import axios from "axios";


export const http = axios.create(
    {baseURL: "http://127.0.0.1:8080", timeout: 5000}
)

export const getTodoData = async () => {
    const response = await http.get("/todos")
    return response.data
}

export const createTodoData = async (text) => {
    const response = await http.post("/todos", {text: text, done: false})
    return response.data
}

export const deleteTodoData = async (id) => {
    const response = await http.delete("/todos/" + id)
    return response.status
}

export const updateTodoData = async (item) => {
    const response = await http.put("/todos", {id: item.id, text: item.text, done: !item.done})
    return response.data
}
