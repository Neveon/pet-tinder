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
            let { appToken, petfinderToken } = action.payload;
            localStorage.setItem("appToken", appToken);
            localStorage.setItem("petfinderToken", petfinderToken);
            return {
                ...state,
                // ...action.payload, // token in state as object {token: tokenHere}
                appToken,
                petfinderToken,
                isAuthenticated: true,
                loading: false,
            };
        case REGISTER_FAIL:
        case AUTH_ERROR:
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
