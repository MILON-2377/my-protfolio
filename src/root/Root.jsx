import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";


export default function Root() {
  return (
    <div>
      <header>
        <Header />
      </header>

      {/* main section */}
      <Outlet />

      {/* footer */}
      <footer ></footer>
    </div>
  )
}
