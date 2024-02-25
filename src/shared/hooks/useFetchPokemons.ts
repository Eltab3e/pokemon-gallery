import { useQuery } from "@tanstack/react-query";
import { fetchPokemons } from "../../services/api";

export function useFetchPokemons(limit: number, offset: number) {
    return useQuery({
        queryKey: ["pokemons", limit, offset],
        queryFn: () => fetchPokemons(limit, offset),
    });
}
