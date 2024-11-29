export const todoReducer = (state, action) => {

    switch (action.type) {
        case "ADD": {
            return [...state, {id: Date.now(), text: action.payload, done: false}]
        }
        case "UPDATE": {
            return state.map(item => {
                return item.id === action.payload ? {id: item.id, text: item.text, done: !item.done} : item
            })
        }
        case "DELETE": {
            return state.filter(item => item.id !== action.payload)
        }
        default:
            return state
    }
};