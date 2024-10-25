import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";


export default function Root() {
  return (
    <div className=" bg-gray-50 w-full ">
      <header className=" bg-gray-50 ">
        <Header />
      </header>

      {/* main section */}
      <Outlet />

      {/* footer */}
      <footer >
        <Footer />
      </footer>
    </div>
  )
}
