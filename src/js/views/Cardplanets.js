import React from 'react';
import { Link } from 'react-router-dom';

const Cardplanets = ({ planet, indexPlanets }) => {
  const imageUrl = `https://starwars-visualguide.com/assets/img/planets/${indexPlanets}.jpg`;
  const placeholderImageUrl = "https://starwars-visualguide.com/assets/img/placeholder.jpg";

  // Verificar si planet es undefined antes de acceder a su propiedad name
  if (!planet) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card" style={{ minWidth: '18rem', maxWidth: '18rem', marginRight: '10px' }}>
      <img
        src={imageUrl}
        onError={(e) => { e.target.onerror = null; e.target.src = placeholderImageUrl; }} 
        className="card-img-top"
        alt={planet.name}
      />
      <div className="card-body">
        <h5 className="card-title">{planet.name}</h5>
        <div className="d-flex justify-content-between align-items-end">
          <Link to="/Moreinfo">
            <button className="btn btn-primary">More Info</button>
          </Link>
          <button className="btn btn-outline-danger"><i className="fas fa-heart"></i></button>
        </div>
      </div>
    </div>
  );
};

export default Cardplanets;
