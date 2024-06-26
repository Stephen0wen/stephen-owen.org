import MouseOver from "../MouseOver/MouseOver";
import "./Connect.css";

const Connect = () => {
    return (
        <section id="connect" className="page">
            <div className="section-space connect">
                <h2>Thanks for dropping by!</h2>
                <div className="link-container">
                    <MouseOver highlightClasses="extra-enlarge">
                        <a
                            id="email-link"
                            className="profile-link"
                            aria-label="Send me an email"
                            href="mailto:stevejowen@gmail.com"
                        >
                            <i className="fa-solid fa-envelope"></i>
                            <span className="hidden">email</span>
                        </a>
                    </MouseOver>
                    <MouseOver highlightClasses="extra-enlarge">
                        <a
                            id="linkedin-link"
                            className="profile-link"
                            aria-label="Visit my linkedin"
                            target="_blank"
                            href="https://www.linkedin.com/in/stephen-owen-00b7a52b8/"
                        >
                            <i className="fa-brands fa-linkedin"></i>
                            <span className="hidden">linkedin</span>
                        </a>
                    </MouseOver>
                    <MouseOver highlightClasses="extra-enlarge">
                        <a
                            id="github-link"
                            className="profile-link"
                            aria-label="Visit my github"
                            target="_blank"
                            href="https://github.com/Stephen0wen"
                        >
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </MouseOver>
                </div>
                <h3>Until next time...</h3>
            </div>
        </section>
    );
};

export default Connect;
