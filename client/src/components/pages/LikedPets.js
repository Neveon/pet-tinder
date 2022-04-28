import React, { useContext, useEffect } from "react";
import PetBar from "../cards/PetBar";

// Context
import PetsContext from "../../context/pets/PetsContext";

const LikedPets = () => {
    const { getLikedPets } = useContext(PetsContext);

    useEffect(() => {
        // Get liked pets from mongodb
        getLikedPets();

        // eslint-disable-next-line
    }, []);

    return (
        <PetsContext.Consumer>
            {(value) => {
                if (value.likedPets.length === 0) {
                    return <p>~Empty~</p>;
                } else {
                    return (
                        <>
                            {value.likedPets.map((pet) => {
                                return <PetBar animal={pet} key={pet.id} />;
                            })}
                        </>
                    );
                }
            }}
        </PetsContext.Consumer>
    );
};

export default LikedPets;
