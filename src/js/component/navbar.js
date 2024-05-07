import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const { store } = useContext(Context);

    const navbarStyle = {
        backgroundImage: `url('https://e0.pxfuel.com/wallpapers/804/170/desktop-wallpaper-star-wars-star-background-best-background-star-wars-universe.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        padding: '0 20px',
    };

    return (
        <nav className="navbar navbar-light bg-light" style={navbarStyle}>
            <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Star_Wars_Logo..png" alt="Star Wars Logo" style={{ width: '100px', height: 'auto' }} />
            </Link>
            <div className="ml-auto">
                <div className="dropdown">
                    <button className="btn btn-outline-warning dropdown-toggle">
                        Favorites 
                    </button>
                    <div className="dropdown-menu">
                        <div className="row px-3">
                            {store.Favorites.map((Favorite, index) => (
                                <div className="col-6" key={index}>
                                    <p>{Favorite}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> 
            </div>
        </nav>
    );
};