import { useEffect, useState } from "react";
import "./MouseOver.css";

const MouseOver = ({ children }) => {
    const [classes, setClasses] = useState("");

    const handleEnter = () => {
        setClasses("highlight");
        console.log(classes);
    };

    const handleLeave = () => {
        setClasses("");
    };

    return (
        <div
            className={classes}
            onMouseEnter={handleEnter}
            onTouchStart={handleEnter}
            onMouseLeave={handleLeave}
            onMouseUp={handleLeave}
        >
            {children}
        </div>
    );
};

export default MouseOver;
