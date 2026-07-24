import { ShoppingCart, ArrowLeft } from "lucide-react";
import { useNavigate, useOutletContext } from "react-router-dom";

const EmptyCart = () => {
  const navigate = useNavigate();
  const { theme } = useOutletContext();
  const isDark = theme === "dark";

  return (
    <section
      className={`min-h-screen flex items-center justify-center
        cursor-pointer px-6 py-20 transition-all duration-500 ${
        isDark
          ? "bg-[#0f172a] text-white"
          : "bg-[#fdf8f0] text-[#3c2415]"
      }`}
    >
      <div
        className={`max-w-lg w-full rounded-3xl border shadow-2xl text-center p-10 transition-all duration-500 ${
          isDark
            ? "bg-[#171717] border-[#D6B56C]/30"
            : "bg-[#f4eadb] border-[#D6B56C]/40"
        }`}
      >
        <div
          className={`w-28 h-28 mx-auto rounded-full flex items-center justify-center mb-6 ${
            isDark ? "bg-[#D6B56C]/10" : "bg-[#D6B56C]/20"
          }`}
        >
          <ShoppingCart
            size={56}
            strokeWidth={1.8}
            className="text-[#D6B56C]"
          />
        </div>

        <h1
          className={`text-4xl font-bold mb-4 ${
            isDark ? "text-[#E4C590]" : "text-[#3c2415]"
          }`}
        >
          Your Cart is Empty
        </h1>

        <p
          className={`text-lg leading-8 mb-8 ${
            isDark ? "text-gray-300" : "text-[#7c4a12]"
          }`}
        >
          Your favorite dishes are waiting for you.
          <br />
          Browse our delicious menu and add items to your cart.
        </p>
        <button
          onClick={() => navigate("/home/menu")}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl bg-[#D6B56C] text-black hover:bg-[#c9a75a]"
        >
          <ArrowLeft size={18} />
          Browse Menu
        </button>
      </div>
    </section>
  );
};

export default EmptyCart;