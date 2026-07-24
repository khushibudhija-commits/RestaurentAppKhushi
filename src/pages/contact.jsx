import {
  MapPin,
  Phone,
  Mail,
  Clock,
  // Facebook,
  // Instagram,
  // Twitter,
  // Youtube,
  Send,
} from "lucide-react";

import { useOutletContext } from "react-router-dom";

export default function Contact() {
  const { theme } = useOutletContext();

  const isDark = theme === "dark";

  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/hero-light.jpg')",
      }}
    >
      {/* Overlay */}

      <div
        className={`absolute inset-0 ${
          isDark ? "bg-black/80" : "bg-black/55"
        }`}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        {/* Heading */}

        <div className="text-center">

          <p
            className={`uppercase tracking-[8px] font-semibold ${
              isDark ? "text-[#D6B56C]" : "text-orange-200"
            }`}
          >
            Contact Us
          </p>

          <h1
            className={`mt-4 text-5xl md:text-6xl font-extrabold ${
              isDark ? "text-white" : "text-white"
            }`}
          >
            We'd Love To Hear
            <span className="text-[#D6B56C]">
              {" "}
              From You
            </span>
          </h1>

          <p
            className={`max-w-3xl mx-auto mt-6 text-lg ${
              isDark ? "text-gray-300" : "text-gray-200"
            }`}
          >
            Whether you're planning a family dinner,
            romantic evening, birthday celebration,
            or corporate event, our team is always
            ready to make your experience memorable.
          </p>

        </div>

        {/* Contact Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-16">

          {/* Address */}

          <div
            className={`group rounded-3xl p-8 backdrop-blur-xl border transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${
              isDark
                ? "bg-[#171717]/90 border-gray-700"
                : "bg-white/90 border-white/40"
            }`}
          >
            <div className="w-16 h-16 rounded-full bg-[#D6B56C] flex items-center justify-center mx-auto group-hover:rotate-12 transition">

              <MapPin size={32} className="text-black" />

            </div>

            <h2
              className={`mt-6 text-2xl text-center font-bold ${
                isDark ? "text-white" : "text-[#3c2415]"
              }`}
            >
              Address
            </h2>

            <p
              className={`mt-4 text-center leading-7 ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Restaurant Street,
              <br />
              Delicious City,
              <br />
              India
            </p>

          </div>

          {/* Phone */}

          <div
            className={`group rounded-3xl p-8 backdrop-blur-xl border transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${
              isDark
                ? "bg-[#171717]/90 border-gray-700"
                : "bg-white/90 border-white/40"
            }`}
          >
            <div className="w-16 h-16 rounded-full bg-[#D6B56C] flex items-center justify-center mx-auto group-hover:rotate-12 transition">

              <Phone size={32} className="text-black" />

            </div>

            <h2
              className={`mt-6 text-2xl text-center font-bold ${
                isDark ? "text-white" : "text-[#3c2415]"
              }`}
            >
              Phone
            </h2>

            <p
              className={`mt-4 text-center ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              +91 98765 43210
            </p>

           
          </div>

          {/* Email */}

          <div
            className={`group rounded-3xl p-8 backdrop-blur-xl border transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${
              isDark
                ? "bg-[#171717]/90 border-gray-700"
                : "bg-white/90 border-white/40"
            }`}
          >
            <div className="w-16 h-16 rounded-full bg-[#D6B56C] flex items-center justify-center mx-auto group-hover:rotate-12 transition">
              <Mail size={32} className="text-black" />
            </div>

            <h2
              className={`mt-6 text-2xl text-center font-bold ${
                isDark ? "text-white" : "text-[#3c2415]"
              }`}
            >
              Email
            </h2>
            <p
              className={`mt-4 text-center break-all ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              example@gmail.com
            </p>
          </div>
          <div
            className={`group rounded-3xl p-8 backdrop-blur-xl border transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${
              isDark
                ? "bg-[#171717]/90 border-gray-700"
                : "bg-white/90 border-white/40"
            }`}
          >
            <div className="w-16 h-16 rounded-full bg-[#D6B56C] flex items-center justify-center mx-auto group-hover:rotate-12 transition">
              <Clock size={32} className="text-black" />
            </div>
            <h2
              className={`mt-6 text-2xl text-center font-bold ${
                isDark ? "text-white" : "text-[#3c2415]"
              }`}
            >
              Opening Hours
            </h2>
            <p
              className={`mt-4 text-center ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Mon - Fri
              <br />
              10:00 AM – 10:00 PM
            </p>
            <p
              className={`mt-4 text-center ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Sat - Sun
              <br />
              9:00 AM – 11:30 PM
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 mt-16">
          <div
            className={`rounded-3xl p-8 shadow-2xl border transition-all duration-500 ${
              isDark
                ? "bg-[#1b1b1b] border-[#D6B56C]/30"
                : "bg-white border-orange-200"
            }`}
          >
            <h2
              className={`text-3xl font-bold mb-8 ${
                isDark ? "text-[#D6B56C]" : "text-[#8a4b12]"
              }`}
            >
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-5">
                <div
                  className={`p-4 rounded-full ${
                    isDark
                      ? "bg-[#D6B56C]/20"
                      : "bg-orange-100"
                  }`}
                >
                  <MapPin
                    className={
                      isDark
                        ? "text-[#D6B56C]"
                        : "text-[#8a4b12]"
                    }
                    size={24}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">
                    Address
                  </h3>
                  <p
                    className={
                      isDark
                        ? "text-gray-400"
                        : "text-gray-600"
                    }
                  >
                    Restaurant Street,
                    Delicious City,
                    India
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div
                  className={`p-4 rounded-full ${
                    isDark
                      ? "bg-[#D6B56C]/20"
                      : "bg-orange-100"
                  }`}
                >
                  <Phone
                    className={
                      isDark
                        ? "text-[#D6B56C]"
                        : "text-[#8a4b12]"
                    }
                    size={24}
                  />
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    Phone
                  </h3>
                  <p
                    className={
                      isDark
                        ? "text-gray-400"
                        : "text-gray-600"
                    }
                  >
                    +91 98765 43210
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div
                  className={`p-4 rounded-full ${
                    isDark
                      ? "bg-[#D6B56C]/20"
                      : "bg-orange-100"
                  }`}
                >
                  <Mail
                    className={
                      isDark
                        ? "text-[#D6B56C]"
                        : "text-[#8a4b12]"
                    }
                    size={24}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">
                    Email
                  </h3>
                  <p
                    className={
                      isDark
                        ? "text-gray-400"
                        : "text-gray-600"
                    }
                  >
                    theseasons@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div
                  className={`p-4 rounded-full ${
                    isDark
                      ? "bg-[#D6B56C]/20"
                      : "bg-orange-100"
                  }`}
                >
                  <Clock
                    className={
                      isDark
                        ? "text-[#D6B56C]"
                        : "text-[#8a4b12]"
                    }
                    size={24}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">
                    Opening Hours
                  </h3>
                  <p
                    className={
                      isDark
                        ? "text-gray-400"
                        : "text-gray-600"
                    }
                  >
                    Monday - Friday
                  </p>
                  <p
                    className={
                      isDark
                        ? "text-gray-300"
                        : "text-gray-700"
                    }
                  >
                    10:00 AM - 10:00 PM
                  </p>
                  <p
                    className={
                      isDark
                        ? "text-gray-400"
                        : "text-gray-600"
                    }
                  >
                    Saturday - Sunday
                  </p>
                  <p
                    className={
                      isDark
                        ? "text-gray-300"
                        : "text-gray-700"
                    }
                  >
                    9:00 AM - 11:30 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`rounded-3xl overflow-hidden border shadow-2xl ${
              isDark
                ? "border-[#D6B56C]/30"
                : "border-orange-200"
            }`}
          >
            <iframe
              title="Restaurant Location"
              src="https://www.google.com/maps?q=India+Gate+New+Delhi&output=embed"
              className="w-full h-[500px]"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div
          className={`mt-20 rounded-[35px] overflow-hidden shadow-2xl border ${
            isDark
              ? "bg-gradient-to-r from-[#1b1b1b] to-[#111827] border-[#D6B56C]/30"
              : "bg-gradient-to-r from-orange-50 to-amber-100 border-orange-200"
          }`}
        >
          <div className="grid lg:grid-cols-2 items-center">
            <div className="p-10">
              <h2
                className={`text-4xl font-bold ${
                  isDark
                    ? "text-[#D6B56C]"
                    : "text-[#8a4b12]"
                }`}
              >
                Stay Updated 🍽️
              </h2>
              <p
                className={`mt-5 leading-8 ${
                  isDark
                    ? "text-gray-300"
                    : "text-gray-600"
                }`}
              >
                Subscribe to receive exclusive discounts,
                seasonal menus, exciting events and special
                offers directly in your inbox.
              </p>
            </div>
            <div className="p-10">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={`flex-1 rounded-xl px-5 py-4 outline-none border ${
                    isDark
                      ? "bg-[#242424] border-gray-700 text-white"
                      : "bg-white border-orange-200"
                  }`}
                />
                <button
                  className={`rounded-xl px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 ${
                    isDark
                      ? "bg-[#D6B56C] text-black hover:bg-[#e8c97d]"
                      : "bg-[#8a4b12] text-white hover:bg-[#6f3c11]"
                  }`}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 flex flex-wrap justify-center gap-8">
          {[
            {
              // icon: <Facebook />,
              name: "Facebook",
            },
            {
              // icon: <Instagram />,
              name: "Instagram",
            },
            {
              // icon: <Twitter />,
              name: "Twitter",
            },
            {
              // icon: <Youtube />,
              name: "YouTube",
            },
          ].map((social, index) => (

            <div
              key={index}
              className={`group flex flex-col items-center justify-center rounded-3xl w-40 h-40 cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${
                isDark
                  ? "bg-[#1c1c1c] hover:bg-[#D6B56C] text-white hover:text-black"
                  : "bg-white hover:bg-[#8a4b12] text-[#8a4b12] hover:text-white"
              }`}
            >
              <div className="text-4xl transition-transform duration-500 group-hover:scale-125">
                {social.icon}
              </div>

              <p className="mt-4 font-semibold">
                {social.name}
              </p>
            </div>

          ))}

        </div>

        {/* Footer */}

        <div
          className={`mt-20 border-t pt-10 flex flex-col md:flex-row justify-between items-center gap-6 ${
            isDark
              ? "border-gray-700"
              : "border-orange-200"
          }`}
        >
          <div>

            <h2
              className={`text-2xl font-bold ${
                isDark
                  ? "text-[#D6B56C]"
                  : "text-[#8a4b12]"
              }`}
            >
              The Seasons Restaurant
            </h2>

            <p
              className={`mt-2 ${
                isDark
                  ? "text-gray-400"
                  : "text-gray-600"
              }`}
            >
              Fine Dining • Premium Taste • Luxury Experience
            </p>

          </div>

          <div
            className={`text-center ${
              isDark
                ? "text-gray-400"
                : "text-gray-600"
            }`}
          >
            © {new Date().getFullYear()} The Seasons Restaurant.
            <br />
            Crafted with ❤️ using React & Tailwind CSS.
          </div>
        </div>

      </div>
    </section>
  );
}
