import Header from "@/components/header/Header"
import Navbar from "@/components/navbar/Navbar"
import { Outlet } from "react-router"

const RootLayout = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout