import { useNavigate, useOutletContext } from "react-router-dom";
import { Sparkles } from "lucide-react";

const Home = () => {
  const { theme, toggleTheme } = useOutletContext();

  const navigate = useNavigate();
  const isDark = theme === "dark";

  return (
    <div >
      <section
        className="relative overflow-hidden  bg-center transition-all duration-700 min-h-screen"
        style={{
          backgroundImage: isDark
            ? `linear-gradient(
                rgba(0,0,0,.72),
                rgba(15,23,42,.88)
              ),
              url('/hero-dark.jpg')`
            : `linear-gradient(
                rgba(255,248,240,.55),
                rgba(214,181,108,.25)
              ),
              url('/hero-light.jpg')`,
        }}
      >
        <div
          className="absolute top-20 left-10 w-72 h-72
         rounded-full bg-[#D6B56C]/20 blur-3xl animate-pulse"
        ></div>

        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full 
        bg-orange-500/20 blur-3xl animate-pulse"
        ></div>

        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full 
        bg-yellow-400/10 blur-3xl -translate-x-1/2 -translate-y-1/2"
        ></div>

        <Sparkles
          className={`absolute top-40 left-16 w-8 h-8 animate-bounce ${
            isDark ? "text-[#D6B56C]" : "text-[#7c4a12]"
          }`}
        />

        <Sparkles
          className={`absolute right-24 top-72 w-7 h-7 animate-pulse ${
            isDark ? "text-[#D6B56C]" : "text-[#7c4a12]"
          }`}
        />

        <header
          className="absolute top-15 left-0 w-full z-30
          px-6 md:px-12 py-5
          flex justify-between items-center"
        >
          {/* <button
            onClick={() => navigate("/booking")}
            className={`uppercase tracking-[3px] px-8 py-4 border backdrop-blur-md transition-all duration-500 rounded-md
            ${
              isDark
                ? "border-[#D6B56C] text-[#D6B56C] hover:bg-[#D6B56C] hover:text-black"
                : "border-[#7c4a12] text-[#7c4a12] bg-white/30 hover:bg-[#7c4a12] hover:text-white"
            }`}
          >
            Find A Table
          </button> */}

        </header>

        <div
          className="relative z-20 flex flex-col items-center 
        justify-center text-center px-6 pt-15"
        >
          <img
            src={isDark ? "/logo-light.png" : "/logo-dark.png"}
            alt="logo"
            className="w-60 md:w-72  animate-[float_4s_ease-in-out_infinite]"
          />

          <p
            className={`uppercase tracking-[8px] text-sm font-semibold animate-pulse
            ${isDark ? "text-[#D6B56C]" : "text-[#7c4a12]"}`}
          >
            Delightful Experience
          </p>

          <div
            className={`w-28 h-[2px] my-5
            ${isDark ? "bg-[#D6B56C]" : "bg-[#7c4a12]"}`}
          ></div>

          <h1
            className={`font-serif text-5xl md:text-7xl lg:text-8xl leading-tight max-w-6xl animate-[fadeUp_1.2s_ease]
            ${isDark ? "text-white" : "text-[#3c2415]"}`}
          >
            Flavors Inspired by
            <br />
            the Seasons
          </h1>

          <p
            className={`mt-8 max-w-2xl text-lg md:text-xl leading-8 animate-[fadeUp_1.5s_ease]
            ${isDark ? "text-gray-200" : "text-[#5f4630]"}`}
          >
            Experience handcrafted dishes prepared with fresh seasonal
            ingredients, exceptional hospitality, and unforgettable flavors.
          </p>

          <div className=" justify-center  mt-12">
            <button
              onClick={() => navigate("/home/booking")}
              className="px-10 py-5 rounded-md bg-[#D6B56C]
               text-black hover:scale-105 transition duration-500 
               font-semibold shadow-xl"
            >
              Book Now
            </button>
          </div>

          <div className="flex flex-row gap-5 mt-9">
            <div
              className={`group backdrop-blur-lg rounded-3xl overflow-hidden
    transition-all duration-700 hover:-translate-y-4
     hover:scale-102
    ${
      isDark
        ? "bg-white/10 border border-white/10"
        : "bg-white/40 border border-[#D6B56C]/40"
    }`}
            >
              <div className="overflow-hidden">
                <img
                  onClick={() => navigate("/home/drinks")}
                  src="/drinks/mojito.jpeg"
                  alt="Pasta"
                  className="w-62 h-62 object-cover transition-all duration-700
        group-hover:scale-110 animate-[float_5s_ease-in-out_infinite]"
                />
              </div>

              <div className="p-5 text-center">
                <h3
                  className={`text-2xl font-serif ${
                    isDark ? "text-white" : "text-[#3c2415]"
                  }`}
                >
                  Fresh Mojito
                </h3>

                <p className="text-[#D6B56C] mt-2">★★★★★</p>

                <p
                  className={`mt-3 text-sm ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Fresh mint flavour.
                </p>
              </div>
            </div>

            <div
              className={`group backdrop-blur-lg rounded-3xl overflow-hidden
    transition-all duration-700 hover:-translate-y-4
     hover:scale-102
    ${
      isDark
        ? "bg-white/10 border border-white/10"
        : "bg-white/40 border border-[#D6B56C]/40"
    }`}
            >
              <div className="overflow-hidden">
                <img
                  onClick={() => navigate("/home/appetizers")}
                  src="/appetizers/pasta.jpeg"
                  alt="Pasta"
                  className="w-62 h-62 object-cover transition-all duration-700
        group-hover:scale-110 animate-[float_5s_ease-in-out_infinite]"
                />
              </div>

              <div className="p-5 text-center">
                <h3
                  className={`text-2xl font-serif ${
                    isDark ? "text-white" : "text-[#3c2415]"
                  }`}
                >
                  Creamy Pasta
                </h3>

                <p className="text-[#D6B56C] mt-2">★★★★★</p>

                <p
                  className={`mt-3 text-sm ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Rich creamy sauce with herbs.
                </p>
              </div>
            </div>

            <div
              className={`group backdrop-blur-lg rounded-3xl overflow-hidden
    transition-all duration-700 hover:-translate-y-4 hover:scale-102
    ${
      isDark
        ? "bg-white/10 border border-white/10"
        : "bg-white/40 border border-[#D6B56C]/40"
    }`}
            >
              <div className="overflow-hidden">
                <img
                  onClick={() => navigate("/home/appetizers")}
                  src="/appetizers/burger.jpeg"
                  alt="Burger"
                  className="w-62 h-62 object-cover transition-all duration-700
        group-hover:scale-110 animate-[float_5s_ease-in-out_infinite]"
                  style={{ animationDelay: ".5s" }}
                />
              </div>

              <div className="p-5 text-center">
                <h3
                  className={`text-2xl font-serif ${
                    isDark ? "text-white" : "text-[#3c2415]"
                  }`}
                >
                  Classic Burger
                </h3>

                <p className="text-[#D6B56C] mt-2">★★★★★</p>

                <p
                  className={`mt-3 text-sm ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Juicy grilled patty with cheese.
                </p>
              </div>
            </div>

            <div
              className={`group backdrop-blur-lg rounded-3xl overflow-hidden
    transition-all duration-700 hover:-translate-y-4
     hover:scale-102
    ${
      isDark
        ? "bg-white/10 border border-white/10"
        : "bg-white/40 border border-[#D6B56C]/40"
    }`}
            >
              <div className="overflow-hidden">
                <img
                  onClick={() => navigate("/home/desserts")}
                  src="/desserts/gulabjamun.jpg"
                  alt="Pasta"
                  className="w-62 h-62 object-cover transition-all duration-700
        group-hover:scale-110 animate-[float_5s_ease-in-out_infinite]"
                />
              </div>

              <div className="p-5 text-center">
                <h3
                  className={`text-2xl font-serif ${
                    isDark ? "text-white" : "text-[#3c2415]"
                  }`}
                >
                  Kesar GulabJamun
                </h3>

                <p className="text-[#D6B56C] mt-2">★★★★★</p>

                <p
                  className={`mt-3 text-sm ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Hot & Delicious.
                </p>
              </div>
            </div>

            <div
              className={`group backdrop-blur-lg rounded-3xl overflow-hidden
    transition-all duration-700 hover:-translate-y-4 hover:scale-102
    ${
      isDark
        ? "bg-white/10 border border-white/10"
        : "bg-white/40 border border-[#D6B56C]/40"
    }`}
            >
              <div className="overflow-hidden">
                <img
                  onClick={() => navigate("/home/appetizers")}
                  src="/appetizers/pizza.jpg"
                  alt="Pizza"
                  className="w-65 h-65 object-cover transition-all duration-700
        group-hover:scale-110 animate-[float_5s_ease-in-out_infinite]"
                  style={{ animationDelay: "1s" }}
                />
              </div>

              <div className="p-5 text-center">
                <h3
                  className={`text-2xl font-serif ${
                    isDark ? "text-white" : "text-[#3c2415]"
                  }`}
                >
                  Italian Pizza
                </h3>

                <p className="text-[#D6B56C] mt-2">★★★★★</p>

                <p
                  className={`mt-3 text-sm ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Fresh mozzarella & basil toppings.
                </p>
              </div>
            </div>
          </div>

          <div className=" justify-center  mt-12">
            <button
              onClick={() => navigate("/home/menu")}
              className="px-10 py-5 rounded-md bg-[#D6B56C]
               text-black hover:scale-105 transition duration-500 
               font-semibold shadow-xl mb-6"
            >
              View Full Menu
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
