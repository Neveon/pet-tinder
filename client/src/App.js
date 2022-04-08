import React, { Fragment } from "react";
// In react-router-dom v6, Switch was replaced with Routes
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

// CSS
import "./App.css";

const App = () => {
    return (
        <Router>
            <Fragment>
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
                    </Routes>
                </div>
            </Fragment>
        </Router>
    );
};

export default App;
