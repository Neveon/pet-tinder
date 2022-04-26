import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS,
} from "../types";

export default (state, action) => {
    switch (action.type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload,
            };
        case REGISTER_SUCCESS:
            localStorage.setItem("appToken", action.payload.appToken);
            localStorage.setItem("petfinderToken", action.payload.petfinderToken);
            return {
                ...state,
                appToken: action.payload.appToken,
                petfinderToken: action.payload.petfinderToken,
                isAuthenticated: true,
                loading: false,
            };
        case LOGIN_SUCCESS:
            // placing token in local storage
            localStorage.setItem("appToken", action.payload.appToken);
            localStorage.setItem("petfinderToken", action.payload.petfinderToken);
            return {
                ...state,
                appToken: action.payload.appToken,
                petfinderToken: action.payload.petfinderToken,
                isAuthenticated: true,
                loading: false,
            };
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem("appToken");
            localStorage.removeItem("petfinderToken");
            return {
                ...state,
                appToken: null,
                petfinderToken: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                error: action.payload,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};
