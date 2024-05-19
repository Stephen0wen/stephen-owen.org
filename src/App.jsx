import "./index.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Projects from "./Components/Projects/Projects";
import Hangman from "./assets/Hangman/Hangman";
import Connect from "./Components/Connect/Connect";
import NotFound from "./Components/NotFound/NotFound";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/connect" element={<Connect />} />
                <Route path="/projects/hangman" element={<Hangman />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Header />
        </>
    );
}

export default App;
