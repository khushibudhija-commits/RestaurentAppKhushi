import { useOutletContext } from "react-router-dom";
import {
  HeartHandshake,
  Leaf,
  ChefHat,
  Sparkles,
  Users,
  ShieldCheck,
} from "lucide-react";
import { Target, Eye } from "lucide-react";
const About = () => {
  const { theme } = useOutletContext();

  const isDark = theme === "dark";

  return (
    <>
      <section
        className={`py-14 md:py-20 lg:py-24 overflow-hidden cursor-pointer transition-colors duration-500 ${
          isDark ? "bg-gray-900" : "bg-[#fdf8f0]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p
                className={`uppercase tracking-[3px] md:tracking-[6px] text-xs md:text-sm font-semibold ${
                  isDark ? "text-[#d6b56c]" : "text-[#8a4b12]"
                }`}
              >
                Our Story
              </p>

              <div className="flex items-center mt-4 mb-8">
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
                  ✧ ✧ ✧
                </div>

                <div
                  className={`w-10 h-0.5 ${
                    isDark ? "bg-[#d6b56c]" : "bg-[#8a4b12]"
                  }`}
                ></div>
              </div>

              <h1
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-tight ${
                  isDark ? "text-white" : "text-[#2f2113]"
                }`}
              >
                Every Flavor Tells
                <br />a Story
              </h1>

              <p
                className={`leading-8 md:leading-10 mt-6 md:mt-10 text-base md:text-lg max-w-xl ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Our restaurant is dedicated to serving freshly prepared dishes
                made from high-quality ingredients, ensuring every meal is rich
                in taste and crafted with care. Our menu features a diverse
                selection of appetizers, main courses, desserts, and refreshing
                beverages, offering something to satisfy every palate. We
                believe that great food is best enjoyed in a comfortable
                environment, complemented by friendly service and genuine
                hospitality. Thank you for choosing us. We look forward to
                welcoming you and serving meals that bring people together,
                create lasting memories, and celebrate the joy of great food.
              </p>

              <div className="mt-8 md:mt-12">
                <h4
                  className={`font-semibold text-lg md:text-xl ${
                    isDark ? "text-white" : "text-[#2f2113]"
                  }`}
                >
                  Book Through Call
                </h4>

                <p
                  className={`text-2xl sm:text-3xl md:text-4xl mt-2 ${
                    isDark ? "text-[#d6b56c]" : "text-[#8a4b12]"
                  }`}
                >
                  +91 9812345678
                </p>
              </div>

              <a
                href="https://en.wikipedia.org/wiki/Restaurant"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block mt-8 md:mt-12 border px-6 md:px-10 py-3 md:py-4 tracking-[2px] md:tracking-[3px] uppercase transition duration-500 ${
                  isDark
                    ? "border-[#d6b56c] text-[#d6b56c] hover:bg-[#d6b56c] hover:text-black"
                    : "border-[#8a4b12] text-[#8a4b12] hover:bg-[#8a4b12] hover:text-white"
                }`}
              >
                Read More
              </a>
            </div>

            <div className="relative w-full mt-12 lg:mt-0">
              {/* Layered / overlapping layout for sm+ screens */}
              <div className="hidden sm:block h-[420px] sm:h-[520px] md:h-[620px] lg:h-[720px] relative">
                <img
                  src="/picture1.jpg"
                  alt="Restaurant"
                  className="absolute top-0 right-0 w-3/4 sm:w-2/3 lg:w-[520px] h-[260px] sm:h-[360px] md:h-[460px] lg:h-[560px] rounded-2xl object-cover shadow-[0_25px_60px_rgba(0,0,0,.35)] transition duration-500 hover:scale-105"
                />

                <img
                  src="/chef.avif"
                  alt="Chef"
                  className={`absolute bottom-0 left-0
                  w-3/5 sm:w-1/2 md:w-2/5 lg:w-[320px]
                  h-[180px] sm:h-[230px] md:h-[260px]
                  rounded-2xl object-cover border-8 shadow-2xl transition duration-500 hover:scale-105 ${
                    isDark ? "border-[#171717]" : "border-[#fdf8f0]"
                  }`}
                />

                <div
                  className={`absolute -top-10 right-4 sm:right-8 md:right-14 lg:-right-14 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full backdrop-blur-md border flex items-center justify-center shadow-xl animate-[spin_10s_linear_infinite] ${
                    isDark
                      ? "bg-black/40 border-[#d6b56c]"
                      : "bg-white/70 border-[#8a4b12]"
                  }`}
                >
                  <div className="text-center">
                    <p
                      className={`uppercase text-[10px] sm:text-xs tracking-widest ${
                        isDark ? "text-[#d6b56c]" : "text-[#8a4b12]"
                      }`}
                    >
                      Since
                    </p>

                    <p
                      className={`text-xl sm:text-3xl font-serif font-bold ${
                        isDark ? "text-white" : "text-[#2f2113]"
                      }`}
                    >
                      1999
                    </p>
                  </div>
                </div>

                <div
                  className={`absolute left-6 sm:left-10 bottom-44 sm:bottom-56 rounded-2xl px-5 py-4 backdrop-blur-xl shadow-2xl ${
                    isDark
                      ? "bg-[#1f1f1f]/90 border border-[#d6b56c]/30"
                      : "bg-white/90 border border-[#8a4b12]/20"
                  }`}
                >
                  <h2
                    className={`text-3xl font-bold ${
                      isDark ? "text-[#d6b56c]" : "text-[#8a4b12]"
                    }`}
                  >
                    25+
                  </h2>

                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Years of Excellence
                  </p>
                </div>
              </div>

              {/* Stacked layout for xs screens (mobile) */}
              <div className="sm:hidden grid grid-cols-1 gap-4">
                <img
                  src="/picture1.jpg"
                  alt="Restaurant"
                  className="w-full h-48 sm:h-56 rounded-2xl object-cover shadow-[0_18px_40px_rgba(0,0,0,.2)]"
                />

                <img
                  src="/chef.avif"
                  alt="Chef"
                  className={`w-full h-44 rounded-2xl object-cover border-8 shadow-2xl ${
                    isDark ? "border-[#171717]" : "border-[#fdf8f0]"
                  }`}
                />

                <div
                  className={`rounded-2xl px-4 py-3 ${isDark ? "bg-[#1a1a1a] text-gray-300" : "bg-white text-gray-700"} shadow-lg`}
                >
                  <div className="flex items-baseline justify-between">
                    <div>
                      <h2
                        className={`text-2xl font-bold ${isDark ? "text-[#d6b56c]" : "text-[#8a4b12]"}`}
                      >
                        25+
                      </h2>
                      <p className="text-sm">Years of Excellence</p>
                    </div>
                    <div className="text-right">
                      <p
                        className={`uppercase text-xs tracking-widest ${isDark ? "text-[#d6b56c]" : "text-[#8a4b12]"}`}
                      >
                        Since
                      </p>
                      <p
                        className={`text-lg font-serif font-bold ${isDark ? "text-white" : "text-[#2f2113]"}`}
                      >
                        1999
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`py-16 md:py-20 transition-all duration-500 ${
          isDark ? "bg-[#111827]" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="text-center">
            <p
              className={`uppercase tracking-[5px] font-semibold ${
                isDark ? "text-[#d6b56c]" : "text-[#8a4b12]"
              }`}
            >
              Why Choose Us
            </p>

            <h2
              className={`mt-4 text-3xl sm:text-4xl md:text-5xl font-bold ${
                isDark ? "text-white" : "text-[#2f2113]"
              }`}
            >
              Our Core Values
            </h2>

            <p
              className={`max-w-3xl mx-auto mt-6 leading-8 ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Every meal we prepare reflects our commitment to quality,
              hospitality and unforgettable dining experiences. These values
              guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <div
              className={`group rounded-3xl p-8 border transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${
                isDark
                  ? "bg-[#1a1a1a] border-gray-700 hover:border-[#d6b56c]"
                  : "bg-[#fdf8f0] border-gray-200 hover:border-[#8a4b12]"
              }`}
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center transition duration-500 group-hover:rotate-12 ${
                  isDark ? "bg-[#d6b56c] text-black" : "bg-[#8a4b12] text-white"
                }`}
              >
                <HeartHandshake size={32} />
              </div>

              <h3
                className={`mt-6 text-2xl font-bold ${
                  isDark ? "text-white" : "text-[#2f2113]"
                }`}
              >
                Hospitality
              </h3>

              <p
                className={`mt-4 leading-7 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                We welcome every guest with warmth, respect and exceptional
                service to create memorable dining experiences.
              </p>
            </div>

            <div
              className={`group rounded-3xl p-8 border transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${
                isDark
                  ? "bg-[#1a1a1a] border-gray-700 hover:border-[#d6b56c]"
                  : "bg-[#fdf8f0] border-gray-200 hover:border-[#8a4b12]"
              }`}
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center transition duration-500 group-hover:rotate-12 ${
                  isDark ? "bg-[#d6b56c] text-black" : "bg-[#8a4b12] text-white"
                }`}
              >
                <Leaf size={32} />
              </div>

              <h3
                className={`mt-6 text-2xl font-bold ${
                  isDark ? "text-white" : "text-[#2f2113]"
                }`}
              >
                Fresh Ingredients
              </h3>

              <p
                className={`mt-4 leading-7 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Every dish is prepared using premium quality ingredients sourced
                with freshness and sustainability in mind.
              </p>
            </div>

            <div
              className={`group rounded-3xl p-8 border transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${
                isDark
                  ? "bg-[#1a1a1a] border-gray-700 hover:border-[#d6b56c]"
                  : "bg-[#fdf8f0] border-gray-200 hover:border-[#8a4b12]"
              }`}
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center transition duration-500 group-hover:rotate-12 ${
                  isDark ? "bg-[#d6b56c] text-black" : "bg-[#8a4b12] text-white"
                }`}
              >
                <ChefHat size={32} />
              </div>

              <h3
                className={`mt-6 text-2xl font-bold ${
                  isDark ? "text-white" : "text-[#2f2113]"
                }`}
              >
                Expert Chefs
              </h3>

              <p
                className={`mt-4 leading-7 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Our experienced chefs blend creativity and authentic flavours to
                craft dishes that delight every guest.
              </p>
            </div>
            <div
              className={`group rounded-3xl p-8 border transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${
                isDark
                  ? "bg-[#1a1a1a] border-gray-700 hover:border-[#d6b56c]"
                  : "bg-[#fdf8f0] border-gray-200 hover:border-[#8a4b12]"
              }`}
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center transition duration-500 group-hover:rotate-12 ${
                  isDark ? "bg-[#d6b56c] text-black" : "bg-[#8a4b12] text-white"
                }`}
              >
                <Sparkles size={32} />
              </div>

              <h3
                className={`mt-6 text-2xl font-bold ${
                  isDark ? "text-white" : "text-[#2f2113]"
                }`}
              >
                Premium Experience
              </h3>

              <p
                className={`mt-4 leading-7 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Elegant interiors, comfortable seating and attentive service
                create an unforgettable atmosphere.
              </p>
            </div>

            <div
              className={`group rounded-3xl p-8 border transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${
                isDark
                  ? "bg-[#1a1a1a] border-gray-700 hover:border-[#d6b56c]"
                  : "bg-[#fdf8f0] border-gray-200 hover:border-[#8a4b12]"
              }`}
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center transition duration-500 group-hover:rotate-12 ${
                  isDark ? "bg-[#d6b56c] text-black" : "bg-[#8a4b12] text-white"
                }`}
              >
                <Users size={32} />
              </div>

              <h3
                className={`mt-6 text-2xl font-bold ${
                  isDark ? "text-white" : "text-[#2f2113]"
                }`}
              >
                Customer First
              </h3>

              <p
                className={`mt-4 leading-7 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Every decision we make focuses on customer satisfaction and
                delivering an exceptional dining journey.
              </p>
            </div>

            {/* Card 6 */}

            <div
              className={`group rounded-3xl p-8 border transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${
                isDark
                  ? "bg-[#1a1a1a] border-gray-700 hover:border-[#d6b56c]"
                  : "bg-[#fdf8f0] border-gray-200 hover:border-[#8a4b12]"
              }`}
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center transition duration-500 group-hover:rotate-12 ${
                  isDark ? "bg-[#d6b56c] text-black" : "bg-[#8a4b12] text-white"
                }`}
              >
                <ShieldCheck size={32} />
              </div>

              <h3
                className={`mt-6 text-2xl font-bold ${
                  isDark ? "text-white" : "text-[#2f2113]"
                }`}
              >
                Quality Promise
              </h3>

              <p
                className={`mt-4 leading-7 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                We maintain the highest standards of hygiene, food safety and
                quality to ensure every visit exceeds expectations.
              </p>
            </div>
          </div>
        </div>
        <section
          className={`py-20 transition-all duration-500 ${
            isDark ? "bg-[#111827]" : "bg-[#fffaf3]"
          }`}
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            {/* Heading */}

            <div className="text-center mb-16">
              <p
                className={`uppercase tracking-[5px] font-semibold ${
                  isDark ? "text-[#D6B56C]" : "text-[#8a4b12]"
                }`}
              >
                Our Purpose
              </p>

              <h2
                className={`mt-4 text-4xl md:text-5xl font-bold ${
                  isDark ? "text-white" : "text-[#2f2113]"
                }`}
              >
                Mission & Vision
              </h2>

              <p
                className={`max-w-3xl mx-auto mt-6 leading-8 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                We strive to create unforgettable dining experiences by
                combining authentic flavors, premium ingredients, exceptional
                hospitality, and innovative culinary excellence.
              </p>
            </div>

            {/* Cards */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Mission */}

              <div
                className={`group rounded-3xl p-10 border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  isDark
                    ? "bg-[#1a1a1a] border-gray-700 hover:border-[#D6B56C]"
                    : "bg-white border-gray-200 hover:border-[#8a4b12]"
                }`}
              >
                <div
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-12 ${
                    isDark
                      ? "bg-[#D6B56C] text-black"
                      : "bg-[#8a4b12] text-white"
                  }`}
                >
                  <Target size={40} />
                </div>

                <h3
                  className={`mt-8 text-3xl font-bold ${
                    isDark ? "text-white" : "text-[#2f2113]"
                  }`}
                >
                  Our Mission
                </h3>

                <p
                  className={`mt-6 leading-8 ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Our mission is to delight every guest by serving fresh,
                  high-quality food prepared with passion and care. We are
                  committed to creating memorable dining experiences through
                  exceptional service, warm hospitality, and a welcoming
                  atmosphere where families and friends can celebrate life's
                  special moments.
                </p>

                <div
                  className={`mt-8 h-1 w-24 rounded-full ${
                    isDark ? "bg-[#D6B56C]" : "bg-[#8a4b12]"
                  }`}
                ></div>
              </div>

              {/* Vision */}

              <div
                className={`group rounded-3xl p-10 border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  isDark
                    ? "bg-[#1a1a1a] border-gray-700 hover:border-[#D6B56C]"
                    : "bg-white border-gray-200 hover:border-[#8a4b12]"
                }`}
              >
                <div
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-12 ${
                    isDark
                      ? "bg-[#D6B56C] text-black"
                      : "bg-[#8a4b12] text-white"
                  }`}
                >
                  <Eye size={40} />
                </div>

                <h3
                  className={`mt-8 text-3xl font-bold ${
                    isDark ? "text-white" : "text-[#2f2113]"
                  }`}
                >
                  Our Vision
                </h3>

                <p
                  className={`mt-6 leading-8 ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Our vision is to become one of the most trusted and admired
                  restaurants by setting new standards in culinary excellence,
                  customer satisfaction, and innovation. We aspire to build
                  lasting relationships with our guests while continuously
                  evolving to offer unforgettable dining experiences for every
                  generation.
                </p>

                <div
                  className={`mt-8 h-1 w-24 rounded-full ${
                    isDark ? "bg-[#D6B56C]" : "bg-[#8a4b12]"
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
