import Footer from "@/components/Footer"
import Header from "@/components/header/Header"
import MiniHero from "@/components/MiniHero"
import Navbar from "@/components/navbar/Navbar"
import { Outlet } from "react-router"

const RootLayout = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <MiniHero />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default RootLayout