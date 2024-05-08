import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const { store, actions } = useContext(Context);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const navbarStyle = {
        backgroundImage: `url('https://e0.pxfuel.com/wallpapers/804/170/desktop-wallpaper-star-wars-star-background-best-background-star-wars-universe.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        padding: '0 20px',
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleRemoveFavorite = (name) => {
        actions.removeFavorite(name);
    };

    return (
        <nav className="navbar navbar-light bg-light" style={navbarStyle}>
            <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Star_Wars_Logo..png" alt="Star Wars Logo" style={{ width: '100px', height: 'auto' }} />
            </Link>
            <div className="ml-auto">
                <div className="dropdown" onClick={toggleDropdown}>
                    <button className="btn btn-outline-warning dropdown-toggle">
                        Favorites ({store.favoriteItems ? store.favoriteItems.length : 0})
                    </button>
                    {dropdownOpen &&
                        <div className="dropdown-menu bg-dark" style={{ display: 'block', position: 'absolute' }}>
                            {store.favoriteItems && store.favoriteItems.map((favorite, index) => (
                                <div key={index} className="d-flex justify-content-between align-items-center">
                                    <p className="text-light">{favorite}</p>
                                    <button onClick={() => handleRemoveFavorite(favorite)} className="btn btn-link text-danger">
                                        <i className="fas fa-trash-alt"></i>
                                    </button>
                                </div>
                            ))}
                        </div>
                    }
                </div> 
            </div>
        </nav>
    );
};
