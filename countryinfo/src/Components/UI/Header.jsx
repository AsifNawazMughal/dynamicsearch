import { NavLink } from "react-router-dom";
import SideBar from "./SideBar";

export const Header = () => {
  return (
    <header className="header">
      <div className="headerContainer w-full bg-gray-900   h-14">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto px-16 py-3 ">
            <div className="logo text-white font-bold text-xl ">
               <NavLink to="/" >CountryInfo</NavLink>
            </div>
            
            <SideBar />
        </div>

      </div>
    </header>
  );
};
