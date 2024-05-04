import "./ResetButton.css";
import words from "./words.json";

const ResetButton = ({
    difficulty,
    setWord,
    setGuesses,
    isGameWon,
    setIsGameWon,
    isGameLost,
    setIsGameLost,
}) => {
    let classes;
    if (isGameWon || isGameLost) {
        classes = "reset-button";
    } else {
        classes = "hidden";
    }

    const handleClick = () => {
        setWord(() => {
            return words[difficulty][
                Math.round(Math.random() * (words[difficulty].length - 1))
            ].toUpperCase();
        });
        setGuesses(() => {
            return [];
        });
        setIsGameWon(() => {
            return false;
        });
        setIsGameLost(() => {
            return false;
        });
    };

    return (
        <button className={classes} onClick={handleClick}>
            New Game
        </button>
    );
};

export default ResetButton;
