import { useQuery } from "@tanstack/react-query";
import { fetchPokemonById } from "../../services/api";

export function useFetchPokemonById(id: string) {
    return useQuery({
        queryKey: ["details", id],
        queryFn: () => fetchPokemonById(id),
        enabled: !!id,
    });
}
