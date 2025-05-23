import { useForm } from "../hooks/useForm"

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({description: ''});

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description: description,
    }

    onNewTodo(newTodo);
    onResetForm();
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Que hay que hacer?"
        className="form-control"
        value={description}
        onChange={onInputChange}
        name="description"
      />
      <button
        type="submit"
        className="btn btn-outline-primary mt-1"
      >Agregar</button>
    </form>
  )
}
