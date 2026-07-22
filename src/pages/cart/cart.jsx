import { Trash2, Plus, Minus } from "lucide-react";
import useCartStore from "../../store/cart";
import { useState } from "react";

const Cart = ({ theme }) => {
  const [showPopup, setShowPopup] = useState(false);

  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const cartItems = useCartStore((state) => state.cartItems);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const isDark = theme === "dark";

  return (
    <section
      className={`min-h-screen cursor-pointer py-28 px-6 transition-all ${
        isDark ? "bg-[#0f172a] text-white" : "bg-[#fdf8f0] text-[#3c2415]"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10">Your Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className={`flex items-center justify-between rounded-2xl p-5 ${
                  isDark ? "bg-[#171717]" : "bg-[#f4eadb]"
                }`}
              >
                <div className="flex items-center gap-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-28 h-28 rounded-xl object-cover"
                  />

                  <div>
                    <h2 className="text-xl font-semibold">{item.name}</h2>

                    <p
                      className={`mt-2 ${
                        isDark ? "text-gray-300" : "text-[#7c4a12]"
                      }`}
                    >
                      ₹{item.price}
                    </p>

                    <div className="flex items-center gap-3 mt-4">
                      <div className="flex items-center gap-3 mt-4">
                        <button
                          type="button"
                          onClick={() => decreaseQuantity(item.id)}
                          className="w-8 h-8 rounded-full bg-red-500 hover:bg-red-600
               text-white flex items-center justify-center transition"
                        >
                          <Minus size={16} />
                        </button>

                        <span className="text-lg font-semibold min-w-[20px] text-center">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() => increaseQuantity(item.id)}
                          className="w-8 h-8 rounded-full bg-green-500 hover:bg-green-600
               text-white flex items-center justify-center transition"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  <Trash2 />
                </button>
              </div>
            ))}
          </div>

          <div
            className={`rounded-2xl p-6 h-fit ${
              isDark ? "bg-[#171717]" : "bg-[#f4eadb]"
            }`}
          >
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

            <div className="flex justify-between mb-4">
              <span>Total Items</span>
              <span>{cartItems.length}</span>
            </div>

            <div className="flex justify-between text-xl font-bold  pt-4">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <button
              onClick={() => setShowPopup(true)}
              className="w-full mt-8 py-3 rounded-full font-semibold text-white hover:opacity-90 transition"
              style={{ backgroundColor: "#D6B56C" }}
            >
              Confirm Order
            </button>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div
            className={`w-[90%] max-w-md rounded-2xl p-8 shadow-xl ${
              isDark ? "bg-[#171717] text-white" : "bg-white text-black"
            }`}
          >
            <div className="text-center">
              <div className="text-6xl mb-4">🍽️</div>

              <h2 className="text-3xl font-bold mb-3">Confirm Your Order</h2>

              <p
                className={`mb-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}
              >
                Are you sure you want to place this order?
              </p>

              <div className="flex gap-4">
                <button
                  onClick={() => setShowPopup(false)}
                  className="flex-1 py-3 rounded-xl bg-gray-500 text-white hover:bg-gray-600"
                >
                  Cancel
                </button>

                <button
                  onClick={() => {
                    alert("🎉 Order Confirmed!");
                    setShowPopup(false);
                  }}
                  className="flex-1 py-3 rounded-xl bg-green-600 text-white hover:bg-green-700"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
