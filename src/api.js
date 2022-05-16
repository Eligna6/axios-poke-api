import axios from "axios";

export const searchPokemon = async (pokemon) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const res = await axios.get(url);
    const data = await res.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getPokemons = async (limit = 10, offset = 0) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const res = await axios.get(url);
    const data = await res.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getPokemonData = async (url) => {
  try {
    // let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const res = await axios.get(url);
    const data = await res.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};
