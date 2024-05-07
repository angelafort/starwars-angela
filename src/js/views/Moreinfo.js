import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Moreinfo = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    const moreinfoStyle = {
        backgroundImage: `url('https://e0.pxfuel.com/wallpapers/804/170/desktop-wallpaper-star-wars-star-background-best-background-star-wars-universe.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        padding: '20px',
        
    };
    useEffect(() => {
        actions.getCharacterDescription(params.id);
    }, [params.id]); 


    return (
        <>
       <div style={moreinfoStyle}>
            <div className="container bg-dark">
                <div className="d-flex row mb-5 ">
                    <div className="col mt-4">
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`} className="m-1 rounded" alt="Character" />
                    </div>
                    <div className="col">
                        <h2 className="text-center text-warning fw-bold mt-4">{store.CharacterDescription.name}</h2>
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
                            <p className="text-center fw-lighter text-light">{store.CharacterDescription.name}</p>
                        </div>
                        <div className="col">
                            <p className="text-warning fw-bold text-center">Birth Year</p>
                            <p className="text-center fw-lighter text-light">{store.CharacterDescription.birth_year}</p>
                        </div>
                        <div className="col">
                            <p className="text-warning fw-bold text-center">Gender</p>
                            <p className="text-center fw-lighter text-light">{store.CharacterDescription.gender}</p>
                        </div>
                        <div className="col">
                            <p className="text-warning fw-bold text-center">Height</p>
                            <p className="text-center fw-lighter text-light">{store.CharacterDescription.height}</p>
                        </div>
                        <div className="col">
                            <p className="text-warning fw-bold text-center">Skin Color</p>
                            <p className="text-center fw-lighter text-light">{store.CharacterDescription.skin_color}</p>
                        </div>
                        <div className="col">
                            <p className="text-warning fw-bold text-center">Eye Color</p>
                            <p className="text-center fw-lighter text-light">{store.CharacterDescription.eye_color}</p>
                        </div>
                    </div>
                </div>
            </div></div>
        </>
    );
};
export default Moreinfo;

