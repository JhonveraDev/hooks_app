import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'Jhon Vera',
    email: 'correo@gmail.com'
  })

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    })
  }

  const { username, email } = formState;

  useEffect(() => {
    console.log('useEffect unica vez')
  }, []);

  useEffect(() => {
    console.log('El Nombre ha cambiado')
  }, [username]);

  useEffect(() => {
    console.log('El Email ha cambiado')
  }, [email]);

  return (
    <>
      <h1>Use Effect</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      {
        (username === 'Jhon') && <Message />
      }
      <input
        type="text"
        className="form-control mt-2"
        placeholder="m@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
    </>
  )
}
