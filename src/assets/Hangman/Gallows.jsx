import "./Gallows.css";

const Gallows = ({ word, guesses }) => {
    const badGuesses = guesses.filter((guess) => {
        return !word.split("").includes(guess);
    });
    const imagePaths = [
        "../src/assets/gallows-0.png",
        "../src/assets/gallows-1.png",
        "../src/assets/gallows-2.png",
        "../src/assets/gallows-3.png",
        "../src/assets/gallows-4.png",
        "../src/assets/gallows-5.png",
        "../src/assets/gallows-6.png",
        "../src/assets/gallows-7.png",
        "../src/assets/gallows-8.png",
        "../src/assets/gallows-9.png",
        "../src/assets/gallows-10.png",
        "../src/assets/gallows-11.png",
    ];
    return (
        <div className="gallows">
            <img src={imagePaths[Math.min(badGuesses.length, 11)]} />
        </div>
    );
};

export default Gallows;
