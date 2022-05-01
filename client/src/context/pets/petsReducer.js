import { GET_LIKED_PETS, GET_PETS, LIKE_PET, DELETE_PET, UPDATE_PETS, CLEAR_PETS } from "../types";

export default (state, action) => {
    switch (action.type) {
        case GET_PETS:
            // filter is helpful when switching pages (this filter does not work when home first loads)
            let newArr = [...action.payload.filter((pet) => !state.likedPets.includes(pet.id))];
            return {
                ...state,
                petsForAdoption: newArr, // Obtaining pets from petfinder API
                loading: false,
            };
        case GET_LIKED_PETS:
            return {
                ...state,
                // likedPets: state.likedPets.push(action.payload), // get all likedPets from user's mongoDB
                likedPets: [...action.payload],
                // update petsForAdoption whenever we can
                petsForAdoption: [
                    ...state.petsForAdoption.filter((pet) => !state.likedPets.includes(pet)), // filter is helpful when switching pages (this filter does not work when home first loads)
                ],
                // loading: false,
            };
        case LIKE_PET:
            return {
                ...state,
                likedPets: [...state.likedPets, action.payload],
                loading: false,
            };
        case DELETE_PET:
            return {
                ...state,
                likedPets: state.likedPets.filter((pet) => pet.id !== action.payload),
                loading: false,
            };
        case UPDATE_PETS:
            return {
                ...state,
                petsForAdoption: state.petsForAdoption.filter((pet) => pet.id !== action.payload),
                // loading: false,
            };
        case CLEAR_PETS:
            return {
                ...state,
                petsForAdoption: [],
                likedPets: [],
                error: null,
            };
        default:
            return state;
    }
};
