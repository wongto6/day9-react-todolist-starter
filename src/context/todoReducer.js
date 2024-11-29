export const ACTION = {
    ADD:"ADD",
    UPDATE:"UPDATE",
    DELETE:"DELETE",
    LOAD:"LOAD"
}

export const todoReducer = (state, action) => {

    switch (action.type) {
        case ACTION.ADD: {
            const createdReturn = action.payload
            return [...state, {id: createdReturn.id, text: createdReturn.text, done: createdReturn.done}]
        }
        case ACTION.UPDATE: {
            return state.map(item => {
                return item.id === action.payload ? {id: item.id, text: item.text, done: !item.done} : item
            })
        }
        case ACTION.DELETE: {
            return state.filter(item => item.id !== action.payload)
        }
        case ACTION.LOAD:{
            return action.payload
        }
        default:
            return state
    }
};