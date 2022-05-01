import React, { useContext } from "react";

// Layout
import DogPlaceholder from "../layout/placeholder_dog.jpg";

// Context
import PetsContext from "../../context/pets/PetsContext";

// CSS
import "./PetBar.css";

const PetBar = ({ animal }) => {
    const petContext = useContext(PetsContext);
    const { deletePet } = petContext;

    const { name, url, id } = animal;
    const breed = animal.breeds.primary;
    let photo;
    if (animal.photos && animal.photos[0] && animal.photos[0].full) {
        photo = animal.photos[0].full;
    } else {
        photo = DogPlaceholder;
    }

    const removePet = () => {
        // delete from DB using id

        deletePet(id);
    };

    return (
        <div className="capsule">
            <div className="item name">
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <span>{name}</span>
                </a>
            </div>
            <div className="icon">
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <img src={photo} alt={name} />
                </a>
            </div>
            <div className="item breed">
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <span>Breed: {breed}</span>
                </a>
            </div>
            <div className="item loc">
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <span>Union, NJ</span>
                </a>
            </div>
            {/* <div className="item weight">420lbs</div> */}
            {/* <div className="item age">96 years old</div> */}
            <div className="item x" onClick={removePet}>
                <span>
                    <b>X</b>
                </span>
            </div>
            <div></div>
        </div>
    );
};

export default PetBar;
