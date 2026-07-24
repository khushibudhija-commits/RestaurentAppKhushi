import { Trash2, Plus, Minus, ShoppingBag, CheckCircle2, Clock, Package, ChevronLeft, ChevronRight, RefreshCw, Sparkles } from "lucide-react";
import useCartStore from "../../store/cart";
import { useState, useEffect } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";

const Cart = ({ theme }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [placedOrder, setPlacedOrder] = useState(null);

  // Paginated Order History State
  const [orderHistory, setOrderHistory] = useState([]);
  const [historyPage, setHistoryPage] = useState(1);
  const [historyPagination, setHistoryPagination] = useState({
    total: 0,
    page: 1,
    limit: 4,
    totalPages: 1,
  });
  const [loadingHistory, setLoadingHistory] = useState(false);

  const navigate = useNavigate();
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const cartItems = useCartStore((state) => state.cartItems);

  const user = JSON.parse(localStorage.getItem("customer"));

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const outlet = useOutletContext && useOutletContext();
  const activeTheme = theme ?? outlet?.theme;
  const isDark = activeTheme === "dark";

  // Fetch paginated user order history
  const fetchOrderHistory = async (page = 1) => {
    if (!user?._id) return;
    setLoadingHistory(true);
    try {
      const response = await fetch(
        `https://restaurent-app-backend.onrender.com/api/orders/user/${user._id}?page=${page}&limit=4`
      );
      const result = await response.json();
      if (response.ok && result.data) {
        setOrderHistory(result.data);
        if (result.pagination) {
          setHistoryPagination(result.pagination);
        }
      }
    } catch (err) {
      console.error("Error fetching order history:", err);
    } finally {
      setLoadingHistory(false);
    }
  };

  useEffect(() => {
    fetchOrderHistory(historyPage);
  }, [user?._id, historyPage]);

  const handlePlaceOrder = async () => {
    if (!user?._id) {
      alert("Please log in as a customer to place an order!");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    setSubmitting(true);
    try {
      const formattedItems = cartItems.map((item) => ({
        id: String(item.id),
        name: item.name,
        price: Number(item.price),
        quantity: Number(item.quantity),
        image: item.image || "/picture1.jpg",
      }));

      const response = await fetch("https://restaurent-app-backend.onrender.com/api/orders/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user._id,
          items: formattedItems,
          totalAmount: total,
          paymentMethod: "Cash on Delivery",
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.message || "Failed to place order");
        setSubmitting(false);
        return;
      }

      setPlacedOrder(result.data);
      clearCart();
      setShowPopup(false);
      fetchOrderHistory(1);
      setHistoryPage(1);
    } catch (err) {
      alert(err.message || "Server Error while placing order");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      className={`min-h-screen py-24 px-4 sm:px-6 transition-all ${
        isDark ? "bg-[#0f172a] text-white" : "bg-[#fdf8f0] text-[#3c2415]"
      }`}
    >
      {/* Success Order Modal */}
      {placedOrder && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div
            className={`w-full max-w-md rounded-3xl p-8 shadow-2xl text-center border animate-in zoom-in-95 duration-300 ${
              isDark
                ? "bg-[#171717] border-[#D6B56C] text-white"
                : "bg-white border-yellow-400 text-gray-900"
            }`}
          >
            <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-green-500">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <h2 className="text-3xl font-bold font-serif mb-2 text-[#D6B56C]">
              Order Placed!
            </h2>

            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-4">
              Status: <span className="text-green-500">{placedOrder.status}</span>
            </p>

            <div className={`space-y-2 text-left text-sm mb-6 p-4 rounded-xl ${isDark ? "bg-white/5" : "bg-gray-100"}`}>
              <div className="flex justify-between">
                <span className="text-gray-400">Items Count:</span>
                <span className="font-semibold">{placedOrder.items?.length || 0} items</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Total Paid:</span>
                <span className="font-bold text-[#D6B56C]">₹{placedOrder.totalAmount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Payment:</span>
                <span className="font-semibold">{placedOrder.paymentMethod}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setPlacedOrder(null)}
                className="flex-1 py-3 rounded-xl bg-[#D6B56C] text-black font-bold hover:bg-[#c4a359] transition shadow-lg"
              >
                Continue Shopping
              </button>
              <button
                onClick={() => navigate("/home/customerdashboard")}
                className="px-5 py-3 rounded-xl bg-gray-700 text-white font-semibold hover:bg-gray-600 transition"
              >
                Dashboard
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div
            className={`w-[90%] max-w-md rounded-3xl p-8 shadow-2xl text-center ${
              isDark ? "bg-[#171717] text-white border border-gray-700" : "bg-white text-black"
            }`}
          >
            <div className="w-16 h-16 bg-[#D6B56C]/20 text-[#D6B56C] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#D6B56C]/40">
              <Sparkles className="w-8 h-8" />
            </div>

            <h2 className="text-2xl font-bold mb-2">Confirm Your Order</h2>

            <p className={`text-sm mb-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              Are you sure you want to place this order with <strong>Cash on Delivery</strong>?
            </p>

            <div className={`p-4 rounded-xl mb-6 text-left space-y-2 ${isDark ? "bg-white/5 border border-gray-800" : "bg-amber-50 border border-amber-200"}`}>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Total Items:</span>
                <span className="font-semibold">{cartItems.length}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Total Amount:</span>
                <span className="font-extrabold text-[#D6B56C] text-base">₹{total}</span>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                disabled={submitting}
                onClick={() => setShowPopup(false)}
                className="flex-1 py-3 rounded-xl bg-gray-500 text-white font-semibold hover:bg-gray-600 transition"
              >
                Cancel
              </button>

              <button
                disabled={submitting}
                onClick={handlePlaceOrder}
                className="flex-1 py-3 rounded-xl bg-green-600 text-white font-bold hover:bg-green-700 transition disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {submitting ? "Placing..." : "Confirm & Place"}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 flex items-center gap-3">
          <ShoppingBag className="text-[#D6B56C] w-9 h-9" />
          Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className={`p-10 rounded-3xl text-center border ${isDark ? "bg-[#171717] border-gray-800 text-gray-300" : "bg-white border-amber-100 text-gray-700 shadow-md"}`}>
            <Package className="w-16 h-16 text-[#D6B56C] mx-auto mb-4 opacity-70" />
            <h2 className="text-2xl font-bold mb-2">Your Cart is Currently Empty</h2>
            <p className="text-sm text-gray-400 mb-6">Explore our delicious menu items and add them to your cart!</p>
            <button
              onClick={() => navigate("/home/menu")}
              className="px-8 py-3.5 rounded-full bg-[#D6B56C] text-black font-bold hover:scale-105 transition shadow-lg"
            >
              Browse Menu
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className={`flex items-center justify-between rounded-2xl p-5 border transition ${
                    isDark ? "bg-[#171717] border-gray-800" : "bg-white border-amber-100 shadow-sm"
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <img
                      src={item.image || "/picture1.jpg"}
                      alt={item.name}
                      className="w-24 h-24 rounded-xl object-cover"
                    />

                    <div>
                      <h2 className="text-lg font-bold">{item.name}</h2>

                      <p className={`mt-1 font-semibold ${isDark ? "text-[#D6B56C]" : "text-[#7c4a12]"}`}>
                        ₹{item.price}
                      </p>
                      
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          type="button"
                          onClick={() => decreaseQuantity(item.id)}
                          className="w-7 h-7 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center transition"
                        >
                          <Minus size={14} />
                        </button>

                        <span className="text-base font-bold min-w-[20px] text-center">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() => increaseQuantity(item.id)}
                          className="w-7 h-7 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center transition"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="font-extrabold text-base block text-[#D6B56C] mb-2">
                      ₹{item.price * item.quantity}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-600 p-2 rounded-lg hover:bg-red-500/10 transition"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div
              className={`rounded-3xl p-6 h-fit border shadow-xl ${
                isDark ? "bg-[#171717] border-gray-800" : "bg-white border-amber-100"
              }`}
            >
              <h2 className="text-2xl font-bold mb-6 border-b pb-3 border-gray-700/30">Order Summary</h2>

              <div className="mb-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Items</span>
                  <span className="font-semibold">{cartItems.length}</span>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-700/20">
                  <h3 className="font-semibold mb-2 text-xs uppercase tracking-wider text-[#D6B56C]">Items Breakdown</h3>

                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between text-xs py-1"
                    >
                      <span className="truncate max-w-[160px]">{item.name}</span>
                      <span>
                        ₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between text-xl font-bold pt-4 border-t border-gray-700/30 mt-4">
                <span>Total Amount</span>
                <span className="text-[#D6B56C]">₹{total}</span>
              </div>

              <button
                onClick={() => setShowPopup(true)}
                className="w-full mt-6 py-4 rounded-full font-bold text-black hover:opacity-90 transition shadow-xl text-base"
                style={{ backgroundColor: "#D6B56C" }}
              >
                Confirm & Place Order
              </button>
            </div>
          </div>
        )}

        {/* User Order History Section with Pagination */}
        {user?._id && (
          <div
            className={`mt-16 rounded-3xl p-6 sm:p-10 border shadow-2xl transition-all ${
              isDark ? "bg-[#171717] border-gray-800 text-white" : "bg-white border-amber-100 text-black"
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b pb-4 border-gray-700/40">
              <div>
                <div className="flex items-center gap-2">
                  <Package className="w-6 h-6 text-[#D6B56C]" />
                  <h2 className="text-2xl font-bold font-serif text-[#D6B56C]">
                    My Order History
                  </h2>
                </div>
                <p className={`text-xs mt-1 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                  View past orders and live delivery status with real-time pagination.
                </p>
              </div>

              <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#D6B56C]/20 text-[#D6B56C] border border-[#D6B56C]/40">
                Total Orders: {historyPagination.total}
              </span>
            </div>

            {loadingHistory ? (
              <div className="py-12 text-center text-sm text-gray-400 flex items-center justify-center gap-2">
                <RefreshCw className="w-5 h-5 animate-spin text-[#D6B56C]" />
                Loading order history...
              </div>
            ) : orderHistory.length === 0 ? (
              <div className={`py-12 text-center text-sm rounded-2xl border border-dashed ${isDark ? "border-gray-800 text-gray-400 bg-white/5" : "border-gray-300 text-gray-500 bg-amber-50/20"}`}>
                No order history found yet. Place your first order above!
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid gap-4">
                  {orderHistory.map((order) => (
                    <div
                      key={order._id}
                      className={`p-5 rounded-2xl border flex flex-col md:flex-row md:items-center justify-between gap-4 transition duration-200 ${
                        isDark
                          ? "bg-[#141414] border-gray-800 hover:border-[#D6B56C]/50"
                          : "bg-amber-50/40 border-amber-200 hover:border-amber-400 shadow-xs"
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-extrabold text-base text-[#D6B56C]">
                            Order #{order._id?.slice(-6).toUpperCase()}
                          </span>
                          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-500 border border-blue-500/30">
                            {order.status}
                          </span>
                          <span className="text-xs text-gray-400">
                            ({order.paymentMethod})
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-3 text-xs text-gray-300 mb-2">
                          {order.items?.map((item, idx) => (
                            <span key={idx} className="bg-white/5 px-2.5 py-1 rounded-lg border border-gray-700/50">
                              {item.name} × {item.quantity}
                            </span>
                          ))}
                        </div>

                        <div className="text-xs text-gray-400">
                          Date: {order.createdAt ? new Date(order.createdAt).toLocaleString() : "N/A"}
                        </div>
                      </div>

                      <div className="text-left md:text-right">
                        <div className="text-xs text-gray-400">Total Amount</div>
                        <div className="text-xl font-extrabold text-[#D6B56C]">
                          ₹{order.totalAmount}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination Controls */}
                {historyPagination.totalPages > 1 && (
                  <div className="flex items-center justify-between pt-6 border-t border-gray-700/40 text-xs">
                    <button
                      disabled={!historyPagination.hasPrevPage || loadingHistory}
                      onClick={() => setHistoryPage((prev) => Math.max(prev - 1, 1))}
                      className="px-4 py-2.5 rounded-xl bg-[#D6B56C]/20 text-[#D6B56C] border border-[#D6B56C]/40 hover:bg-[#D6B56C]/30 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 font-bold transition"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Previous
                    </button>

                    <span className="font-semibold text-gray-400">
                      Page <strong className="text-[#D6B56C]">{historyPagination.page}</strong> of{" "}
                      <strong>{historyPagination.totalPages}</strong>
                    </span>

                    <button
                      disabled={!historyPagination.hasNextPage || loadingHistory}
                      onClick={() => setHistoryPage((prev) => prev + 1)}
                      className="px-4 py-2.5 rounded-xl bg-[#D6B56C]/20 text-[#D6B56C] border border-[#D6B56C]/40 hover:bg-[#D6B56C]/30 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 font-bold transition"
                    >
                      Next
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
