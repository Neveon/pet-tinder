import React /*, { Fragment, useContext, useEffect, useState }*/ from "react";
import PetTinderStack from "../cards/PetTinderStack";
import PetsContext from "../../context/pets/PetsContext";

const Home = () => {
    // Access to actions
    // const petsContext = useContext(PetsContext);

    // Pets state
    // const { petsForAdoption, likedPets } = petsContext;

    // useEffect(() => {
    //     // exclude likedPets from appearing in petsForAdoption
    //     setPets(petsForAdoption.filter((pet) => !likedPets.includes(pet)));
    //     console.log(pets);

    //     // Update pets array for tinder card stack
    //     // everytime petsForAdoption array is updated
    // }, [petsForAdoption, pets, likedPets]);

    const filterPets = (state) => {
        // console.log("This is the state");
        // console.log(state);
        // console.log();
        // exclude likedPets from appearing in petsForAdoption
        let petStack = state.petsForAdoption.filter((pet) => !state.likedPets.includes(pet));
        // console.log(petStack);
        // console.log("End of Home.js");
        return petStack;
    };

    return (
        <PetsContext.Consumer>
            {(value) => <div className="home">{<PetTinderStack pets={filterPets(value)} />}</div>}
        </PetsContext.Consumer>
    );
};

export default Home;
