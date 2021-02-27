import LayoutStyle from "../styles/Home.module.css";
import Meta from "./Meta";
import Nav from "./Nav";


const Layout = ({ children }) => {

    return (
        <>
            <Meta />
            <Nav />
            <div className={LayoutStyle.container}>
                <main>
                    {children}
                </main>
            </div>
        </>
    )
};

export default Layout;