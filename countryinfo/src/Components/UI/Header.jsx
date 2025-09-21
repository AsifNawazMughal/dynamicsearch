import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <header className="header">
      <div className="headerContainer min-w-screen  bg-gray-900   h-14">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto px-16 py-3 ">
            <div className="logo text-white font-bold text-xl ">
               <NavLink to="/" >CountryInfo</NavLink>
            </div>
            <nav className="nav">
               <ul className="flex space-x-4 text-white text-sm ">
                <li className="hover:text-blue-500 transform-all duration-300 ease-in-out"><NavLink to="/">
                Home</NavLink></li>
                <li className="hover:text-blue-500 transform-all duration-300 ease-in-out"><NavLink to="/about">
                About</NavLink></li>
                <li className="hover:text-blue-500 transform-all duration-300 ease-in-out"><NavLink to="/country">
                Country</NavLink></li>
                <li className="hover:text-blue-500 transform-all duration-300 ease-in-out"><NavLink to="/contact">
                Contact</NavLink></li>
                <li className="hover:text-blue-500 transform-all duration-300 ease-in-out"><NavLink to="/">
                Home</NavLink></li>
               </ul>
            </nav>

        </div>

      </div>
    </header>
  );
};
