import {
  ShieldCheck,
  User,
  X,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Usertype = ({ onClose }) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    onClose?.();
    navigate(path);
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-md p-3 sm:p-5 overflow-y-auto">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('/picture1.jpg')",
        }}
      />

      {/* Modal */}
      <div className="relative w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-[0_30px_80px_rgba(0,0,0,.45)] animate-[popup_.5s_ease]">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 sm:right-5 sm:top-5 z-50 rounded-full bg-white p-2 shadow-lg transition-all duration-300 hover:bg-red-500 hover:text-white hover:rotate-90"
        >
          <X size={20} />
        </button>

        <div className="grid lg:grid-cols-2">

          {/* Left Section */}
          <div
            className="hidden lg:flex relative flex-col justify-center p-12 text-white"
            style={{
              background:
                "linear-gradient(rgba(15,23,42,.80),rgba(15,23,42,.85)),url('/restaurant-bg.jpg') center/cover",
            }}
          >
            <Sparkles
              size={55}
              className="mb-6 text-yellow-400 animate-pulse"
            />

            <h1 className="text-5xl font-extrabold leading-tight">
              Welcome to
            </h1>

            <h2 className="mt-3 text-4xl font-bold text-[#E4C590]">
              The Seasons Restaurant
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-200">
              Experience luxury dining, reserve your favourite table,
              discover delicious dishes and manage your restaurant with
              one beautiful platform.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <div className="rounded-xl bg-white/10 px-5 py-3 backdrop-blur-lg">
                🍴 Premium Food
              </div>

              <div className="rounded-xl bg-white/10 px-5 py-3 backdrop-blur-lg">
                ⭐ 5 Star Service
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-center bg-white p-6 sm:p-8 lg:p-10">

            <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-800">
              Choose Your Role
            </h2>

            <p className="mt-3 sm:mt-4 text-center text-sm sm:text-base text-gray-500">
              Select how you want to continue.
            </p>

            {/* Admin Card */}
            <button
              onClick={() => handleNavigate("/login")}
              className="group mt-8 sm:mt-10 rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-50 to-blue-100 p-5 sm:p-6 lg:p-7 text-left shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-300/40"
            >
              <div className="flex items-center justify-between gap-4">

                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-blue-600 p-3 sm:p-4 text-white transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                    <ShieldCheck className="h-7 w-7 sm:h-8 sm:w-8" />
                  </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-blue-700">
                      Admin Panel
                    </h2>

                    <p className="mt-1 text-sm sm:text-base text-gray-600">
                      Manage bookings, menu, categories,
                      customers and orders.
                    </p>
                  </div>
                </div>

                <ArrowRight className="hidden sm:block text-blue-700 transition-all duration-300 group-hover:translate-x-3" />
              </div>
            </button>

            {/* Customer Card */}
            <button
              onClick={() => handleNavigate("/registercustomer")}
              className="group mt-6 rounded-3xl border border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50 p-5 sm:p-6 lg:p-7 text-left shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-300/40"
            >
              <div className="flex items-center justify-between gap-4">

                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-orange-500 p-3 sm:p-4 text-white transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                    <User className="h-7 w-7 sm:h-8 sm:w-8" />
                  </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-orange-600">
                      Continue as Customer
                    </h2>

                    <p className="mt-1 text-sm sm:text-base text-gray-600">
                      Explore our delicious menu,
                      reserve tables and order food.
                    </p>
                  </div>
                </div>

                <ArrowRight className="hidden sm:block text-orange-600 transition-all duration-300 group-hover:translate-x-3" />
              </div>
            </button>

            {/* Mobile Welcome Section */}
            <div className="lg:hidden mt-8 rounded-2xl bg-slate-900 p-6 text-white">
              <Sparkles className="mb-4 text-yellow-400" />

              <h2 className="text-2xl font-bold">
                Welcome to
              </h2>

              <h3 className="mt-1 text-xl font-bold text-[#E4C590]">
                The Seasons Restaurant
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-300">
                Enjoy premium dining, reserve your favourite table,
                discover delicious dishes and experience our luxury
                restaurant services.
              </p>
            </div>

            <div className="mt-8 text-center text-sm sm:text-base text-gray-400">
              Enjoy an unforgettable dining experience ❤️
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Usertype;