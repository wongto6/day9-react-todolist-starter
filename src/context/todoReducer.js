export const todoReducer = (state, action) => {

    switch (action.type) {
        case "ADD": {
            return [...state, {id: Date.now(), text: action.payload, done: false}]
        }
        case "UPDATE": {
            const updateTodo = state.at(action.payload)
            updateTodo.done = true
            console.log(state)
            return state
        }
        case "DELETE": {
            console.log(action.payload)
            console.log(state.filter(item => item.id !== action.payload))
            return state.filter(item => item.id !== action.payload)
        }
        default:
            return state
    }
};