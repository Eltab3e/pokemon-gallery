import apiClient from "../shared/apiClient";

export const fetchPokemons = (limit: number, offset: number) => {
    return apiClient
        .get(`/pokemon?limit=${limit}&offset=${offset}`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            throw err;
        });
};

export const fetchPokemonById = (id: string) => {
    return apiClient
        .get(`/pokemon/${id}`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            throw err;
        });
};

export const fetchPokemonFlavor = (id: string) => {
    return apiClient
        .get(`/pokemon-species/${id}/`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            throw err;
        });
};
