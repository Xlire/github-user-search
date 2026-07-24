import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">
            <p>
                Made by <strong>Thien Vu</strong>
            </p>

            <div class="profile-links">
                <a
                    href="https://github.com/Xlire"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaGithub /> GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/toan-thien-vu-747912308/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaLinkedin /> Linkedin
                </a>
            </div>
        </footer>
    );
}

export default Footer;