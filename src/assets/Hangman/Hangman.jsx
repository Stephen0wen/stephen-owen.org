import "./Hangman.css";
import Title from "./Title.jsx";
import Word from "./Word.jsx";

function Hangman() {
    return (
        <section id="hangman" className="page">
            <Title />
            <Word />
        </section>
    );
}

export default Hangman;
