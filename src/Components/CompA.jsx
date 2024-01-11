import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from '../assets/PokemonCardsLogobyDesigner.png';



function CompA() {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [imageUrl, setImageUrl] = useState(logo);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
        setName(res.data.name);
        setImageUrl(res.data.sprites.front_default);
        setError(null);
      } catch (error) {
        setError("Failed to fetch Pokémon data.");
      } finally {
        setLoading(false);
      }
    }

    if (num) {
      getData();
    }
  }, [num]);

  return (
    <div className="Main">
      <div className="centered-content">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : (
          <>
            <h1 className="bg">{name}</h1>
            <img
            className="pic"
              src={imageUrl}
              alt={`Pokemon ${name}`}
              style={{ width: "200px", height: "200px"  }} // Adjust the size as needed
            />
            <p>Select a Pokémon:</p>
            <select
              name="pokemon"
              value={num}
              onChange={(event) => {
                setNum(event.target.value);
              }}
            >
              <option value="">Select</option>
              <option value="1">Bulbasaur</option>
              <option value="25">Pikachu</option>
              <option value="3">Venusaur</option>
              <option value="4">Charmander</option>
              <option value="5">Charmeleon</option>
            </select>
          </>
        )}
      </div>
    </div>
  );
}

export default CompA;
