import { Sun, Moon } from "lucide-react";
import LogoutButton from "./logoutbutton";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useCartStore from "../store/cart";

const Header = ({ theme, toggleTheme }) => {
  const isDark = theme === "dark";

  const navigate = useNavigate();
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <div
      className={`fixed z-500 w-full flex justify-between items-center
     px-1 py-1 transition-colors duration-500 
     ${
       isDark
         ? "bg-[#111827] text-[#E4C590] shadow-lg shadow-black/20"
         : "bg-[#fffaf1] text-[#8a4b12] shadow-lg shadow-amber-900/10"
     }`}
    >
      <div
        className={`flex items-center gap-4 justify-between text-sm tracking-widest uppercase 
      ${isDark ? "text-[#E4C590]" : "text-[#8a4b12]"}`}
      >
        <nav className="flex flex-row p-2 gap-2">
          <Link
            to="/home"
            className={`rounded-xl px-5 py-3 text-center font-semibold tracking-wide transition-all duration-300
          ${
            isDark
              ? "text-[#D6B56C] hover:bg-[#D6B56C] hover:text-black"
              : "text-amber-900 hover:bg-amber-700 hover:text-white"
          }`}
          >
            Home
          </Link>

          <Link
            to="/home/about"
            className={`rounded-xl px-5 py-3 text-center font-semibold tracking-wide transition-all duration-300
          ${
            isDark
              ? "text-[#D6B56C] hover:bg-[#D6B56C] hover:text-black"
              : "text-amber-900 hover:bg-amber-700 hover:text-white"
          }`}
          >
            About
          </Link>

          <Link
            to="/home/booking"
            className={`rounded-xl px-5 py-3 text-center font-semibold tracking-wide transition-all duration-300
          ${
            isDark
              ? "text-[#D6B56C] hover:bg-[#D6B56C] hover:text-black"
              : "text-amber-900 hover:bg-amber-700 hover:text-white"
          }`}
          >
            Booking
          </Link>

          <Link
            to="/home/contact"
            className={`rounded-xl px-5 py-3 text-center font-semibold tracking-wide transition-all duration-300
          ${
            isDark
              ? "text-[#D6B56C] hover:bg-[#D6B56C] hover:text-black"
              : "text-amber-900 hover:bg-amber-700 hover:text-white"
          }`}
          >
            Contact
          </Link>
          <Link
            to="/home/menu"
            className={`rounded-xl px-5 py-3 text-center font-semibold tracking-wide transition-all duration-300
          ${
            isDark
              ? "text-[#D6B56C] hover:bg-[#D6B56C] hover:text-black"
              : "text-amber-900 hover:bg-amber-700 hover:text-white"
          }`}
          >
            Menu
          </Link>
        </nav>
      </div>
      <div className="flex gap-4 items-center">
        <button
          onClick={() => navigate("/cartSummary")}
          className={`relative rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:rotate-6 ${
            isDark
              ? "bg-[#D6B56C]/10 hover:bg-[#D6B56C]/20 text-[#D6B56C]"
              : "bg-amber-100 hover:bg-amber-200 text-[#7c4a12]"
          }`}
        >
          <ShoppingCart size={22} />
          {cartItems.length > 0 && (
            <span
              className="absolute -top-1 -right-1 bg-red-500 text-white
                 text-[10px] rounded-full w-5 h-5 flex items-center justify-center"
            >
              {cartItems.length}
            </span>
          )}
        </button>

        <div
          className={`h-6 w-px ${isDark ? "bg-[#E4C590]/40" : "bg-[#8a4b12]/30"}`}
        ></div>

        <button
          onClick={toggleTheme}
          className={`rounded-full p-3 shadow-md transition-all duration-500
            hover:rotate-180 hover:scale-110 ${
              isDark
                ? "bg-[#D6B56C]/10 hover:bg-[#D6B56C]/20 text-[#D6B56C]"
                : "bg-amber-100 hover:bg-amber-200 text-[#7c4a12]"
            }`}
          aria-label="Toggle Theme"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <div
          className={`flex items-center gap-2 transition duration-300 
          cursor-pointer ${isDark ? "hover:text-white" : "hover:text-[#5f2f0d]"}`}
        >
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
