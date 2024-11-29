import "./TodoListStyle.css"

const DoneItem = (props) => {

    return (
        <div>
            <span>
               <input value={props.item.text} contentEditable={false} className={"doing-item"}
                      readOnly={true}/>
                <button>X</button>
            </span>
        </div>
    )
}

export default DoneItem