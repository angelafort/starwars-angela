import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

const Planetsinfo = () => {
        const { store, actions } = useContext(Context);
        const params = useParams();

        const PlanetsinfoStyle = {
            backgroundImage: `url('https://e0.pxfuel.com/wallpapers/804/170/desktop-wallpaper-star-wars-star-background-best-background-star-wars-universe.jpg')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            padding: '20px',
        };
        useEffect(() => {
            actions.getPlanetDetail(params.id);
        }, [params.id]); 
    

        return (
            <>
           <div style={PlanetsinfoStyle}>
                <div className="container bg-dark">
                    <div className="d-flex row mb-5 ">
                        <div className="col mt-4">
                            <img src={`https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`} className="m-1 rounded" alt="Planet" />
                        </div>
                        <div className="col">
                            <h2 className="text-center text-warning fw-bold mt-4">{store.planetDetail.name}</h2>
                            <p className="fw-lighter text-start mt-4 fs-4 text-light">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis 
                            unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur 
                            magni dolores eos qui ratione voluptatem sequi nesciunt. 
                            </p>
                        </div>
                    </div>
                    <hr className="border-warning border border-1" />
                    <div className="container mt-5">
                        <div className="d-flex justify-content-between row">
                            <div className="col mb-4">
                                <p className="text-warning fw-bold text-center">Name</p>
                                <p className="text-center fw-lighter text-light">{store.planetDetail.name}</p>
                            </div>
                            <div className="col">
                                <p className="text-warning fw-bold text-center">Climate</p>
                                <p className="text-center fw-lighter text-light">{store.planetDetail.climate}</p>
                            </div>
                            <div className="col">
                                <p className="text-warning fw-bold text-center">Population</p>
                                <p className="text-center fw-lighter text-light">{store.planetDetail.population}</p>
                            </div>
                            <div className="col">
                                <p className="text-warning fw-bold text-center">Rotation Period</p>
                                <p className="text-center fw-lighter text-light">{store.planetDetail.rotation_period}</p>
                            </div>
                            <div className="col">
                                <p className="text-warning fw-bold text-center">Orbital Period</p>
                                <p className="text-center fw-lighter text-light">{store.planetDetail.orbital_period}</p>
                            </div>
                            <div className="col">
                                <p className="text-warning fw-bold text-center">Diameter</p>
                                <p className="text-center fw-lighter text-light">{store.planetDetail.diameter}</p>
                            </div>
                        </div>
                    </div>
                </div></div>
            </>
        );
    };
export default Planetsinfo;