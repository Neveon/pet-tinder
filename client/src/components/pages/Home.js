import React, { Fragment, useContext, useEffect, useState } from "react";
import PetTinderStack from "../cards/PetTinderStack";
import PetsContext from "../../context/pets/PetsContext";

const Home = () => {
    const [pets, setPets] = useState([]);

    // Access to actions
    const petsContext = useContext(PetsContext);
    console.log(petsContext);

    // Pets state
    const { petsForAdoption, likedPets } = petsContext;

    // useEffect(() => {
    //     // exclude likedPets from appearing in petsForAdoption
    //     setPets(petsForAdoption.filter((pet) => !likedPets.includes(pet)));
    //     console.log(pets);

    //     // Update pets array for tinder card stack
    //     // everytime petsForAdoption array is updated
    // }, [petsForAdoption, pets, likedPets]);

    return (
        <Fragment>
            <div className="grid-2">{<PetTinderStack pets={pets} />}</div>
        </Fragment>
    );
};

export default Home;
