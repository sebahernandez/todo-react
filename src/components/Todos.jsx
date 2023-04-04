import Todo from "./Todo";

const Todos = ({todos, deletetodo, updatetodo}) => {
    console.log(todos)
  return (
    <div>
        <h2 className="text-center my-5">Todos</h2>
        <ul className="list-group">
            {
                todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} deletetodo={deletetodo} updatetodo={updatetodo}/>
                ))
            }

            {
                todos.length === 0 ? <li className="list-group-item text-center">No hay todos</li> : null
            }
        </ul>
    </div>
  )
};
export default Todos;
