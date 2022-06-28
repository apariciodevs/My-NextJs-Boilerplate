import Navbar from "./Navbar";
import Footer from "./Footer";

//styles
import lytStyle from "../styles/Layout.module.css"

const Layout = ({ children }) => {
    return ( <div className={lytStyle.layoutDisplay}>
            <Navbar></Navbar>
            { children }
            <Footer></Footer>
    
    </div> );
}
 
export default Layout;