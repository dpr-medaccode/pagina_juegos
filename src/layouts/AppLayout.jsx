import Footer from "../components/Footer";
import Header from "../components/Header";

export default function AppLayout() {

    return (

        <>

            <Header />

            <main>

                <Outlet />

            </main>

            <Footer />

        </>

    )
}