import React, { Fragment } from "react";
// In react-router-dom v6, Switch was replaced with Routes
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import LikedPets from "./components/pages/LikedPets";
import Alerts from "./components/layout/Alerts";
import PrivateRoute from "./components/routing/PrivateRoute";

// Context
import PetsState from "./context/pets/PetsState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import setAuthToken from "./utils/setAuthToken";

// CSS
import "./App.css";

// load token into global headers
if (localStorage.appToken && localStorage.petfinderToken) {
    let token = {
        appToken: localStorage.appToken,
        petfinderToken: localStorage.petfinderToken,
    };

    // token gets destructred in setAuthToken
    console.log("App.js calls setAuthToken..");
    setAuthToken(token);
} else {
    console.log("App has attempted to load token into global headers and failed...");
}

const App = () => {
    return (
        <PetsState>
            <AuthState>
                <AlertState>
                    <Router>
                        <Fragment>
                            <Navbar />
                            <div className="container">
                                <link
                                    href="https://fonts.googleapis.com/css?family=Damion&display=swap"
                                    rel="stylesheet"
                                />
                                <link
                                    href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
                                    rel="stylesheet"
                                />
                                <Alerts />
                                <Routes>
                                    {/* 
                                    component was replaced with element in react-router-dom v6 

                                    Due to react-router-dom update for v6, I shouldnt do element={Register()}
                                        In order for context to be able to be passed I need to use element={<Register/>} */}
                                    <Route
                                        exact
                                        path="/"
                                        element={
                                            <PrivateRoute>
                                                <Home />
                                            </PrivateRoute>
                                        }
                                    />
                                    <Route exact path="/about" element={<About />} />
                                    <Route exact path="/login" element={<Login />} />
                                    <Route exact path="/register" element={<Register />} />
                                    <Route
                                        exact
                                        path="/liked"
                                        element={
                                            <PrivateRoute>
                                                <LikedPets />
                                            </PrivateRoute>
                                        }
                                    />
                                </Routes>
                            </div>
                        </Fragment>
                    </Router>
                </AlertState>
            </AuthState>
        </PetsState>
    );
};

export default App;
