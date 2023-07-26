import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="customNavbar">
            <ul>
                <li className="title">
                    <a href="mailto:hello@myspacebank.com" target="_blank">
                        <img
                            src="https://res.cloudinary.com/ruthless-labs/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,b_rgb:262c35/v1689413971/spacebank/akor4x7v0capmouofcrr.png"
                            alt="spacebank icon"
                        />
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
