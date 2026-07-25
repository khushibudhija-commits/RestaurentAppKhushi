
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useOutletContext, useNavigate } from "react-router-dom";
const Menu = () => {
  const { theme } = useOutletContext();
  const isDark = theme === "dark";
  const navigate = useNavigate();
 const [menu, setMenu] = useState([]);
const [filteredMenu, setFilteredMenu] = useState([]);
const [search, setSearch] = useState("");
const [debouncedValue, setDebouncedValue] = useState("");
useEffect(() => {
  const fetchMenu = async () => {
    try {
      const response = await fetch(
        "https://restraunt-app-backend.onrender.com/api/categories/getAllCategories"
      );
      const result = await response.json();
      if (!response.ok) {
        alert(result.message);
        return;
      }
      setMenu(result.data);
      setFilteredMenu(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  fetchMenu();
}, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);
  useEffect(() => {
  if (!debouncedValue.trim()) {
    setFilteredMenu(menu);
    return;
  }
  const filtered = menu.filter((item) =>
    item.name.toLowerCase().includes(debouncedValue.toLowerCase())
  );
  setFilteredMenu(filtered);
}, [debouncedValue, menu]);
  return (
    <section
      className={`py-16 px-6 transition-all duration-500 ${
        isDark
          ? "bg-gradient-to-b from-black via-zinc-900 to-gray-900 text-white"
          : "bg-gradient-to-b from-orange-50 via-amber-50 to-orange-100 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h1
          className={`text-4xl md:text-5xl font-bold text-center mt-4 ${
            isDark ? "text-[#D6B56C]" : "text-[#8a4b12]"
          }`}
        >
          OUR RESTAURANT SERVES
        </h1>

        <p
          className={`text-center max-w-2xl mx-auto mt-4 ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Best food in terms of quality and quantity.
        </p>
        <div className="flex justify-center my-10">
          <div
            className={`flex items-center w-full max-w-xl rounded-xl px-4 py-3 transition-all ${
              isDark
                ? "bg-zinc-900 border border-zinc-700"
                : "bg-white border border-gray-300 shadow-md"
            }`}
          >
            <Search
              size={20}
              className={isDark ? "text-gray-400" : "text-gray-500"}
            />

            <input
              type="text"
              placeholder="Search food category..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={`flex-1 ml-3 bg-transparent outline-none ${
                isDark
                  ? "text-white placeholder-gray-400"
                  : "text-black placeholder-gray-500"
              }`}
            />
          </div>
        </div>
        {filteredMenu.length === 0 ? (
          <div className="text-center py-20">
            <h2
              className={`text-4xl font-bold ${
                isDark ? "text-[#D6B56C]" : "text-[#8a4b12]"
              }`}
            >
              No Category Found 🍽️
            </h2>
            <p
              className={`mt-4 text-lg ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Try searching with another keyword.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMenu.map((item) => (
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
  switch (item.name) {
    case "APPETIZERS":
      navigate("/home/appetizers");
      break;

    case "DRINKS":
      navigate("/home/drinks");
      break;

    case "SOUP":
      navigate("/home/soup");
      break;

    case "SALAD":
      navigate("/home/salad");
      break;

    case "COFFEE":
      navigate("/home/coffee");
      break;

    case "DESSERTS":
      navigate("/home/desserts");
      break;

    case "CAKES":
      navigate("/home/cakes");
      break;

    case "ROTI":
      navigate("/home/roti");
      break;

    case "ICONIC CURD DISHES":
      navigate("/home/curddishes");
      break;

    case "CLASSIC INDIAN SABJI COLLECTION":
      navigate("/home/sabji");
      break;

    default:
      console.log("No route found");
  }
}}
                    className={`w-full py-3 rounded-lg font-semibold cursor-pointer transition-all duration-300 ${
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
        )}
      </div>
    </section>
  );
};
export default Menu;