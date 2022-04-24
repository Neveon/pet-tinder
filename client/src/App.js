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

// Context
import PetsState from "./context/pets/PetsState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";

// CSS
import "./App.css";

const App = () => {
    return (
        <AuthState>
            <PetsState>
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

                                    We also must call functional components, as functions not 
                                    class components
                                    */}
                                    <Route exact path="/" element={Home()} />
                                    <Route exact path="/about" element={About()} />
                                    <Route exact path="/login" element={Login()} />
                                    <Route exact path="/register" element={Register()} />
                                    <Route exact path="/liked" element={LikedPets()} />
                                </Routes>
                            </div>
                        </Fragment>
                    </Router>
                </AlertState>
            </PetsState>
        </AuthState>
    );
};

export default App;
