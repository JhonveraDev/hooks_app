import { useCounter } from "../hooks/useCounter"

export const CustomHook = () => {

  const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1>Counter With Custom Hook: {counter}</h1>
      <hr />
      <button className="btn btn-primary" onClick={() => increment(5)}>+ 1</button>
      <button className="btn btn-primary" onClick={reset}>Reset</button>
      <button className="btn btn-primary" onClick={() => decrement(8)}>- 1</button>
    </>
  )
}
