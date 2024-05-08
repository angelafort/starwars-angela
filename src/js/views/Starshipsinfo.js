import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

const Starshipsinfo = () => {
        const { store, actions } = useContext(Context);
        const params = useParams();

        const StarshipsinfoStyle = {
            backgroundImage: `url('https://e0.pxfuel.com/wallpapers/804/170/desktop-wallpaper-star-wars-star-background-best-background-star-wars-universe.jpg')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            padding: '20px',
        };
        useEffect(() => {
            actions.getStarshipsdetail(params.id);
        }, [params.id]); 

        console.log("Starship Detail:", store.StarshipDetail);
        return (
            <>
           <div style={StarshipsinfoStyle}>
                <div className="container bg-dark">
                    <div className="d-flex row mb-5 ">
                        <div className="col mt-4">
                            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.id}.jpg`} className="m-1 rounded" alt="Vehicles" />
                        </div>
                        <div className="col">
                            <h2 className="text-center text-warning fw-bold mt-4">{store.StarshipDetail.model}</h2>
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
                                <p className="text-warning fw-bold text-center">Model</p>
                                <p className="text-center fw-lighter text-light">{store.StarshipDetail.model}</p>
                            </div>
                            <div className="col">
                                <p className="text-warning fw-bold text-center">Vehicle Class</p>
                                <p className="text-center fw-lighter text-light">{store.StarshipDetail.vehicle_class}</p>
                            </div>
                            <div className="col">
                                <p className="text-warning fw-bold text-center">Manufacturer</p>
                                <p className="text-center fw-lighter text-light">{store.StarshipDetail.manufacturer}</p>
                            </div>
                            <div className="col">
                                <p className="text-warning fw-bold text-center">Cost in Credits</p>
                                <p className="text-center fw-lighter text-light">{store.StarshipDetail.cost_in_credits}</p>
                            </div>
                            <div className="col">
                                <p className="text-warning fw-bold text-center">Crew</p>
                                <p className="text-center fw-lighter text-light">{store.StarshipDetail.crew}</p>
                            </div>
                            <div className="col">
                                <p className="text-warning fw-bold text-center">Passengers</p>
                                <p className="text-center fw-lighter text-light">{store.StarshipDetail.passengers}</p>
                            </div>
                        </div>
                    </div>
                </div></div>
            </>
        );
    };
export default Starshipsinfo