import Key from "./Key";
import "./Keyboard.css";

function Keyboard({ guesses, setGuesses, isGameWon, isGameLost }) {
    const keys = [
        [
            { id: 0, row: 0, letter: "Q" },
            { id: 1, row: 0, letter: "W" },
            { id: 2, row: 0, letter: "E" },
            { id: 3, row: 0, letter: "R" },
            { id: 4, row: 0, letter: "T" },
            { id: 5, row: 0, letter: "Y" },
            { id: 6, row: 0, letter: "U" },
            { id: 7, row: 0, letter: "I" },
            { id: 8, row: 0, letter: "O" },
            { id: 9, row: 0, letter: "P" },
        ],
        [
            { id: 10, row: 1, letter: "A" },
            { id: 11, row: 1, letter: "S" },
            { id: 12, row: 1, letter: "D" },
            { id: 13, row: 1, letter: "F" },
            { id: 14, row: 1, letter: "G" },
            { id: 15, row: 1, letter: "H" },
            { id: 16, row: 1, letter: "J" },
            { id: 17, row: 1, letter: "K" },
            { id: 18, row: 1, letter: "L" },
        ],
        [
            { id: 19, row: 2, letter: "Z" },
            { id: 20, row: 2, letter: "X" },
            { id: 21, row: 2, letter: "C" },
            { id: 22, row: 2, letter: "V" },
            { id: 23, row: 2, letter: "B" },
            { id: 24, row: 2, letter: "N" },
            { id: 25, row: 2, letter: "M" },
        ],
    ];
    return (
        <section className="keyboard">
            <div className="keyboard-row">
                {keys[0].map((key) => {
                    return (
                        <Key
                            key={key.id}
                            thisKey={key}
                            guesses={guesses}
                            setGuesses={setGuesses}
                            isGameWon={isGameWon}
                            isGameLost={isGameLost}
                        />
                    );
                })}
            </div>
            <div className="keyboard-row">
                {keys[1].map((key) => {
                    return (
                        <Key
                            key={key.id}
                            thisKey={key}
                            guesses={guesses}
                            setGuesses={setGuesses}
                            isGameWon={isGameWon}
                            isGameLost={isGameLost}
                        />
                    );
                })}
            </div>
            <div className="keyboard-row">
                {keys[2].map((key) => {
                    return (
                        <Key
                            key={key.id}
                            thisKey={key}
                            guesses={guesses}
                            setGuesses={setGuesses}
                            isGameWon={isGameWon}
                            isGameLost={isGameLost}
                        />
                    );
                })}
                <div className="key spacer"></div>
            </div>
        </section>
    );
}

export default Keyboard;
