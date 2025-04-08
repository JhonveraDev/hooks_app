import { useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Recolectar Datos T',
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: 'Recolectar Datos Z',
    done: false,
  }
]

export const TodoApp = () => {

  const [todos, dispdatch] = useReducer(todoReducer, initialState);
  
  const handleTodo = (todo) => {
    console.log(todo);
  }

  return (
    <>
      <h1>Todo App: 10 - Pendientes: 2</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos}/>
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleTodo}/>
        </div>
      </div>
    </>
  )
}
