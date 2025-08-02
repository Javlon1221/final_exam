import { Outlet } from "react-router-dom"
import Header from "../../components/Header"

const Layout = () => {
  return (
    <>
      <Header/>
      <main className="min-h-screen bg-gray-100">
        <Outlet/>
      </main>
    </>
  )
}

export default Layout