import { useFetch } from "../hooks"

export const MultipleCustomHooks = () => {

  const { data, hasError, isLoading } = useFetch('https://pokeapi.co/api/v2/pokemon/22');

  return (
    <>
      <h1>Informacion de Pokemon</h1>
      <hr />
      {isLoading && <p>Cargando...</p>}
      <h2>{data?.name}</h2>
      <pre>Pokemon Info</pre>
    </>
  )
}
