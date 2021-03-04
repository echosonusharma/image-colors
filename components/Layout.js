import Footer from "./Footer";
import Meta from "./Meta";

const Layout = ({ children }) => {

    return (
        <>
            <Meta />
            <div>
                <main >
                    {children}
                    <Footer />
                </main>
            </div>

        </>
    )
};

export default Layout;

// 