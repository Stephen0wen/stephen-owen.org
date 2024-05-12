import { useEffect, useState } from "react";
import "./MouseOver.css";

const MouseOver = ({ children, highlightClasses }) => {
    const [classes, setClasses] = useState("normal");

    const handleEnter = () => {
        setClasses(highlightClasses);
        console.log(classes);
    };

    const handleLeave = () => {
        setClasses("normal");
    };

    return (
        <div
            className={classes}
            onMouseEnter={handleEnter}
            onTouchStart={handleEnter}
            onMouseLeave={handleLeave}
            onMouseUp={handleLeave}
            onFocus={handleEnter}
            onBlur={handleLeave}
        >
            {children}
        </div>
    );
};

export default MouseOver;
