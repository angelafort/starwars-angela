import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const Cardplanets = ({ planet, indexPlanets }) => {
  const { actions } = useContext(Context);
  const imageUrl = `https://starwars-visualguide.com/assets/img/planets/${indexPlanets}.jpg`;
  const placeholderImageUrl = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';

  return (
    <div className="card bg-dark text-white" style={{ minWidth: '18rem', maxWidth: '18rem', marginRight: '10px' }}>
      <img
        src={imageUrl}
        onError={(e) => { e.target.onerror = null; e.target.src = placeholderImageUrl; }} 
        className="card-img-top"
        alt={planet.name}
      />
      <div className="card-body">
        <h5 className="card-title">{planet.name}</h5>
        <div className="d-flex justify-content-between align-items-end">
          <Link to={`/Planetsinfo/${indexPlanets}`}>
            <button className="btn btn-outline-warning">More Info</button>
          </Link>
          <button onClick={() => actions.addFavoriteItem(planet.name)} className="btn btn-outline-warning">
            <i className="fas fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cardplanets;
