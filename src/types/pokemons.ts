export interface PokemonResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonResult[];
}

export interface PokemonResult {
    name: string;
    url: string;
    id: string;
}

export interface PokemonDetailsResponse {
    abilities: Ability[];
    id: number;
    moves: Move[];
    name: string;
    sprites: {
        front_default: string;
    };
    stats: Stat[];
    types: Type[];
}

export interface Ability {
    ability: {
        name: string;
    };
}

export interface Move {
    move: {
        name: string;
    };
}

export interface Stat {
    base_stat: number;
    stat: {
        name: string;
    };
}

export interface Type {
    slot: number;
    type: {
        name: string;
    };
}

export interface Flavor {
    flavor_text: string;
    language: {
        name: string;
    };
}

export interface PokemonFlavorResponse {
    flavor_text_entries: Flavor[];
    name: string;
    order: number;
}
