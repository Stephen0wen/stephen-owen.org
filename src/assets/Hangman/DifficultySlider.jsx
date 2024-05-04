import "./DifficultySlider.css";
import words from "./words.json";

const DifficultySlider = ({
    difficulty,
    setDifficulty,
    setWord,
    setGuesses,
    setIsGameWon,
    setIsGameLost,
}) => {
    const difficulties = ["Easy", "Normal", "Hard"];
    const handleClick = ({ target }) => {
        if (target.innerText !== difficulty) {
            setDifficulty(() => {
                return target.innerText;
            });
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
        }
    };

    return (
        <aside className="difficulty-slider">
            <div className="difficulty-indicator"></div>
            {difficulties.map((possibleDifficulty) => {
                let classes = "difficulty-button";
                if (possibleDifficulty === difficulty) {
                    classes += " active-difficulty";
                }
                return (
                    <button
                        key={possibleDifficulty}
                        className={classes}
                        onClick={handleClick}
                    >
                        {possibleDifficulty}
                    </button>
                );
            })}
        </aside>
    );
};

export default DifficultySlider;
