import React, { useContext, useReducer } from "react";
import axios from "axios";

// Context and Reducer
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import setAuthToken from "../../utils/setAuthToken";
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

// To be able to add liked pets
import PetsContext from "../../context/pets/PetsContext";

const AuthState = (props) => {
    const initialState = {
        appToken: localStorage.getItem("appToken"),
        petfinderToken: localStorage.getItem("petfinderToken"),
        isAuthenticated: null,
        loading: true,
        user: null,
        error: null,
    };

    const [state, dispatch] = useReducer(authReducer, initialState);
    const { likePet } = useContext(PetsContext);

    // Load User
    const loadUser = async () => {
        // load token into global headers
        if (localStorage.appToken && localStorage.petfinderToken) {
            const token = {
                appToken: localStorage.appToken,
                petfinderToken: localStorage.petfinderToken,
            };
            // console.log("loadUser from AuthState has the token:");
            // console.log(token);
            // console.log("Sending this to setAuthToken as global headers...");
            setAuthToken(token);
        } else {
            console.log("AuthState loadUser() has failed to get local storage tokens...\n");
            console.log(localStorage);
        }

        try {
            const res = await axios.get("/api/auth");

            // res.data is the user data
            dispatch({ type: USER_LOADED, payload: res.data });

            // ADD likedPets to global state likedPets
            res.data.likedPets.map((pet) => likePet(pet));
        } catch (err) {
            dispatch({ type: AUTH_ERROR });
        }
    };

    // Register User
    const register = async (formData) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        try {
            const res = await axios.post("/api/register", formData, config);

            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data,
            });
        } catch (err) {
            dispatch({
                type: REGISTER_FAIL,
                payload: err.response.data.msg, // response msg
                // payload: "FAILURE REGISTERING",
            });
        }
    };

    // Login User
    const login = () => {
        console.log("login");
    };

    // Logout
    const logout = () => {
        console.log("logout");
    };

    // Clear Errors
    const clearErrors = () => {
        dispatch({ type: CLEAR_ERRORS });
    };

    return (
        <AuthContext.Provider
            value={{
                appToken: state.appToken,
                petfinderToken: state.petfinderToken,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                user: state.user,
                error: state.error,
                register,
                loadUser,
                login,
                logout,
                clearErrors,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;
