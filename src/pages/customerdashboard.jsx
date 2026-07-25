
import { useState, useEffect } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import {
  ShoppingBag,
  CalendarDays,
  Heart,
  Award,
  ArrowRight,
  Pizza,
  Coffee,
  IceCream,
  Soup,
  Armchair,
  ChevronLeft,
  ChevronRight,
  Clock,
  Calendar,
  Users,
  RefreshCw,
} from "lucide-react";
import useWishlistStore from "../store/wishlist";
import useCartStore from "../store/cart";

const CustomerDashboard = () => {
  const { theme } = useOutletContext();
  const navigate = useNavigate();
  const isDark = theme === "dark";

  const user = JSON.parse(localStorage.getItem("customer"));
  const wishlistItems = useWishlistStore((state) => state.wishlistItems);
  const fetchWishlist = useWishlistStore((state) => state.fetchWishlist);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    fetchWishlist();
  }, []);
  const [bookingHistory, setBookingHistory] = useState([]);
  const [historyPage, setHistoryPage] = useState(1);
  const [historyPagination, setHistoryPagination] = useState({
    total: 0,
    page: 1,
    limit: 4,
    totalPages: 1,
  });
  const [loadingBookings, setLoadingBookings] = useState(false);
  const [foodOrders, setFoodOrders] = useState([]);
  const [orderPage, setOrderPage] = useState(1);
  const [orderPagination, setOrderPagination] = useState({
    total: 0,
    page: 1,
    limit: 4,
    totalPages: 1,
  });
  const [loadingOrders, setLoadingOrders] = useState(false);

  useEffect(() => {
    if (!user?._id) return;
    const fetchHistory = async () => {
      setLoadingBookings(true);
      try {
        const response = await fetch(
          `https://restraunt-app-backend.onrender.com/api/bookings/user/${user._id}?page=${historyPage}&limit=4`
        );
        const result = await response.json();
        if (response.ok && result.data) {
          setBookingHistory(result.data);
          if (result.pagination) {
            setHistoryPagination(result.pagination);
          }
        }
      } catch (err) {
        console.error("Error fetching bookings:", err);
      } finally {
        setLoadingBookings(false);
      }
    };
    fetchHistory();
  }, [user?._id, historyPage]);

  useEffect(() => {
    if (!user?._id) return;
    const fetchOrders = async () => {
      setLoadingOrders(true);
      try {
        const response = await fetch(
          `https://restraunt-app-backend.onrender.com/api/orders/user/${user._id}?page=${orderPage}&limit=4`
        );
        const result = await response.json();
        if (response.ok && result.data) {
          setFoodOrders(result.data);
          if (result.pagination) {
            setOrderPagination(result.pagination);
          }
        }
      } catch (err) {
        console.error("Error fetching orders:", err);
      } finally {
        setLoadingOrders(false);
      }
    };
    fetchOrders();
  }, [user?._id, orderPage]);

  const stats = [
    {
      title: "Orders",
      value: String(orderPagination.total || 0),
      icon: ShoppingBag,
      color: "bg-green-500",
    },
    {
      title: "Bookings",
      value: String(historyPagination.total || 0),
      icon: CalendarDays,
      color: "bg-blue-500",
    },
    {
      title: "Wishlist",
      value: String(wishlistItems.length || 0),
      icon: Heart,
      color: "bg-red-500",
    },
  ];
  const categories = [
    {
      title: "Pizza",
      icon: Pizza,
      image: "/appetizers/pizza.jpg",
      path: "/home/appetizers",
    },
    {
      title: "Coffee",
      icon: Coffee,
      image: "/coffee/coldcoffee.jpeg",
      path: "/home/coffee",
    },
    {
      title: "Desserts",
      icon: IceCream,
      image: "/menuitems/desserts.jpeg",
      path: "/home/desserts",
    },
    {
      title: "Soup",
      icon: Soup,
      image: "/menuitems/soup.jpeg",
      path: "/home/soup",
    },
  ];
  return (
    <section
      className={`min-h-screen transition-all duration-500 ${
        isDark
          ? "bg-[#0f172a] text-white"
          : "bg-[#fdf8f0] text-[#3c2415]"
      }`}
    >
      <section
        className="relative h-[520px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: "url('/picture1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-2xl">
            <p className="uppercase tracking-[6px] text-[#D6B56C] font-semibold">
              Welcome Back
            </p>
            <h1 className="mt-5 text-5xl md:text-6xl font-bold leading-tight text-white">
              Hello Customer 👋
            </h1>
            <p className="mt-8 text-lg text-gray-200 leading-9">
              Enjoy premium dining experiences, discover delicious meals,
              reserve your favorite table, and earn exciting rewards every
              time you order.
            </p>
            <div className="flex flex-wrap gap-5 mt-12">
              <button
                onClick={() => navigate("/home/menu")}
                className="px-8 py-4 rounded-full font-semibold bg-[#D6B56C]
                text-black hover:scale-105 transition-all duration-300
                shadow-xl hover:shadow-yellow-400/40"
              >
                Order Food
              </button>
              <button
                onClick={() => navigate("/home/booking")}
                className="px-8 py-4 rounded-full border-2 border-white
                text-white hover:bg-white hover:text-black
                transition-all duration-300"
              >
                Book Table
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 lg:px-10 -mt-20
       relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 
        gap-8">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`rounded-3xl p-7 transition-all duration-300
                hover:-translate-y-3 hover:shadow-2xl border ${
                  isDark
                    ? "bg-[#171717] border-gray-700"
                    : "bg-white border-orange-100"
                }`}
              >
                <div
                  className={`${item.color}
                  w-16 h-16 rounded-2xl
                  flex items-center justify-center text-white`}
                >
                  <Icon size={30} />
                </div>
                <h2 className="mt-6 text-4xl font-bold">
                  {item.value}
                </h2>
                <p
                  className={`mt-2 ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="text-center">
          <p className="uppercase tracking-[5px] text-[#D6B56C] font-semibold">
            Categories
          </p>
          <h2 className="text-5xl font-bold mt-4">
            Explore Our Menu
          </h2>
          <p
            className={`mt-5 max-w-2xl mx-auto ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Discover a wide range of delicious dishes carefully prepared
            by our expert chefs.
          </p>
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => navigate("/home/menu")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D6B56C] px-6 py-3 text-sm font-semibold text-black shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-yellow-400/30 sm:px-8 sm:py-4 sm:text-base"
            >
              Explore Menu
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">
          {categories.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                onClick={() => navigate(item.path)}
                className={`group overflow-hidden rounded-3xl cursor-pointer
                transition-all duration-500 hover:-translate-y-3
                hover:shadow-2xl border ${
                  isDark
                    ? "bg-[#171717] border-gray-700"
                    : "bg-white border-orange-100"
                }`}
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-56 w-full object-cover
                    group-hover:scale-110 transition-all duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Icon
                        size={34}
                        className="text-[#D6B56C]"
                      />
                      <h3 className="mt-5 text-2xl font-bold">
                        {item.title}
                      </h3>
                    </div>
                    <ArrowRight
                      className="group-hover:translate-x-2
                      transition-all text-[#D6B56C]"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b pb-4 border-gray-700/30">
          <div>
            <p className="uppercase tracking-[4px] text-[#D6B56C] font-semibold text-xs">
              Orders History
            </p>
            <h2 className="text-3xl font-bold mt-1">Recent Food Orders</h2>
          </div>
          <button
            onClick={() => navigate("/home/cartsummary")}
            className="px-6 py-2.5 rounded-full bg-[#D6B56C] text-black font-semibold hover:scale-105 transition text-sm shadow-md"
          >
            View Cart 
          </button>
        </div>
        {loadingOrders ? (
          <div className="py-12 text-center text-sm text-gray-400 flex items-center justify-center gap-2">
            <RefreshCw className="w-5 h-5 animate-spin text-[#D6B56C]" />
            Loading food orders...
          </div>
        ) : foodOrders.length === 0 ? (
          <div className={`p-8 rounded-3xl text-center border text-sm ${isDark ? "bg-[#171717] border-gray-800 text-gray-400" : "bg-white border-amber-100 text-gray-500"}`}>
            No food orders placed yet. Explore our menu and place your first order!
          </div>
        ) : (
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {foodOrders.map((order) => (
                <div
                  key={order._id}
                  className={`p-6 rounded-3xl border flex flex-col justify-between gap-4 transition ${
                    isDark
                      ? "bg-[#171717] border-gray-800 hover:border-[#D6B56C]/40"
                      : "bg-white border-amber-100 shadow-sm hover:border-amber-400"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-[#D6B56C] text-sm">
                      Order #{order._id?.slice(-6).toUpperCase()}
                    </span>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-green-500/20 text-green-500 border border-green-500/30">
                      {order.status}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-400">
                    {order.items?.map((item, idx) => (
                      <span key={idx} className="bg-white/5 px-2.5 py-1 rounded-lg border border-gray-700/50 text-gray-300 font-medium">
                        {item.name} × {item.quantity}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-700/20 text-xs">
                    <span className="text-gray-400">
                      {order.createdAt ? new Date(order.createdAt).toLocaleDateString() : "N/A"}
                    </span>
                    <span className="text-lg font-extrabold text-[#D6B56C]">
                      ₹{order.totalAmount}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            {orderPagination.totalPages > 1 && (
              <div className="flex items-center justify-between pt-4 text-xs">
                <button
                  disabled={!orderPagination.hasPrevPage || loadingOrders}
                  onClick={() => setOrderPage((prev) => Math.max(prev - 1, 1))}
                  className="px-4 py-2 rounded-xl bg-[#D6B56C]/20 text-[#D6B56C] border border-[#D6B56C]/40 hover:bg-[#D6B56C]/30 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 font-bold transition"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </button>
                <span className="font-semibold text-gray-400">
                  Page <strong className="text-[#D6B56C]">{orderPagination.page}</strong> of{" "}
                  <strong>{orderPagination.totalPages}</strong>
                </span>
                <button
                  disabled={!orderPagination.hasNextPage || loadingOrders}
                  onClick={() => setOrderPage((prev) => prev + 1)}
                  className="px-4 py-2 rounded-xl bg-[#D6B56C]/20 text-[#D6B56C] border border-[#D6B56C]/40 hover:bg-[#D6B56C]/30 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 font-bold transition"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}
      </section>
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
        <div
          className={`grid lg:grid-cols-2 gap-8 rounded-[35px] overflow-hidden border ${
            isDark
              ? "bg-[#171717] border-gray-700"
              : "bg-white border-orange-100"
          }`}
        >
          <div className="p-10 flex flex-col justify-center">
            <p className="uppercase tracking-[5px] text-[#D6B56C] font-semibold">
              Reserve Table
            </p>
            <h2 className="text-5xl font-bold mt-5">
              Book Your Dining Experience
            </h2>
            <p
              className={`mt-6 leading-9 ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Reserve your table in advance and enjoy a premium dining
              experience with family and friends.
            </p>
            <button
              onClick={() => navigate("/home/booking")}
              className="mt-10 w-fit px-8 py-4 rounded-full bg-[#D6B56C]
              text-black font-semibold hover:scale-105 transition"
            >
              Book Table
            </button>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
        <div
          className={`p-8 sm:p-10 rounded-[35px] border ${
            isDark ? "bg-[#171717] border-gray-700" : "bg-white border-orange-100"
          }`}
        >
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b pb-4 border-gray-700/30">
            <div>
              <p className="uppercase tracking-[4px] text-[#D6B56C] font-semibold text-xs">
                History & Status
              </p>
              <h2 className="text-3xl font-bold mt-1">My Table Bookings</h2>
            </div>
            <button
              onClick={() => navigate("/home/booking")}
              className="px-6 py-2.5 rounded-full bg-[#D6B56C] text-black font-semibold hover:scale-105 transition text-sm shadow-md"
            >
              + Book New Table
            </button>
          </div>
          {loadingBookings ? (
            <div className="py-12 text-center text-sm text-gray-400 flex items-center justify-center gap-2">
              <RefreshCw className="w-5 h-5 animate-spin text-[#D6B56C]" />
              Loading bookings...
            </div>
          ) : bookingHistory.length === 0 ? (
            <div className={`py-12 text-center rounded-2xl border border-dashed text-sm ${isDark ? "border-gray-800 text-gray-400 bg-white/5" : "border-gray-300 text-gray-500 bg-amber-50/20"}`}>
              You don't have any table reservations yet.
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                {bookingHistory.map((item) => (
                  <div
                    key={item._id}
                    className={`p-5 rounded-2xl border flex items-center justify-between gap-4 transition duration-300 ${
                      isDark
                        ? "bg-[#1f1f1f] border-gray-800 hover:border-[#D6B56C]/40"
                        : "bg-amber-50/40 border-amber-200 hover:border-amber-400 shadow-xs"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#D6B56C]/20 text-[#D6B56C] flex items-center justify-center border border-[#D6B56C]/30 flex-shrink-0">
                        <Armchair className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-base text-[#D6B56C]">
                            Table #{item.tableNumber || "N/A"}
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-green-500/20 text-green-500 border border-green-500/30">
                            Confirmed
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-400 mt-1">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-[#D6B56C]" />
                            {item.bookingDate}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-[#D6B56C]" />
                            {item.bookingTime}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-3.5 h-3.5 text-[#D6B56C]" />
                            {item.numberOfGuests} Guests
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {historyPagination.totalPages > 1 && (
                <div className="flex items-center justify-between pt-6 border-t border-gray-700/30 text-xs">
                  <button
                    disabled={!historyPagination.hasPrevPage || loadingBookings}
                    onClick={() => setHistoryPage((prev) => Math.max(prev - 1, 1))}
                    className="px-4 py-2 rounded-xl bg-[#D6B56C]/20 text-[#D6B56C] border border-[#D6B56C]/40 hover:bg-[#D6B56C]/30 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 font-bold transition"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </button>
                  <span className="font-semibold text-gray-400">
                    Page <strong className="text-[#D6B56C]">{historyPagination.page}</strong> of{" "}
                    <strong>{historyPagination.totalPages}</strong>
                  </span>
                  <button
                    disabled={!historyPagination.hasNextPage || loadingBookings}
                    onClick={() => setHistoryPage((prev) => prev + 1)}
                    className="px-4 py-2 rounded-xl bg-[#D6B56C]/20 text-[#D6B56C] border border-[#D6B56C]/40 hover:bg-[#D6B56C]/30 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 font-bold transition"
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
      <section className={`py-24 ${isDark ? "bg-[#171717]" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="uppercase tracking-[5px] text-[#D6B56C] font-semibold text-xs">
                Wishlist
              </p>
              <h2 className="text-4xl font-bold mt-2">
                Your Favourite Foods ({wishlistItems.length})
              </h2>
            </div>
            <button
              onClick={() => navigate("/home/wishlist")}
              className="px-6 py-2.5 rounded-full bg-[#D6B56C] text-black font-semibold hover:scale-105 transition text-sm shadow-md"
            >
              View Full Wishlist →
            </button>
          </div>
          {wishlistItems.length === 0 ? (
            <div className={`mt-12 p-10 rounded-3xl text-center border text-sm ${isDark ? "bg-[#0f172a] border-gray-800 text-gray-400" : "bg-[#fdf8f0] border-amber-100 text-gray-500"}`}>
              No favourite dishes added yet. Browse our menu and click ❤️ to add items to your wishlist!
            </div>
          ) : (
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-12">
              {wishlistItems.slice(0, 4).map((item) => (
                <div
                  key={item.id}
                  className={`rounded-3xl border p-6 text-center transition-all duration-300 hover:-translate-y-2 shadow-sm flex flex-col justify-between ${
                    isDark
                      ? "bg-[#0f172a] border-gray-700 text-white"
                      : "bg-[#fdf8f0] border-orange-100 text-black"
                  }`}
                >
                  <div>
                    <img
                      src={item.image || "/picture1.jpg"}
                      alt={item.name}
                      className="w-full h-36 object-cover rounded-2xl mb-4"
                    />
                    <Heart
                      className="mx-auto text-red-500 mb-2 fill-red-500"
                      size={28}
                    />
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p className="text-sm font-semibold text-[#D6B56C] mt-1">
                      ₹{item.price}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      addToCart(item);
                      alert(`Added ${item.name} to cart!`);
                    }}
                    className="mt-6 w-full py-2.5 rounded-xl bg-[#D6B56C] text-black font-bold text-xs hover:bg-[#c5a45b] transition shadow-md"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      
    </section>
  );
};
export default CustomerDashboard;