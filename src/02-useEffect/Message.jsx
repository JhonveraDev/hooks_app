import { useEffect, useState } from "react"

export const Message = () => {

  const [cords, setCords] = useState({ x: 0, y: 0 })

  const onMouseMove = ({ clientX: x, clientY: y }) => {
    setCords({x, y});
  };

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])


  return (
    <>
      <h2>El Nombre ya Existe</h2>
      {JSON.stringify(cords)}
    </>
  )
}
