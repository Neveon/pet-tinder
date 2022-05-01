import React, { useContext, useEffect, Fragment } from "react";
import PetTinderStack from "../cards/PetTinderStack";

// Layout
import Spinner from "../layout/Spinner";

// Context
import PetsContext from "../../context/pets/PetsContext";
import AuthContext from "../../context/auth/authContext";

const Home = () => {
    // We use petsContext.likePet() when user swipes right and update petsForAdoption
    const petsContext = useContext(PetsContext);
    const { loadUser, authLoading } = useContext(AuthContext);

    const { getLikedPets, getPetsForAdoption, loading, petsForAdoption, updatePets } = petsContext;

    console.log("does this print?");
    console.log(`What is loading? ${loading}`);

    // When this component loads we will look at the token,
    // go to backend to validate it
    // then put it in user state
    useEffect(() => {
        console.log("Homepage is attempting to load user data...");
        loadUser();

        getLikedPets();
        if (petsForAdoption.length === 0) {
            // prevents GET calls everytime we are on homepage
            getPetsForAdoption(); // loading is false (finished) during this function
        }

        // eslint-disable-next-line
    }, []);

    const filterPets = (state) => {
        // exclude likedPets from appearing in petsForAdoption
        let petStack = state.petsForAdoption.filter((pet) => !state.likedPets.includes(pet.id));
        // let petStack = state.petsForAdoption.filter((pet) => !state.likedPets.includes(pet));
        return petStack;
    };

    return (
        <Fragment>
            {!authLoading && !loading ? (
                <PetsContext.Consumer>
                    {(value) => (
                        <div className="home">{<PetTinderStack pets={filterPets(value)} />}</div>
                    )}
                </PetsContext.Consumer>
            ) : (
                <Spinner />
            )}
        </Fragment>
    );
};

export default Home;
