import { useCounter, useFetch } from "../hooks"
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHooks = () => {

  const { increment, decrement, counter } = useCounter(7);
  const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

  const handleDecrement = () => {
    decrement(1);
  };

  const handleIncrement = () => {
    increment(1);
  }

  return (
    <>
      <h1>Informacion de Pokemon</h1>
      <hr />
      {isLoading
        ? <LoadingMessage />
        : <PokemonCard
          id={data?.id}
          name={data?.name}
          sprites={[
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
            data.sprites.back_shiny,
          ]}
        />
      }
      <h2>{data?.name}</h2>
      <pre>Pokemon Info</pre>
      <button className="btn btn-primary mt-2" onClick={handleDecrement}>Anterior</button>
      <button className="btn btn-primary mt-2" onClick={handleIncrement}>Siguiente</button>
    </>
  )
}
