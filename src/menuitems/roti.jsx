
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { ChevronLeft, ChevronRight, Heart, RefreshCw } from "lucide-react";
import useCartStore from "../store/cart";
import SliderModule from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useWishlistStore from "../store/wishlist";

const Slider = SliderModule.default;
function NextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="
      absolute -right-8 top-1/2
      -translate-y-1/2
      z-20
      w-12 h-12
      rounded-full
      bg-[#D6B56C]
      text-black
      shadow-xl
      flex items-center
      justify-center
      hover:scale-110
      hover:bg-[#e7c77b]
      transition-all duration-300
      "
    >
      <ChevronRight size={28} />
    </button>
  );
}
function PrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="
      absolute -left-8 top-1/2
      -translate-y-1/2
      z-20
      w-12 h-12
      rounded-full
      bg-[#D6B56C]
      text-black
      shadow-xl
      flex items-center
      justify-center
      hover:scale-110
      hover:bg-[#e7c77b]
      transition-all duration-300
      "
    >
      <ChevronLeft size={28} />
    </button>
  );
}
const Roti = () => {
  const addToWishlist = useWishlistStore((state) => state.addToWishlist);
  const removeFromWishlist = useWishlistStore((state) => state.removeFromWishlist);
  const wishlistItems = useWishlistStore((state) => state.wishlistItems);

  const { theme } = useOutletContext();
  const isDark = theme === "dark";
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const cartItems = useCartStore((state) => state.cartItems);

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubcategories = async () => {
      try {
        const response = await fetch("https://restaurent-app-backend.onrender.com/api/subcategories/getAll");
        const result = await response.json();
        if (response.ok && result.data) {
          const filtered = result.data.filter(
            (sub) => sub.category?.name?.toUpperCase() === "ROTI"
          );
          const formatted = filtered.map((sub) => ({
            id: String(sub._id),
            name: sub.name,
            image: sub.image.startsWith("http")
              ? sub.image
              : sub.image.startsWith("/uploads") || sub.image.startsWith("uploads")
              ? `https://restaurent-app-backend.onrender.com${sub.image.startsWith("/") ? "" : "/"}${sub.image}`
              : sub.image,
            price: Number(sub.prices || 0),
            quantity: sub.quantity || 1,
          }));
          setItems(formatted);
        }
      } catch (err) {
        console.error("Error fetching subcategories:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSubcategories();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2.7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "35px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,

        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,

        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
  <section
    className={`min-h-screen py-20 px-6 transition-all duration-500 ${
      isDark
        ? "bg-gradient-to-b from-black via-zinc-900 to-black text-white"
        : "bg-gradient-to-b from-orange-50 via-amber-50 to-orange-100 text-gray-900"
    }`}
  >
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <p
          className={`uppercase tracking-[6px] text-sm mb-3 ${
            isDark ? "text-[#E4C590]" : "text-[#8a4b12]"
          }`}
        >
          Fresh & Delicious
        </p>
        <h1
          className={`text-5xl font-bold ${
            isDark ? "text-[#E4C590]" : "text-[#8a4b12]"
          }`}
        >
          Roti
        </h1>
        <div
          className={`w-28 h-1 rounded-full mx-auto mt-4 ${
            isDark ? "bg-[#E4C590]" : "bg-[#8a4b12]"
          }`}
        ></div>
      </div>
      {loading ? (
        <div className="py-12 text-center text-sm text-gray-400 flex items-center justify-center gap-2">
          <RefreshCw className="w-5 h-5 animate-spin text-[#D6B56C]" />
          Loading roti items...
        </div>
      ) : items.length === 0 ? (
        <div className="text-center text-gray-400 py-12">No roti items found.</div>
      ) : (
        <Slider {...settings}>
          {items.map((item) => {
            const isInCart = cartItems.some(
              (cartItem) => String(cartItem.id) === String(item.id)
            );
            const liked = wishlistItems.some(
              (wishlistItem) => String(wishlistItem.id || wishlistItem.itemId) === String(item.id)
            );

            return (
              <div key={item.id} className="px-3 py-3">
                <div
                  className={`card rounded-3xl overflow-hidden
                     transition-all duration-500 hover:-translate-y-4 ${
                    isDark
                      ? "bg-zinc-900 border border-zinc-700 hover:border-[#D6B56C]"
                      : "bg-white border border-orange-200 hover:border-[#8a4b12]"
                  }`}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-72 object-cover transition duration-500 hover:scale-110"
                    />
                    <button
                      onClick={() => {
                        if (liked) {
                          removeFromWishlist(item.id);
                        } else {
                          addToWishlist(item);
                        }
                      }}
                      className={`absolute top-4 right-4 z-10
                          w-11 h-11 rounded-full
                          flex items-center justify-center
                          shadow-lg backdrop-blur-md
                          transition-all duration-300 hover:scale-110
                          ${liked ? "bg-red-100" : "bg-black/40"}`}
                    >
                      <Heart
                        size={24}
                        className={`transition-all duration-300 ${liked ? "text-red-500 scale-110" : "text-white"}`}
                        fill={liked ? "currentColor" : "none"}
                      />
                    </button>
                  </div>

                  <div className="p-6 text-center">
                    <h2
                      className={`text-2xl font-bold mb-3 ${
                        isDark ? "text-white" : "text-[#3c2415]"
                      }`}
                    >
                      {item.name}
                    </h2>
                    <p className="text-[#D6B56C] text-lg font-semibold">
                      Price : ₹{item.price}
                    </p>
                    <p
                      className={`mt-2 ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Serving : {item.quantity}
                    </p>
                    <p
                      className={`mt-3 font-bold text-lg ${
                        isDark ? "text-white" : "text-[#3c2415]"
                      }`}
                    >
                      Total : ₹{item.price * item.quantity}
                    </p>
                    <div
                      className={`w-16 h-1 rounded-full mx-auto my-5 ${
                        isDark ? "bg-[#D6B56C]" : "bg-[#8a4b12]"
                      }`}
                    ></div>
                    {isInCart ? (
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="w-full py-3 rounded-full bg-red-500 hover:bg-red-600 text-white font-semibold transition-all duration-300"
                      >
                        Remove From Cart
                      </button>
                    ) : (
                      <button
                        onClick={() => addToCart(item)}
                        className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                          isDark
                            ? "bg-[#E4C590] text-black hover:bg-white"
                            : "bg-[#8a4b12] text-white hover:bg-[#D6B56C] hover:text-black"
                        }`}
                      >
                        Add To Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      )}
    </div>
    
  </section>
);
}
export default Roti
