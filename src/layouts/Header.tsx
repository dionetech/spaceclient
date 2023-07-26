import { Helmet } from "react-helmet-async";

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <Helmet>
            <title>
                Space Bank - {title ? title : "Web3 Payment Platform"}
            </title>
        </Helmet>
    );
};

export default Header;
