import axios from "axios";

const BASE_URL = `https://pokeapi.co/api/v2`;
const apiClient = axios.create({ baseURL: BASE_URL });

export default apiClient;
