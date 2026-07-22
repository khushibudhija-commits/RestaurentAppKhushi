
import { useOutletContext } from "react-router-dom";

const About = () => {
  const { theme } = useOutletContext();

  const isDark = theme === "dark";

  return (
    <section
      className={`py-24 overflow-hidden cursor-pointer transition-colors duration-500 ${
        isDark ? "bg-gray-900" : "bg-[#fdf8f0]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p
              className={`uppercase tracking-[6px] text-sm font-semibold sans-serif ${
                isDark ? "text-[#d6b56c]" : "text-[#8a4b12]"
              }`}
            >
              Our Story
            </p>

            <div className="flex items-center mt-4 mb-10">
              <div
                className={`w-10 h-0.5 ${
                  isDark ? "bg-[#d6b56c]" : "bg-[#8a4b12]"
                }`}
              ></div>

              <div
                className={`mx-3 text-xl ${
                  isDark ? "text-[#d6b56c]" : "text-[#8a4b12]"
                }`}
              >
                ✧✧✧
              </div>

              <div
                className={`w-10 h-0.5 ${
                  isDark ? "bg-[#d6b56c]" : "bg-[#8a4b12]"
                }`}
              ></div>
            </div>

            <h1
              className={`text-5xl lg:text-6xl font-serif leading-tight ${
                isDark ? "text-white" : "text-[#2f2113]"
              }`}
            >
              Every Flavor Tells
              <br />a Story
            </h1>

            <p
              className={`leading-10 mt-10 text-lg max-w-xl ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Our restaurant is dedicated to serving freshly prepared dishes
              made from high-quality ingredients, ensuring every meal is rich in
              taste and crafted with care. Our menu features a diverse selection
              of appetizers, main courses, desserts, and refreshing beverages,
              offering something to satisfy every palate. We believe that great
              food is best enjoyed in a comfortable environment, complemented by
              friendly service and genuine hospitality. Thank you for choosing
              us. We look forward to welcoming you and serving meals that bring
              people together, create lasting memories, and celebrate the joy of
              great food.
            </p>

            <div className="mt-12">
              <h4
                className={`font-semibold text-xl ${
                  isDark ? "text-white" : "text-[#2f2113]"
                }`}
              >
                Book Through Call
              </h4>

              <p
                className={`text-4xl mt-2 ${
                  isDark ? "text-[#d6b56c]" : "text-[#8a4b12]"
                }`}
              >
                +80 (400) 123 4567
              </p>
            </div>

            <button
              className={`mt-12 border px-10 py-4 tracking-[3px] uppercase transition duration-500 ${
                isDark
                  ? "border-[#d6b56c] text-[#d6b56c] hover:bg-[#d6b56c] hover:text-black"
                  : "border-[#8a4b12] text-[#8a4b12] hover:bg-[#8a4b12] hover:text-white"
              }`}
            >
              Read More
            </button>
          </div>

          <div className="relative h-175">
            <img
              src="/picture1.jpg"
              alt=""
              className="absolute top-0 right-0 w-130 h-140 object-cover"
            />

            <img
              src="/chef.avif"
              alt=""
              className={`absolute bottom-0 left-0 w-[320px] h-62 object-cover border-8 ${
                isDark ? "border-[#171717]" : "border-[#fdf8f0]"
              }`}
            />

            <div
              className={`absolute top-5 right-20 translate-x-1/2 w-26 h-26 rounded-full border flex items-center justify-center animate-[spin_10s_linear_infinite] ${
                isDark ? "border-orange-200" : "border-orange-200"
              }`}
            >
              <div className="text-center">
                <p
                  className={`text-s uppercase mt-1 ${
                    isDark ? "text-orange-200" : "text-orange-200"
                  }`}
                >
                  Since
                </p>

                <p
                  className={`text-4xl font-serif ${
                    isDark ? "text-white" : "text-white"
                  }`}
                >
                  1995
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;