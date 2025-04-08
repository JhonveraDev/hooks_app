import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [

]

const init = () => {
  return JSON.parse(localStorage.getItem('todos') || []);
}

export const TodoApp = () => {

  const [todos, dispdatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleNewTodo = (todo) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    }
    dispdatch(action);
  }

  const handleDeleteTodo = (id) => {
    const remove = {
      type: '[TODO] Remove Todo',
      payload: id
    }

    dispdatch(remove)
  }

  return (
    <>
      <h1>Todo App: 10 - Pendientes: 2</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  )
}
