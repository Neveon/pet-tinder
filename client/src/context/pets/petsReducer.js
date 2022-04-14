import {
    GET_PETS,
    LIKE_PET,
    DELETE_PET,
    SET_CURRENT,
    CLEAR_CURRENT,
    FILTER_PETS,
    CLEAR_FILTER,
    SET_ALERT,
    REMOVE_ALERT,
} from "../types";

export default (state, action) => {
    switch (action.type) {
        case LIKE_PET:
            return {
                ...state,
                likedPets: [...state.likedPets, action.payload],
            };
    }
};
