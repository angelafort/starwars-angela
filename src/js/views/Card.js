import React from "react";
import { Link } from "react-router-dom";

const Card = ({ character, indexCharacter }) => {
  const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${indexCharacter}.jpg`;
  const placeholderImageUrl = "https://starwars-visualguide.com/assets/img/placeholder.jpg";

  return (
    <div className="card" style={{ minWidth: '18rem', maxWidth: '18rem', marginRight: '10px' }}>
      <img
        src={character ? imageUrl : placeholderImageUrl}
        onError={(e) => { e.target.onerror = null; e.target.src = placeholderImageUrl; }} 
        className="card-img-top"
        alt={character ? character.name : "personaje de star wars"}
      />
      <div className="card-body">
        <div>
          <h5 className="card-title">{character ? character.name : "Unknown"}</h5>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div>
            <Link to="/Moreinfo">
              <a href="#" className="btn btn-primary">More Info</a>
            </Link>
          </div>
          <div>
            <button className="btn btn-outline-danger"><i className="fas fa-heart"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Card };
