import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function AppLayout() {

    return (

        <>

            <Header />

            <main className="min-h-screen bg-zinc-950">
                <Outlet />
            </main>

            <Footer />

        </>

    )
}