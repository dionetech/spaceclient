import Navbar from "../components/Navbar";
import Header from "./Header";

interface PublicProps {
    children: any;
    pageTitle: string;
}
const PublicLayout: React.FC<PublicProps> = ({ children, pageTitle }) => {
    return (
        <div>
            <Header title={pageTitle} />
            <Navbar />
            <div className="App" id="butter">
                {children}
            </div>
        </div>
    );
};

export default PublicLayout;
