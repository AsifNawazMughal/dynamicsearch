import footerData from "../../api/footerData.json";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";



export const Footer = () => {
      const icons = {
    FaMapMarkerAlt: <FaMapMarkerAlt />,
    FaPhoneAlt: <FaPhoneAlt />,
    FaEnvelope: <FaEnvelope />
  };

    return (
        <footer className="footer w-full bg-gray-800">
            <div className="max-w-screen-xl px-16 py-6 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-white ">
                {footerData.map((e, index) => {
                    const { icon, name, information } = e;
                    return (
                        <div id={index} className="flex ">
                           <span className="text-2xl px-2 py-3 text-blue-600">{icons[icon]}</span>
                            <div className="flex flex-col">
                                <span className="font-semibold text-blue-400">{name}</span>
                                <span className="text-sm cursor-pointer">{information}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="text-white text-center py-2 font-semibold bg-gray-900"> <p>&copy; 2025 CountryInfo. All rights reserved.</p></div>
        </footer>
    );
};