import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Homepage from "./Homepage";
const Layout = () => {
  return (
    <>
      <Navbar />
      <Homepage />
    </>
  );
};
export default Layout;
