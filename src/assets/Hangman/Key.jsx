function Key({ thisKey, guesses, setGuesses, isGameWon, isGameLost }) {
    function handleClick() {
        if (!guesses.includes(thisKey.letter) && !isGameWon && !isGameLost) {
            setGuesses((currentGuesses) => {
                return [...currentGuesses, thisKey.letter];
            });
        }
    }

    let classes = "key";
    if (guesses.includes(thisKey.letter)) {
        classes += " chosen";
    }

    return (
        <button onClick={handleClick} className={classes}>
            {thisKey.letter}
        </button>
    );
}

export default Key;
