export const TodoItem = ({title, id, removeData}) => {
    return <>
        <div>
            {title} - <button onClick={removeData}>Delete</button>
        </div>
    </>
}