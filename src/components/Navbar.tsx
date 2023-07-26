import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="customNavbar">
            <ul>
                <li className="title">
                    <a href="mailto:hello@myspacebank.com" target="_blank">
                        hello@myspacebank.com
                    </a>
                </li>
                <li className="navigation">
                    <a href="https://blog.myspacebank.com">Blog</a>
                    <Link to="/company">Company</Link>
                    <Link to="/about">About</Link>
                </li>
                <li className="auth">
                    <a target="_blank" href="https://app.myspacebank.com/auth">
                        Login
                    </a>
                    <a
                        target="_blank"
                        href="https://app.myspacebank.com/auth-register"
                    >
                        Get Started
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
