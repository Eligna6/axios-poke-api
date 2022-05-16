import React, { useContext } from "react";
import FavoriteContext from "../contexts/FavoritesContext";

const Pokemon = (props) => {
  const { pokemon } = props;
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext);

  const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "🖤";

  const clickHeart = (e) => {
    e.preventDefault();
    updateFavoritePokemons(pokemon.name);
  };

  return (
    <div className="pokemon-card">
      <figure className="pokemon-img-container">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name + " front view"}
          className="pokemon-img"
        />
      </figure>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <span>#{pokemon.id}</span>
        </div>
        <div className="card-bottom">
          <span className="pokemon-type">
            {pokemon.types.map((type, idx) => (
              <div key={idx} className="pokemon-type-text">
                {type.type.name}
              </div>
            ))}
          </span>
          <button onClick={clickHeart}>
            <aside className="pokemon-favorite">{heart}</aside>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
