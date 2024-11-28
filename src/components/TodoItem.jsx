const TodoItem = (props) => {

    function handleDone() {

    }

    function handleRemove() {

    }

    return (
        <div>
            <span>
                <input value={props.item.text} contentEditable={false} onClick={handleDone}/>
                <button onClick={handleRemove}>X</button>
            </span>
        </div>
    )
}

export default TodoItem