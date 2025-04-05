import { useCounter } from "../hooks"
import { Small } from "./Small"
import { useState } from "react";

export const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [state, setState] = useState(false);

  const onShowHide = () => {
    setState(!state)
  }

  return (
    <>
      <h1>Counter <Small counter={counter} /></h1>
      <button onClick={onShowHide} className="btn btn-primary">Show / Hide = {JSON.stringify(state)}</button>
      <button onClick={(() => increment())} className="btn btn-primary">+1</button>
    </>
  )
}