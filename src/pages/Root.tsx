import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"

function Root() {
  return (
    <div className="w-full max-w-[7xl] mx-auto">
        <Header/>
        <div id="main" className="px-5 py-10">
            <Outlet />
        </div>
    </div>
  )
}

export default Root