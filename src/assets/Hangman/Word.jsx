import { useState, useEffect } from "react";
import Gallows from "./Gallows.jsx";
import DifficultySlider from "./DifficultySlider.jsx";
import ResetButton from "./ResetButton.jsx";
import Keyboard from "./Keyboard.jsx";
import words from "./words.json";
import "./Word.css";

const Word = () => {
    const [guesses, setGuesses] = useState([]);
    const [isGameWon, setIsGameWon] = useState(false);
    const [isGameLost, setIsGameLost] = useState(false);
    const [difficulty, setDifficulty] = useState("Easy");
    const [word, setWord] = useState(
        words[difficulty][
            Math.round(Math.random() * (words[difficulty].length - 1))
        ].toUpperCase()
    );

    useEffect(() => {
        const chars = word.split("");
        const badGuesses = guesses.filter((guess) => {
            return !chars.includes(guess);
        });
        if (badGuesses.length > 10) {
            setIsGameLost(() => {
                return true;
            });
        }
        if (
            chars.every((char) => {
                return guesses.includes(char);
            })
        ) {
            setIsGameWon(() => {
                return true;
            });
        }
    });

    const chars = word.split("");

    console.log(word);

    return (
        <>
            <DifficultySlider
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                setWord={setWord}
                setGuesses={setGuesses}
                setIsGameWon={setIsGameWon}
                setIsGameLost={setIsGameLost}
            />
            <ResetButton
                difficulty={difficulty}
                setWord={setWord}
                setGuesses={setGuesses}
                isGameWon={isGameWon}
                setIsGameWon={setIsGameWon}
                isGameLost={isGameLost}
                setIsGameLost={setIsGameLost}
            />
            <div id="hangman-display">
                <Gallows word={word} guesses={guesses} />
                <section className="word">
                    {chars.map((char, index) => {
                        let output = "";
                        let classes = "word-char";
                        if (guesses.includes(char)) {
                            output = char;
                        }
                        if (isGameWon) {
                            classes += " word-char-won";
                        }
                        if (isGameLost) {
                            classes += " word-char-lost";
                        }

                        return (
                            <div key={index} className={classes}>
                                {output}
                            </div>
                        );
                    })}
                </section>
            </div>
            <Keyboard
                guesses={guesses}
                setGuesses={setGuesses}
                word={word}
                isGameWon={isGameWon}
                setIsGameWon={setIsGameWon}
                isGameLost={isGameLost}
                setIsGameLost={setIsGameLost}
            />
        </>
    );
};

export default Word;
