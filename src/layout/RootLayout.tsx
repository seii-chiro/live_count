import Footer from "@/components/Footer"
import Header from "@/components/header/Header"
import MiniHero from "@/components/MiniHero"
import Navbar from "@/components/navbar/Navbar"
import { Outlet } from "react-router"

const RootLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Navbar />
            <MiniHero />

            <main className="flex-1 w-full">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};


export default RootLayout