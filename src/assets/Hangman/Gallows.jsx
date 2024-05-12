import "./Gallows.css";

const Gallows = ({ word, guesses }) => {
    const badGuesses = guesses.filter((guess) => {
        return !word.split("").includes(guess);
    });
    const imagePaths = [
        "/images/gallows-0.png",
        "/images/gallows-1.png",
        "/images/gallows-2.png",
        "/images/gallows-3.png",
        "/images/gallows-4.png",
        "/images/gallows-5.png",
        "/images/gallows-6.png",
        "/images/gallows-7.png",
        "/images/gallows-8.png",
        "/images/gallows-9.png",
        "/images/gallows-10.png",
        "/images/gallows-11.png",
    ];
    return (
        <div className="gallows">
            <img src={imagePaths[Math.min(badGuesses.length, 11)]} />
        </div>
    );
};

export default Gallows;
