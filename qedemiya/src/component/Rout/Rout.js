import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteLink from "../RouteLink/RouteLink";
import About from "../About/About";
import Product from "../Service/Service"
import Contact from "../Contact/Contact";
import SignIn from "../SignIn/SignIn";

const Rout = () => {
    return (
        <BrowserRouter>
            <Routes >
                <Route path="/" element={<RouteLink />} >
                    <Route path="about" element={< About />} />
                    <Route path="Product" element={< Product />} />
                    <Route path="Contact" element={< Contact />} />
                    <Route path="SignIn" element={< SignIn />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Rout;