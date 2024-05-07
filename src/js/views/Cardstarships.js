import React from 'react';
import { Link } from 'react-router-dom';

const Cardstarships = ({ starship, indexStarships }) => {
  const imageUrl = `https://starwars-visualguide.com/assets/img/starships/${indexStarships}.jpg`;
  const placeholderImageUrl = "https://starwars-visualguide.com/assets/img/placeholder.jpg";

    return (
        <div className="card bg-dark text-white" style={{ minWidth: '18rem', maxWidth: '18rem', marginRight: '10px' }}>
            <img
        src={imageUrl}
        onError={(e) => { e.target.onerror = null; e.target.src = placeholderImageUrl; }} 
        className="card-img-top"/>
          <div className="card-body">
            <h5 className="card-title">{starship.name}</h5>
            <div className="d-flex justify-content-between align-items-end">
              <Link to="/Moreinfo">
                <button className="btn btn-outline-warning">More Info</button>
              </Link>
              <button className="btn btn-outline-warning"><i className="fas fa-heart"></i></button>
            </div>
          </div>
        </div>
      );
    };    

    export default Cardstarships;