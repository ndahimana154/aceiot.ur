import { Outlet } from 'react-router-dom'
import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'

export default function MainLayout() {
    return (
        <div className="min-h-screen bg-[color:var(--ace-background)] text-[color:var(--ace-text)] overflow-x-hidden">
            <Navbar />
            <main className="mx-auto w-full ">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
