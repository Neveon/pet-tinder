import React, { useContext, useEffect } from "react";
import PetTinderStack from "../cards/PetTinderStack";
import PetsContext from "../../context/pets/PetsContext";
import AuthContext from "../../context/auth/authContext";

const Home = () => {
    const { loadUser } = useContext(AuthContext);

    // When this component loads we will look at the token,
    // go to backend to validate it
    // then put it in user state
    useEffect(() => {
        console.log("Homepage is attempting to load user data...");
        loadUser();
        // eslint-disable-next-line
    }, []);

    const filterPets = (state) => {
        // exclude likedPets from appearing in petsForAdoption
        let petStack = state.petsForAdoption.filter((pet) => !state.likedPets.includes(pet));
        return petStack;
    };

    return (
        <PetsContext.Consumer>
            {(value) => <div className="home">{<PetTinderStack pets={filterPets(value)} />}</div>}
        </PetsContext.Consumer>
    );
};

export default Home;
