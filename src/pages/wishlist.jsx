import { useEffect } from "react";
import { Heart, Trash2, ArrowLeft } from "lucide-react";
import { useNavigate, useOutletContext } from "react-router-dom";

import useWishlistStore from "../store/wishlist";
import useCartStore from "../store/cart";

const Wishlist = ({ theme }) => {
  const navigate = useNavigate();
  const outlet = useOutletContext();
  const activeTheme = theme ?? outlet?.theme ?? "light";

  const isDark = activeTheme === "dark";

  const wishlistItems = useWishlistStore((state) => state.wishlistItems);
  const removeFromWishlist = useWishlistStore((state) => state.removeFromWishlist);
  const clearWishlist = useWishlistStore((state) => state.clearWishlist);
  const fetchWishlist = useWishlistStore((state) => state.fetchWishlist);

  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    fetchWishlist();
  }, []);

  const total = wishlistItems.reduce(
    (sum, item) => sum + item.price,
    0
  );


  return (
    <section
      className={`min-h-screen py-24 px-6 transition-all duration-500 ${
        isDark
          ? "bg-[#0f172a] text-white"
          : "bg-[#fdf8f0] text-[#3c2415]"
      }`}
    >
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">

          <div>

            <p className="uppercase tracking-[5px] text-[#D6B56C] font-semibold">
              Wishlist
            </p>

            <h1 className="text-5xl font-bold mt-4">
              My Favourite Foods
            </h1>

          </div>

          <button
            onClick={() => navigate("/home/menu")}
            className="flex items-center gap-3 px-6 py-3 rounded-full
            bg-[#D6B56C] text-black font-semibold hover:scale-105 transition"
          >
            <ArrowLeft size={20} />

            Continue Shopping

          </button>

        </div>

        {/* Wishlist Items */}
        {wishlistItems.length === 0 ? (
          <div
            className={`rounded-3xl p-16 text-center shadow-xl ${
              isDark
                ? "bg-[#171717] border border-gray-700"
                : "bg-white border border-orange-100"
            }`}
          >
            <div className="text-7xl mb-6">❤️</div>

            <h2
              className={`text-3xl font-bold ${
                isDark ? "text-white" : "text-[#3c2415]"
              }`}
            >
              Your Wishlist is Empty
            </h2>

            <p
              className={`mt-4 ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Save your favourite dishes here and order them anytime.
            </p>

            <button
              onClick={() => navigate("/home/menu")}
              className="mt-8 px-8 py-3 rounded-xl bg-[#D6B56C] text-black font-semibold hover:scale-105 transition"
            >
              Browse Menu
            </button>
          </div>
        ) : (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {wishlistItems.map((item) => (
                <div
                  key={item.id}
                  className={`rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                    isDark
                      ? "bg-[#171717] border border-gray-700"
                      : "bg-white border border-orange-100"
                  }`}
                >
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-60 object-cover"
                    />

                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center hover:scale-110 transition"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2
                      className={`text-2xl font-bold ${
                        isDark ? "text-white" : "text-[#3c2415]"
                      }`}
                    >
                      {item.name}
                    </h2>

                    <p
                      className={`mt-2 ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Delicious freshly prepared dish made with premium
                      ingredients.
                    </p>

                    <div className="flex items-center justify-between mt-6">
                      <span
                        className={`text-2xl font-bold ${
                          isDark ? "text-[#D6B56C]" : "text-[#8a4b12]"
                        }`}
                      >
                        ₹{item.price}
                      </span>

                      <button
                        onClick={() => {
                          addToCart(item);
                          removeFromWishlist(item.id);
                        }}
                        className="px-5 py-2 rounded-xl bg-[#D6B56C] text-black font-semibold hover:scale-105 transition"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-5 mt-14">
              <button
                onClick={() => navigate("/home/menu")}
                className={`px-8 py-3 rounded-xl font-semibold transition ${
                  isDark
                    ? "border border-[#D6B56C] text-[#D6B56C] hover:bg-[#D6B56C] hover:text-black"
                    : "border border-[#8a4b12] text-[#8a4b12] hover:bg-[#8a4b12] hover:text-white"
                }`}
              >
                Continue Shopping
              </button>

              <button
                onClick={clearWishlist}
                className="px-8 py-3 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition"
              >
                Clear Wishlist
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Wishlist;