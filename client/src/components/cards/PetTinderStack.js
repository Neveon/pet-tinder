import React, { useState, useMemo, useRef } from "react";
import TinderCard from "react-tinder-card";
import PropTypes from "prop-types";

// In home we filter() pets against the likedPets
const PetTinderStack = ({ pets }) => {
    const [currentIndex, setCurrentIndex] = useState(pets.length - 1);
    const [lastDirection, setLastDirection] = useState();
    // used for outOfFrame closure
    const currentIndexRef = useRef(currentIndex);

    // console.log(pets.length);

    const childRefs = useMemo(
        () =>
            Array(pets.length)
                .fill(0)
                .map((i) => React.createRef()),
        [pets.length]
    );

    const updateCurrentIndex = (val) => {
        setCurrentIndex(val);
        currentIndexRef.current = val;
    };

    const canGoBack = currentIndex < pets.length - 1;

    const canSwipe = currentIndex >= 0;

    // set last direction and decrease current index
    const swiped = (direction, nameToDelete, index) => {
        setLastDirection(direction);
        updateCurrentIndex(index - 1);
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
        if (canSwipe && currentIndex < pets.length) {
            await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
        }
    };

    // increase current index and show card
    const goBack = async () => {
        if (!canGoBack) return;
        const newIndex = currentIndex + 1;
        updateCurrentIndex(newIndex);
        await childRefs[newIndex].current.restoreCard();
    };

    return (
        <div className="tinderStack">
            <h1>React Tinder Card</h1>
            <div className="cardContainer">
                {pets.map((pet, index) => {
                    // console.log(pet.photos);
                    return (
                        <TinderCard
                            ref={childRefs[index]}
                            className="swipe"
                            key={pet.name}
                            onSwipe={(dir) => swiped(dir, pet.name, index)}
                            onCardLeftScreen={() => outOfFrame(pet.name, index)}
                        >
                            <div
                                style={{ backgroundImage: "url(" + pet.photos[0].full + ")" }}
                                className="card"
                            >
                                {/* <h3>{pet.name}</h3> */}
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
    );
};

PetTinderStack.propTypes = {
    pets: PropTypes.array.isRequired,
};

export default PetTinderStack;
