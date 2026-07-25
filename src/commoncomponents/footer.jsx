
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer({ theme = "light" }) {
  const isDark = theme === "dark";
  const socialLinks = [
    { image: "/socialmedia/instagram.png", label: "Instagram", url: "https://www.instagram.com" },
    { image: "/socialmedia/facebook.png", label: "Facebook", url: "https://www.facebook.com" },
    { image: "/socialmedia/youtube.png", label: "YouTube", url: "https://www.youtube.com" },
    { image: "/socialmedia/linkedin.png", label: "LinkedIn", url: "https://www.linkedin.com" },
  ];

  return (
    <footer
      className={`transition-all duration-500 cursor-pointer ${
        isDark
          ? "bg-[#0f172a] text-white"
          : "bg-[#fdf8f0] text-[#3c2415]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        <div>
          <h2 className="text-3xl font-bold text-[#D6B56C] mb-4">
            The Seasons
          </h2>

          <p
            className={`leading-7 ${
              isDark ? "text-gray-300" : "text-amber-900"
            }`}
          >
            Experience unforgettable dining with handcrafted dishes, fresh
            ingredients, and exceptional hospitality in a warm atmosphere.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-5 text-[#D6B56C] ">
            Quick Links
          </h3>

          <div className="flex flex-col  gap-2">
        <Link
          to="/home"
          className={`rounded-xl px-2 py-1  font-semibold
             tracking-wide transition-all duration-300
          ${
            isDark
              ? "text-[#D6B56C]  hover:text-white"
              : "text-amber-900 hover:text-blue-400"
          }`}
        >
          Home
        </Link>

        <Link
          to="/home/about"
          className={`rounded-xl px-2 py-1 font-semibold tracking-wide transition-all duration-300
          ${
            isDark
             ? "text-[#D6B56C]  hover:text-white"
              : "text-amber-900 hover:text-blue-400"
          }`}
        >
          About
        </Link>

        <Link
          to="/home/booking"
          className={`rounded-xl px-2 py-1  font-semibold tracking-wide transition-all duration-300
          ${
            isDark
              ? "text-[#D6B56C]  hover:text-white"
              : "text-amber-900 hover:text-blue-400"
          }`}
        >
          Booking
        </Link>

        <Link
          to="/home/contact"
          className={`rounded-xl px-2 py-1  font-semibold tracking-wide transition-all duration-300
          ${
            isDark
              ? "text-[#D6B56C]  hover:text-white"
              : "text-amber-900 hover:text-blue-400"
          }`}
        >
          Contact
        </Link>
        <Link
          to="/home/menu"
          className={`rounded-xl px-2 py-1 font-semibold tracking-wide transition-all duration-300
          ${
            isDark
              ? "text-[#D6B56C]  hover:text-white"
              : "text-amber-900 hover:text-blue-400"
          }`}
        >
          Menu
        </Link>
</div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-5 text-[#D6B56C]">
            Contact Us
          </h3>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-[#D6B56C]" />
              <span> Restaurant Street, Delicious City</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} className="text-[#D6B56C]" />
              <span>+91 98123 45678</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} className="text-[#D6B56C]" />
              <span>example@gmail.com</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-5 text-[#D6B56C]">
            Opening Hours
          </h3>

          <div className="space-y-3">
            <div className="flex gap-3">
              <Clock size={18} className="text-[#D6B56C]" />
              <span>Mon - Fri : 9:00 AM - 8:00 PM</span>
            </div>

           
          </div>

          <div className="mt-8">
            <h4 className="text-sm font-semibold mb-3 text-[#D6B56C]">
              Follow Us
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ image, label, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`rounded-full p-2 transition-all duration-300 hover:scale-110 ${
                    isDark
                      ? "bg-slate-800 hover:bg-slate-700"
                      : "bg-[#f5e7c8] hover:bg-[#e8d3a4]"
                  }`}
                >
                  <img
                    src={image}
                    alt={label}
                    className="h-6 w-6 rounded-full object-cover"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`border-t ${
          isDark ? "border-gray-700" : "border-[#e7d6b3]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className={isDark ? "text-gray-400" : "text-gray-600"}>
            © {new Date().getFullYear()} The Seasons Restaurant. All Rights
            Reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0 flex-wrap justify-center">
  <a
    href="https://policies.google.com/privacy"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#D6B56C] transition"
  >
    Privacy Policy
  </a>

  <a
    href="https://policies.google.com/terms"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#D6B56C] transition"
  >
    Terms & Conditions
  </a>

  <a
    href="https://support.google.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#D6B56C] transition"
  >
    FAQ
  </a>
</div>
        </div>
      </div>
    </footer>
  );
}