import React, { useState, useMemo, useRef, useContext, useEffect, Fragment } from "react";
import TinderCard from "react-tinder-card";
// import PropTypes from "prop-types";

// To be able to add liked pets
import PetsContext from "../../context/pets/PetsContext";

// Layout
import Spinner from "../layout/Spinner";
import DogPlaceholder from "../layout/placeholder_dog.jpg";

// In home we filter() pets against the likedPets
const PetTinderStack = () => {
    // We use petsContext.likePet() when user swipes right and update petsForAdoption
    const petsContext = useContext(PetsContext);

    const {
        getLikedPets,
        getPetsForAdoption,
        likePet,
        updatePets,
        loading,
        likedPets,
        petsForAdoption,
    } = petsContext;

    console.log(`The length of pets for adoption is: ${petsForAdoption.length}`); // 1
    let temp = petsForAdoption.length - 1;
    console.log(`The length of temp is: ${temp}`); // 0
    // const [currentIndex, setCurrentIndex] = useState(petsForAdoption.length - 1); // -1
    const [currentIndex, setCurrentIndex] = useState(temp); // -1
    const [lastDirection, setLastDirection] = useState();
    console.log(`The length of pets for adoption is: ${currentIndex}`);
    // used for outOfFrame closure
    const currentIndexRef = useRef(currentIndex);

    // useEffect(() => {
    //     getLikedPets(); // loading = true : even after these next 2 functions
    //     getPetsForAdoption(); // loading is false if likedPets is empty from user other loading is true

    //     // loading is finished after updating (filtering) petsForAdoption
    //     likedPets.map((pet) => {
    //         console.log(`filtering ${pet}`);
    //         updatePets(pet.id);
    //         return pet;
    //     });

    //     setCurrentIndex(petsForAdoption.length - 1);
    //     console.log(`INSIDE useEffect: The length of pets for adoption is: ${currentIndex}`);

    //     // eslint-disable-next-line
    // }, []);

    const childRefs = useMemo(
        () =>
            Array(petsForAdoption.length)
                .fill(0)
                .map((i) => React.createRef()),
        [petsForAdoption.length]
    );

    const updateCurrentIndex = (val) => {
        setCurrentIndex(val);
        currentIndexRef.current = val;
    };

    // const canGoBack = currentIndex < pets.length - 1;

    console.log(`currentIndex: ${currentIndex}`);
    const canSwipe = currentIndex >= 0;
    console.log(`currentIndex: ${canSwipe}`);

    // set last direction and decrease current index
    const swiped = (direction, petToDelete, index) => {
        setLastDirection(direction);
        updateCurrentIndex(index - 1);

        // If direction is "right" then we likePet()
        // if (direction === "right") {
        //     // changed swiped(.., pet.name, ...) to pet so we get the whole object here
        //     likePet(petToDelete);
        //     updatePets(petToDelete.id);

        //     // We need to remove the pet from the stack if we allow undo
        // }
    };

    const outOfFrame = (name, idx) => {
        console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
        // handle the case in which go back is pressed before card goes outOfFrame
        currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
        // TODO: when quickly swipe and restore multiple times the same card,
        // it happens multiple outOfFrame events are queued and the card disappear
        // during latest swipes. Only the last outOfFrame event should be considered valid
    };

    const swipe = async (dir) => {
        if (canSwipe && currentIndex < petsForAdoption.length) {
            await childRefs[currentIndex].current.swipe(dir); // Swipe the card!

            if (dir === "right") {
                // changed swiped(.., pet.name, ...) to pet so we get the whole object here
                likePet(petsForAdoption[currentIndex]);
                updatePets(petsForAdoption[currentIndex].id);

                // We need to remove the pet from the stack if we allow undo
            }
        }
    };

    // increase current index and show card
    // const goBack = async () => {
    //     if (!canGoBack) return;
    //     const newIndex = currentIndex + 1;
    //     updateCurrentIndex(newIndex);
    //     await childRefs[newIndex].current.restoreCard();
    // };

    // if loading is true -> Spinner
    // otherwise the tinder cards are loaded

    return (
        <Fragment>
            {!loading ? (
                <div className="tinderStack">
                    {/* <h1>PET TINDER</h1> */}
                    <div className="cardContainer">
                        {petsForAdoption.map((pet, index) => {
                            // console.log("Pet card made for: ");
                            // console.log(pet);
                            // console.log("\n");

                            // console.log(pet.id);

                            let petPhoto;
                            if (!pet.photos || !pet.photos[0] || !pet.photos[0].full) {
                                petPhoto = DogPlaceholder;
                            } else {
                                petPhoto = pet.photos[0].full;
                            }
                            return (
                                <TinderCard
                                    ref={childRefs[index]}
                                    className="swipe"
                                    key={pet.id}
                                    onSwipe={(dir) => swiped(dir, pet, index)}
                                    onCardLeftScreen={() => outOfFrame(pet.name, index)}
                                >
                                    <div
                                        style={{
                                            backgroundImage: "url(" + petPhoto + ")",
                                        }}
                                        className="card"
                                    >
                                        <h3>{pet.name}</h3>
                                    </div>
                                </TinderCard>
                            );
                        })}
                    </div>
                    <div className="buttons">
                        <button
                            style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
                            onClick={() => swipe("left")}
                        >
                            Swipe left!
                        </button>
                        {/* <button
                    style={{ backgroundColor: !canGoBack && "#c3c4d3" }}
                    onClick={() => goBack()}
                >
                    Undo swipe!
                </button> */}
                        <button
                            style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
                            onClick={() => swipe("right")}
                        >
                            Swipe right!
                        </button>
                    </div>
                    {lastDirection ? (
                        <h2 key={lastDirection} className="infoText">
                            You swiped {lastDirection}
                        </h2>
                    ) : (
                        // <h2 className="infoText">Swipe a card or Undo!</h2>
                        <h2 className="infoText">Swipe to Find your New Companion!</h2>
                    )}
                </div>
            ) : (
                <Spinner />
            )}
        </Fragment>
    );
};

// PetTinderStack.propTypes = {
//     pets: PropTypes.array.isRequired,
// };

export default PetTinderStack;
