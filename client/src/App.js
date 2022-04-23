import React, { Fragment } from "react";
// In react-router-dom v6, Switch was replaced with Routes
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import LikedPets from "./components/pages/LikedPets";

// Context
import PetsState from "./context/pets/PetsState";
import AuthState from "./context/auth/AuthState";

// CSS
import "./App.css";

const App = () => {
    return (
        <AuthState>
            <PetsState>
                <Router>
                    <Fragment>
                        <link
                            href="https://fonts.googleapis.com/css?family=Damion&display=swap"
                            rel="stylesheet"
                        />
                        <link
                            href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
                            rel="stylesheet"
                        />
                        <Navbar />
                        <div className="container">
                            <Routes>
                                {/* 
                            component was replaced with element in react-router-dom v6 

                            We also must call functional components, as functions not 
                            class components
                        */}
                                <Route exact path="/" element={Home()} />
                                <Route exact path="/about" element={About()} />
                                <Route exact path="/liked" element={LikedPets()} />
                            </Routes>
                        </div>
                    </Fragment>
                </Router>
            </PetsState>
        </AuthState>
    );
};

export default App;
