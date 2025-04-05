import { useRef } from "react"

export const FocusScreen = () => {

  const refName = useRef();
  const refLastName = useRef();

  const setFocus = (ref) => {
    ref.current.select();
  }

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
        type="text"
        placeholder="Ingrese su Nombre"
        className="form-control"
        ref={refName}
      />
      <input
        type="text"
        placeholder="Ingrese su Apellido"
        className="form-control"
        ref={refLastName}
      />
      <button className="btn btn-primary mt-2" onClick={() => setFocus(refName)}>Set Focus name</button>
      <button className="btn btn-primary mt-2" onClick={() => setFocus(refLastName)}>Set Focus Last Name</button>
    </>
  )
}
