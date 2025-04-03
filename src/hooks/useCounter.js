import { useState } from "react"

export const useCounter = (initialValue = 10) => {

  const [counter, setCounter] = useState(initialValue);

  const increment = (value = 3) => {
    setCounter(counter + value)
  }

  const reset = () => {
    setCounter(initialValue)
  }

  const decrement = (value = 3) => {
    if (counter - value <= 0) return
    setCounter(counter - value)
  }

  return {
    counter,
    increment,
    decrement,
    reset,
  }
}