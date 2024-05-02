import { useState } from "react";
import "./index.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Home />} />
                <Route path="/connect" element={<Home />} />
            </Routes>
        </>
    );
}

export default App;
