import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Accordion } from 'react-bootstrap';
import './logement.css';


function Logement() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [logement, setLogement] = useState({
        pictures: {},
        tags: [],
       
    }

    );
    const [showDescription, setShowDescription] = useState(false);
    const [showEquipments, setShowEquipments] = useState(false);

    useEffect(() => {
        fetch(`https://titi.startwin.fr/logements/${id}`)
            .then(response => response.json())
            .then(data => {
                if (data.error){
                    navigate.push('/404');
                }else {

                    setLogement(data);
                }
            
            });
            
    }, [id]);

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };

    const toggleEquipments = () => {
        setShowEquipments(!showEquipments);
    };
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    //NOTE: on utilise la syntaxe des hooks pour créer une variable d'état qui va nous permettre de stocker l'index de l'image courante
    //NOTE: on initialise cette variable à 0, car on veut afficher la première image du tableau par défaut
    const { pictures } = logement;
    //NOTE: on utilise la syntaxe de la décomposition pour récupérer la propriété "pictures" de l'objet "logement"

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    };
    //NOTE: on utilise la syntaxe des hooks pour mettre à jour la variable d'état "currentImageIndex"
    //prevIndex + 1) % pictures.length
    //NOTE: si prevIndex + 1 est égal à pictures.length, on retourne 0, sinon on retourne prevIndex + 1

    const previousImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
        );
    };
    //NOTE: on utilise la syntaxe des hooks pour mettre à jour la variable d'état "currentImageIndex"
    //pevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    //NOTE: si prevIndex === 0, on retourne pictures.length - 1, sinon on retourne prevIndex - 1

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div>

                        <div className="carousel">

                            <span onClick={previousImage}><i className="fa-solid fa-arrow-left"></i></span>
                            <img className="carousel-img" src={pictures[currentImageIndex]} alt="Logement" />
                            <span onClick={nextImage}><i className="fa-solid fa-arrow-right"></i></span>
                        </div>
                        <div className="logement-infos-host">
                        <div className="logement-info">
                        <h1 className="logement-title">{logement.title}</h1>
                        <p className="logement-location">{logement.location}</p>
                        </div>
                        <div className="logement-host">
                            {logement.host && <img className="logement-host-picture" src={logement.host.picture} alt={logement.host.name} />}
                            {logement.host && <p>{logement.host.name}</p>}
                            {logement.rating && (
                                <div>
                                    <div>
                                        {Array.from({ length: 5 }, (_, index) => (
                                            //
                                            <span key={index}>
                                                {index < logement.rating ? <i class="fa-solid fa-star"></i> : <i class="fa-regular fa-star"></i>}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        </div>
                        <div className="tags">
                        {logement.tags.map((tag) => (
                        <span>{tag}</span>
                    ))}
                        </div>
                        <div className="button">
                            <div className="button-desc">
                                <button onClick={toggleDescription}>
                                    {showDescription ? <i class="fleche fa-solid fa-angle-up"></i> : <i class="fleche fa-solid fa-angle-down"></i>} Afficher la description
                                </button>
                                {showDescription && <span className={`your-existing-class ${showDescription ? 'active' : ''}`}>{logement.description}</span>}
                                </div>
                                <div className="button-equipments">
                                <button onClick={toggleEquipments}>
                                    {showEquipments ? <i class="fleche fa-solid fa-angle-up"></i> : <i class="fleche fa-solid fa-angle-down"></i>} Afficher les équipements
                                </button>
                                {showEquipments && (
                                    <div className="equipment-list">
                                        {logement.equipments.map((equipment) => (
                                            console.log(equipment),
                                            <span className={`equipment ${showEquipments ? 'active' : ''}`}>{equipment}</span>
                                          
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Logement;