
import { useOutletContext } from "react-router-dom";

export default function Contact() {
  const { theme } = useOutletContext();

  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen cursor-pointer py-20 px-8
         transition-all cursor-pointer duration-500 ${
        isDark ? "bg-[#171717]" : "bg-[#fdf8f0]"
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2
            className={`text-2xl font-bold mb-6 ${
              isDark ? "text-orange-100" : "text-[#8a4b12]"
            }`}
          >
            Foodie's
          </h2>

          <ul
            className={`space-y-3 uppercase ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <li
              className={`cursor-pointer ${
                isDark
                  ? "hover:text-orange-100"
                  : "hover:text-[#8a4b12]"
              }`}
            >
              Home
            </li>

            <li
              className={`cursor-pointer ${
                isDark
                  ? "hover:text-orange-100"
                  : "hover:text-[#8a4b12]"
              }`}
            >
              Menu
            </li>

            <li
              className={`cursor-pointer ${
                isDark
                  ? "hover:text-orange-100"
                  : "hover:text-[#8a4b12]"
              }`}
            >
              About
            </li>

            <li
              className={`cursor-pointer ${
                isDark
                  ? "hover:text-orange-100"
                  : "hover:text-[#8a4b12]"
              }`}
            >
              Our Chefs
            </li>

            <li
              className={`cursor-pointer ${
                isDark
                  ? "hover:text-orange-100"
                  : "hover:text-[#8a4b12]"
              }`}
            >
              Contact
            </li>
          </ul>
        </div>

        <div
          className={`rounded-lg p-8 text-center border ${
            isDark
              ? "bg-gray-900 border-orange-100"
              : "bg-white border-[#e7d6b3]"
          }`}
        >
          <h2
            className={`text-3xl font-bold mb-6 font-serif ${
              isDark ? "text-orange-100" : "text-[#8a4b12]"
            }`}
          >
            The Seasons Restaurant
          </h2>

          <p
            className={`mb-2 ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Restaurant Street, Delicious City
          </p>

          <p
            className={`mb-2 ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            example@gmail.com
          </p>

          <p
            className={`mb-2 ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Booking: +91 98765 43210
          </p>

          <p
            className={`mb-1 ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
           Mon - Fri : 10:00 AM - 10:00 PM</p>
           <p>
            Sat - Sun : 9:00 AM - 11:30 PM
          </p>

          <h3
            className={`text-2xl font-semibold mb-2 ${
              isDark ? "text-white" : "text-[#3c2415]"
            }`}
          >
            Get News & Offers
          </h3>

          <p
            className={`mb-6 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Subscribe & Get 25% Off
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Your Email"
              className={`flex-1 p-3 outline-none ${
                isDark
                  ? "bg-gray-800 text-white"
                  : "bg-[#f7efe1] text-[#3c2415]"
              }`}
            />

            <button
              className={`px-6 font-semibold ${
                isDark
                  ? "bg-orange-100 text-black hover:bg-orange-200"
                  : "bg-[#8a4b12] text-white hover:bg-[#6f3c11]"
              }`}
            >
              Subscribe
            </button>
          </div>
        </div>

        <div>
          <h2
            className={`text-2xl font-bold mb-6 ${
              isDark ? "text-orange-100" : "text-[#8a4b12]"
            }`}
          >
            Follow Us
          </h2>

          <ul
            className={`space-y-3 uppercase ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <li
              className={`cursor-pointer ${
                isDark
                  ? "hover:text-orange-100"
                  : "hover:text-[#8a4b12]"
              }`}
            >
              Facebook
            </li>

            <li
              className={`cursor-pointer ${
                isDark
                  ? "hover:text-orange-100"
                  : "hover:text-[#8a4b12]"
              }`}
            >
              Instagram
            </li>

            <li
              className={`cursor-pointer ${
                isDark
                  ? "hover:text-orange-100"
                  : "hover:text-[#8a4b12]"
              }`}
            >
              Twitter
            </li>

            <li
              className={`cursor-pointer ${
                isDark
                  ? "hover:text-orange-100"
                  : "hover:text-[#8a4b12]"
              }`}
            >
              YouTube
            </li>

            <li
              className={`cursor-pointer ${
                isDark
                  ? "hover:text-orange-100"
                  : "hover:text-[#8a4b12]"
              }`}
            >
              Google Map
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}