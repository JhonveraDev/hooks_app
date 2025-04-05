import { memo } from "react";

export const Small = memo(({ counter }) => {

  console.log('Re-Dibujando :c');

  return (
    <div>{counter}</div>
  )
})
