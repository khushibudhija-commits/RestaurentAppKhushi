import { useOutletContext, useNavigate } from "react-router-dom";
import menu from "../store/menu";

const Menu = () => {
  const { theme } = useOutletContext();

  const isDark = theme === "dark";
  const navigate = useNavigate();

  return (
    <section
      className={`py-16 px-6 transition-all cursor-pointer duration-500 ${
        isDark
          ? "bg-linear-to-b from-black via-zinc-900 to-gray-900 text-white"
          : "bg-linear-to-b from-orange-50 via-amber-50 to-orange-100 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h1
          className={`text-4xl md:text-5xl font-bold text-center mb-4 mt-4 ${
            isDark ? "text-[#D6B56C]" : "text-[#8a4b12]"
          }`}
        >
          OUR RESTAURANT SERVES
        </h1>
        <p
          className={`text-center max-w-2xl mx-auto mb-8 ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Best food in terms of quality and quantity.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menu.map((item) => (
            <div
              key={item.id}
              className={`rounded-xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                isDark
                  ? "bg-zinc-900 border-zinc-800 hover:border-[#D6B56C] hover:shadow-[#D6B56C]/20"
                  : "bg-white border-gray-200 shadow-lg hover:border-[#8a4b12] hover:shadow-orange-300"
              }`}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-60 object-cover transition-transform duration-500 hover:scale-105"
              />

              <div className="p-6">
                <h3
                  className={`text-2xl font-bold mb-3 ${
                    isDark ? "text-[#D6B56C]" : "text-[#8a4b12]"
                  }`}
                >
                  {item.name}
                </h3>

                <button
                  onClick={() => {
                    if (item.id === 1) navigate("/home/appetizers");
                    if (item.id === 2) navigate("/home/drinks");
                    if (item.id === 3) navigate("/home/soup");
                    if (item.id === 4) navigate("/home/salad");
                    if (item.id === 5) navigate("/home/coffee");
                    if (item.id === 6) navigate("/home/desserts");
                    if (item.id === 7) navigate("/home/cakes");
                    if (item.id === 8) navigate("/home/roti");
                    if (item.id === 9) navigate("/home/sabji");
                    if (item.id === 10) navigate("/home/curddishes");
                  }}
                  className={`w-full py-3 rounded-lg font-semibold
                    cursor-pointer transition-all duration-300 ${
                    isDark
                      ? "bg-[#D6B56C] text-black hover:bg-[#e8c97d] hover:shadow-lg hover:shadow-[#D6B56C]/40"
                      : "bg-[#8a4b12] text-white hover:bg-[#6f3c11] hover:shadow-lg hover:shadow-orange-300"
                  }`}
                >
                  VIEW ITEMS
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;