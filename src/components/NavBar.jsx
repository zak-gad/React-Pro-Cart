import { Link } from "react-router-dom";
import { useContext } from "react";
import { Kart } from "../App";
import {
  FaHome,
  FaEnvelope,
  FaInfoCircle,
  FaShoppingCart,
} from "react-icons/fa";

export const NavBar = () => {
  const [cart, setCart] = useContext(Kart);

  return (
    <nav className="bg-gray-800 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div>
            <a href="/" className="text-orange-500 text-3xl font-bold  ">
              Logo
            </a>
          </div>
          <div className="flex space-x-4">
            <Link to="/" className="text-white hover:text-gray-300">
              <div>
                <FaHome />
                <span>Home</span>
              </div>
            </Link>
            <Link to="/cart" className="text-white hover:text-gray-300">
              <div>
                <FaShoppingCart />
                <span>Cart</span>
              </div>
              {cart.length > 0 ? `(${cart.length})` : ""}
            </Link>
            <Link to="/About" className="text-white hover:text-gray-300">
              {" "}
              <div>
                <FaInfoCircle />
                <span>About</span>
              </div>
            </Link>
            <Link to="/Contact" className="text-white hover:text-gray-300">
              {" "}
              <div>
                <FaEnvelope />
                <span>Contact</span>
              </div>
            </Link>
          </div>
          <div className="md:hidden">
            <button className="text-white">
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
