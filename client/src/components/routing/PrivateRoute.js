import React, { Fragment, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";

import Spinner from "../layout/Spinner";

import AuthContext from "../../context/auth/authContext";

const PrivateRoute = ({ children }) => {
    const authContext = useContext(AuthContext);
    const { loadUser, isAuthenticated, authLoading } = authContext;

    console.log(
        `Is user authenticated? ${isAuthenticated}\nIs User authentication loading? ${authLoading}`
    );

    useEffect(() => {
        // people can have null authentication but have old tokens that arent expired
        // After this renders we need to check localStorge for tokens, if they exist then we need to loadUser()
        if (isAuthenticated === null && localStorage.appToken && localStorage.petfinderToken) {
            loadUser();
        }
    });

    return (
        <Fragment>
            {isAuthenticated && authLoading ? (
                <Spinner />
            ) : isAuthenticated && !authLoading ? (
                children
            ) : (
                <Navigate to="/login" replace />
            )}
        </Fragment>
    );
};

export default PrivateRoute;
