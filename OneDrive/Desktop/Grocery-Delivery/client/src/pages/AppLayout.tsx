import { Outlet } from "react-router-dom"
import Banner from "../components/Banner"
import Navbar from "../components/Navbar"

const AppLayout = () => {
  return (
    <>
    <Banner />
    <Navbar />
    <main className="min-h-screen">
        <Outlet />
    </main>
       <footer className="bg-gray-800 text-white py-6">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <p>&copy; 2023 Your Company. All rights reserved.</p>
         </div>
       </footer>
    </>
  )
}

export default AppLayout
