// Hooks
import { useParams } from "react-router-dom";
// Components
import { PokemonDetails } from "../components/PokemonDetails/index";

const Pokemon = () => {
    const { pokemonId } = useParams();

    return <PokemonDetails pokemonId={pokemonId as string} />;
};

export default Pokemon;
