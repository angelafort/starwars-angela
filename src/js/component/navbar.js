import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const navbarStyle = {
        backgroundImage: `url('https://e0.pxfuel.com/wallpapers/804/170/desktop-wallpaper-star-wars-star-background-best-background-star-wars-universe.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };

    return (
        <nav className="navbar navbar-light bg-light" style={navbarStyle}>
            <Link to="/">
                <img src="https://cdn.freebiesupply.com/logos/large/2x/star-wars-logo-png-transparent.png" alt="Star Wars Logo" style={{ width: '100px', height: 'auto' }} />
            </Link>
            <div className="ml-auto">
                <Link to="/demo">
                    <button className="btn btn-primary">Favorites</button>
                </Link>
            </div>
        </nav>
    );
};
