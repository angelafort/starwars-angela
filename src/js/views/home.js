import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Card } from "./Card";
import Cardplanets from "./Cardplanets";
import Cardstarships from "./Cardstarships"; 
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getCharacters();
    actions.getPlanets();
    actions.getStarships();
  }, []);

  return (
    <div className="home-container">
      <div className="text-left">
        <h1 className="white-text">Characters</h1>
        <div className="scroll-container" style={{ overflowY: "auto", marginBottom: "20px" }}>
          <div className="d-flex flex-nowrap">
            {store.characters.map((character, index) => (
              <Card key={index} character={character} indexCharacter={index + 1} id={character.uid} actions={actions} />
            ))}
          </div>
        </div>

        <div>
          <h1 className="white-text">Planets</h1>
          <div className="scroll-container" style={{ overflowY: "auto", marginTop: "20px", marginBottom: "20px" }}>
            <div className="d-flex flex-nowrap">
              {store.planets.map((planet, index) => (
                <Cardplanets key={index} planet={planet} indexPlanets={index + 1} /> 
              ))}
            </div>
          </div>

          <h1 className="white-text">Starships</h1>
          <div className="scroll-container" style={{ overflowY: "auto", marginTop: "20px" }}>
            <div className="d-flex flex-nowrap">
              {store.starships.map((starship, index) => (
                <Cardstarships key={index} starship={starship} indexStarships={index + 1}/> 
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
