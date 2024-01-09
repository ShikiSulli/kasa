import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './home.css';
import React from "react";


function Home() {
    const [logement, setLogement] = useState([]);

    useEffect(() => {
        fetch("https://titi.startwin.fr/logements")
            .then((res) => res.json())
            .then((data) => setLogement(data));
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="Home">
                        <div className="Banner">
                            <img  className="hero" src="/imagespublic/hero.png" alt="" />
                        </div>
                        <div className="card-css">
                            <div className="card-grid">
                                {logement.map((logement) => (
                                    <div className="card" style={{ width: "25rem" }} key={logement.id}>
                                        <img src={logement.cover} className="card-img-top" alt={logement.title} />
                                        <div className="card-body">
                                            <Link to={`/logement/${logement.id}`}>{logement.title}</Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;