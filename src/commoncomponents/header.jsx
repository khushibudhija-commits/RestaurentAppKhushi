import { Sun, Moon, Heart } from "lucide-react";
import { useState } from "react";
import LogoutButton from "./logoutbutton";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useCartStore from "../store/cart";
import useWishlistStore from "../store/wishlist";

const Header = ({ theme, toggleTheme }) => {
  const isDark = theme === "dark";
  const [open, setOpen] = useState(false);
  const wishlistItems = useWishlistStore((state) => state.wishlistItems);
  const navigate = useNavigate();
  const cartItems = useCartStore((state) => state.cartItems);
  const user = JSON.parse(localStorage.getItem("customer"));

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
        <nav className="hidden md:flex flex-row p-2 gap-2">
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

        <button
          onClick={() => setOpen((s) => !s)}
          className={`md:hidden flex flex-col justify-center items-center gap-1 p-2 rounded focus:outline-none focus:ring-2 transition-colors duration-200 ${isDark ? "text-[#E4C590]" : "text-[#8a4b12]"}`}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[2px] bg-current transform transition duration-200 ${open ? "rotate-45 translate-y-1.5" : ""}`}></span>
          <span className={`block w-6 h-[2px] bg-current my-1 transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`}></span>
          <span className={`block w-6 h-[2px] bg-current transform transition duration-200 ${open ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
        </button>
      </div>
      <div className="flex gap-4 items-center">
        <button
          onClick={() => navigate("/home/cartSummary")}
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
 <button
  onClick={() => navigate("/home/wishlist")}
  className={`relative rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:rotate-6 ${
    isDark
      ? "bg-[#D6B56C]/10 hover:bg-[#D6B56C]/20 text-[#D6B56C]"
      : "bg-amber-100 hover:bg-amber-200 text-[#7c4a12]"
  }`}
>
  <Heart
    size={22}
    fill={wishlistItems.length > 0 ? "currentColor" : "none"}
    className="transition-all duration-300"
  />

  {wishlistItems.length > 0 && (
    <span
      className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-md"
    >
      {wishlistItems.length}
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

        {user?.name && (
          <span
            onClick={() => navigate("/home/customerdashboard")}
            className={`hidden sm:inline-block font-extrabold text-sm
               pr-3  cursor-pointer 
               transition ${
              isDark ? " text-[#E4C590] hover:text-white" : " text-[#8a4b12] hover:text-[#5f2f0d]"
            }`}
          >
            👋 Hi, {user.name}
          </span>
        )}

        <div
          className={`flex items-center gap-2 transition duration-300 
          cursor-pointer ${isDark ? "hover:text-white" : "hover:text-[#5f2f0d]"}`}
        >
          <LogoutButton />
        </div>
      </div>

      {/* Mobile slide-down menu */}
      {open && (
        <div className={`md:hidden absolute top-full left-0 right-0 z-50 p-4 transition-all duration-200 ${isDark ? "bg-[#111827] text-[#E4C590]" : "bg-[#fffaf1] text-[#8a4b12]"}`}>
          <nav className="flex flex-col gap-2">
            {user?.name && (
              <div
                onClick={() => {
                  setOpen(false);
                  navigate("/home/customerdashboard");
                }}
                className={`px-4 py-3 font-extrabold tracking-wide border-b pb-3 mb-2 cursor-pointer ${
                  isDark ? "border-[#E4C590]/20 text-[#E4C590]" : "border-[#8a4b12]/20 text-[#8a4b12]"
                }`}
              >
                👋 Hi, {user.name}
              </div>
            )}
            <Link to="/home" onClick={() => setOpen(false)} className={`rounded-xl px-4 py-3 font-semibold tracking-wide transition-all duration-200 ${isDark ? "text-[#D6B56C] hover:bg-[#D6B56C] hover:text-black" : "text-amber-900 hover:bg-amber-700 hover:text-white"}`}>
              Home
            </Link>

            <Link to="/home/about" onClick={() => setOpen(false)} className={`rounded-xl px-4 py-3 font-semibold tracking-wide transition-all duration-200 ${isDark ? "text-[#D6B56C] hover:bg-[#D6B56C] hover:text-black" : "text-amber-900 hover:bg-amber-700 hover:text-white"}`}>
              About
            </Link>

            <Link to="/home/booking" onClick={() => setOpen(false)} className={`rounded-xl px-4 py-3 font-semibold tracking-wide transition-all duration-200 ${isDark ? "text-[#D6B56C] hover:bg-[#D6B56C] hover:text-black" : "text-amber-900 hover:bg-amber-700 hover:text-white"}`}>
              Booking
            </Link>

            <Link to="/home/contact" onClick={() => setOpen(false)} className={`rounded-xl px-4 py-3 font-semibold tracking-wide transition-all duration-200 ${isDark ? "text-[#D6B56C] hover:bg-[#D6B56C] hover:text-black" : "text-amber-900 hover:bg-amber-700 hover:text-white"}`}>
              Contact
            </Link>

            <Link to="/home/menu" onClick={() => setOpen(false)} className={`rounded-xl px-4 py-3 font-semibold tracking-wide transition-all duration-200 ${isDark ? "text-[#D6B56C] hover:bg-[#D6B56C] hover:text-black" : "text-amber-900 hover:bg-amber-700 hover:text-white"}`}>
              Menu
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
