import Footer from "./Footer";
import Meta from "./Meta";

const Layout = ({ children }) => {

    return (
        <>
            <Meta />
            <div>
                <main style={{ minHeight: "93vh" }}>
                    {children}
                </main>
                <Footer />
            </div>
        </>
    )
};

export default Layout;