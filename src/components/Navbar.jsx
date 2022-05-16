import React, { useContext } from "react";
import FavoriteContext from "../contexts/FavoritesContext";

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);

  const logoUrl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <nav className="mb-3">
      <img src={logoUrl} alt="PokeAPI logo" className="navbar-img" />
      <span>❤️ {favoritePokemons.length}</span>
    </nav>
  );
};

export default Navbar;
