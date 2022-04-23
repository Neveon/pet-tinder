import { GET_PETS, LIKE_PET, DELETE_PET, SET_ALERT, REMOVE_ALERT, UPDATE_PETS } from "../types";

export default (state, action) => {
    switch (action.type) {
        case LIKE_PET:
            return {
                ...state,
                likedPets: [...state.likedPets, action.payload],
            };
        case DELETE_PET:
            return {
                ...state,
                likedPets: state.likedPets.filter((pet) => pet.id !== action.payload),
            };
        case UPDATE_PETS:
            return {
                ...state,
                petsForAdoption: state.petsForAdoption.filter((pet) => pet.id !== action.payload),
            };
    }
};
