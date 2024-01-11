import { useState } from "react";
import logo from '../src/assets/PokemonCardsLogobyDesigner.png';
import "./App.css";
import CompA from "./Components/CompA";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <span>
        <img src={logo} alt="logo" className="logo" />
      </span>
      <div className="card">
        <div className="card2">
          <CompA />
        </div>
      </div>
    </>
  );
}

export default App;
