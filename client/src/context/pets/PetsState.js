import React, { useReducer } from "react";
import axios from "axios";

// Context
import PetsContext from "./PetsContext";
import petsReducer from "./petsReducer";

import {
    GET_PETS,
    GET_LIKED_PETS,
    LIKE_PET,
    DELETE_PET,
    PET_ERROR, // Should probably clear this somehow at some point
    UPDATE_PETS,
    CLEAR_PETS,
} from "../types";

const PetsState = (props) => {
    const initialState = {
        // pets adopted is filled by every GET request to the petfinder api
        petsForAdoption: [],
        likedPets: [],
        loading: true,
        error: null,
        // page: 1,
    };

    const [state, dispatch] = useReducer(petsReducer, initialState);

    // Get user's liked pets from mongoDB
    const getLikedPets = async () => {
        console.log("Getting liked pets...");
        try {
            const res = await axios.get("/api/like").then((res) => {
                dispatch({
                    type: GET_LIKED_PETS,
                    payload: res.data,
                });
            });
        } catch (err) {
            dispatch({
                type: PET_ERROR,
                payload: err.response.msg,
            });
        }
    };

    // Get Pets from petfinder for tinder card stack
    const getPetsForAdoption = async () => {
        console.log("Getting pets available for adoption..");
        try {
            // have to remove appToken to prevent CORS error from petfinder API
            let appToken = axios.defaults.headers.common["appToken"];
            delete axios.defaults.headers.common["appToken"];

            const res = await axios
                .get(
                    "https://api.petfinder.com/v2/animals?location=07036&distance=100&type=Dog&page=1&limit=10"
                )
                .then((res) => {
                    // Add appToken back after request to petfinder
                    axios.defaults.headers.common["appToken"] = appToken;

                    console.log("Response from petfinder API:");
                    console.log(res.data.animals);

                    // Might have to clean the data filtering any id's found
                    let IDs = {};
                    let cleanData = [];
                    // map through data
                    res.data.animals.map((pet) => {
                        // if pet.id is not in hashmap then we know its unique
                        if (!IDs[pet.id]) {
                            cleanData.push(pet);
                        } else {
                            // add pet id's to hashmap and give it value 1
                            // if we encounter this id again then nothing gets returned
                            IDs[pet.id] = 1;
                        }
                    });

                    console.log("Cleaned up res.data:");
                    console.log(cleanData);

                    dispatch({
                        type: GET_PETS,
                        payload: cleanData,
                    });
                });
        } catch (err) {
            dispatch({
                type: PET_ERROR,
                payload: err.response,
            });
        }
    };

    // Like a Pet
    const likePet = async (pet) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        console.log("Liked the pet: ");
        console.log(pet);

        try {
            const res = await axios.post("/api/like", pet, config).then(() => {
                dispatch({ type: LIKE_PET, payload: pet });
            });
        } catch (err) {
            dispatch({
                type: PET_ERROR,
                payload: err.response.msg,
            });
        }
    };

    // Delete Liked Pet
    const deletePet = async (id) => {
        // console.log("PetState.js - Deleting Pet:");
        // console.log(id);
        try {
            const res = await axios.delete(`/api/like/${id}`).then(() => {
                dispatch({ type: DELETE_PET, payload: id });
            });
        } catch (err) {
            dispatch({
                type: PET_ERROR,
                payload: err.response.msg,
            });
        }
    };

    // Update tinder card stack pets for adoption by filtering
    const updatePets = (id) => {
        dispatch({ type: UPDATE_PETS, payload: id });
    };

    // Clear state on logout
    const clearPets = () => {
        dispatch({
            type: CLEAR_PETS,
        });
    };

    return (
        <PetsContext.Provider
            value={{
                petsForAdoption: state.petsForAdoption,
                likedPets: state.likedPets,
                loading: state.loading,
                error: state.error,
                getLikedPets,
                getPetsForAdoption,
                likePet,
                deletePet,
                updatePets,
                clearPets,
            }}
        >
            {props.children}
        </PetsContext.Provider>
    );
};

export default PetsState;
