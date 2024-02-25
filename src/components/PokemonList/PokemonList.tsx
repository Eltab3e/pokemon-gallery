// MUI imports
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// Components
import { ErrorMessage, Loader } from "../shared";
import { PokemonCard, Pagination } from "./index";
// Shared
import { PokemonResult } from "../../types/pokemons";
// Hooks
import { useState } from "react";
import {
    useFetchPokemons,
    useFetchPokemonById,
    useFetchPokemonFlavor,
} from "../../shared/hooks/index";

const PokemonDetailsFetcher: React.FC<{ id: string }> = ({ id }) => {
    const { data: details } = useFetchPokemonById(id);
    const { data: flavors } = useFetchPokemonFlavor(id);

    return (
        details &&
        flavors && (
            <PokemonCard
                details={details}
                flavors={flavors}
            />
        )
    );
};

const PokemonList: React.FC = () => {
    const [offset, setOffset] = useState(0);
    const { data, isLoading, isError } = useFetchPokemons(6, offset);

    const totalPages = data?.count;

    const handleNextPage = () => {
        if (totalPages && offset + 6 < totalPages) {
            const newOffset = offset + 6;
            setOffset(newOffset);
        }
    };

    const handlePrevPage = () => {
        if (offset > 0) {
            const newOffset = offset - 6;
            setOffset(newOffset);
        }
    };

    if (isError) {
        return <ErrorMessage>Oops, Unknown Error Occurred!</ErrorMessage>;
    }

    return (
        <Box>
            <Grid
                container
                rowSpacing={4}
            >
                {isLoading ? (
                    <Loader />
                ) : (
                    data?.results.map((pokemon: PokemonResult) => {
                        // Extract pokemon id from url
                        const urlParts = pokemon.url.split("/");
                        const id = urlParts[urlParts.length - 2];

                        return (
                            <Grid
                                item
                                container
                                justifyContent="center"
                                xs={12}
                                sm={6}
                                md={4}
                                lg={4}
                                key={pokemon.name}
                            >
                                <PokemonDetailsFetcher id={id} />
                            </Grid>
                        );
                    })
                )}

                {!isLoading && (
                    <Pagination
                        onNext={handleNextPage}
                        onPrev={handlePrevPage}
                        hasNext={totalPages && offset + 6 < totalPages}
                        hasPrev={offset > 0}
                    />
                )}
            </Grid>
        </Box>
    );
};

export default PokemonList;
