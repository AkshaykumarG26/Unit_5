import "./todo.css"

// props

function Todos({ children}){
    
    return <div className="main">
        {" "}
        Todos: {children}</div>
}

export default Todos;

