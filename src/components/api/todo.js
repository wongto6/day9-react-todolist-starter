import axios from "axios";


export const http = axios.create(
    {baseURL: "https://67495be5868020296630a61f.mockapi.io/", timeout: 5000}
)

export const getTodoData = async () =>{
    const response = await http.get("todo/TodoItems")
    return response.data
}
