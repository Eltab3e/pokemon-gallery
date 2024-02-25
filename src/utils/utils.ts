interface PokemonColors {
    [key: string]: string;
}

export const colors: PokemonColors = {
    grass: "#00D700",
    poison: "#05AB05",
    fire: "#FF4B4B",
    flying: "#ebebeb",
    bug: "#a6b91a",
    rock: "#b6a136",
    ground: "#e2bf65",
    electric: "#f7d02c",
    fighting: "#c22e28",
    dragon: "#6f35fc",
    water: "#6390f0",
    ice: "#96d9d6",
    ghost: "#735797",
    fairy: "#d685ad",
    normal: "#A8A77A",
    steel: "#b7b7ce",
    dark: "#705746",
    psychic: "#f95587",
};

export const capitalizeFirstLetter = (text: string) => {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1);
};

export const findEngLang = (arr: any[]) => {
    return arr.find(({ language }) => language.name === "en");
};

export const formatText = (text: string) => {
    text = text.replace(/\f/g, " ").replace(/-/g, " ");
    return text;
};
