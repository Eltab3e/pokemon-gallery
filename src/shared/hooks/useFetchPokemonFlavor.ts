import { useQuery } from "@tanstack/react-query";
import { fetchPokemonFlavor } from "../../services/api";

export function useFetchPokemonFlavor(id: string) {
    return useQuery({
        queryKey: ["flavor", id],
        queryFn: () => fetchPokemonFlavor(id),
    });
}
