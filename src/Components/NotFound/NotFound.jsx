import "./NotFound.css";

const NotFound = () => {
    return (
        <section id="error-404" className="page">
            <div id="swing-container" className="flex-center-column">
                <div id="wire"></div>
                <div id="triangle"></div>
                <div id="error-message" className="flex-center-column">
                    <h3>404</h3>
                    <h2>Page Not Found!</h2>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
