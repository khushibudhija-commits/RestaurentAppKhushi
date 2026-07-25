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
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('/picture1.jpg')",
        }}
      />

      <div className="relative w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/40 bg-white shadow-[0_30px_90px_rgba(0,0,0,.45)] animate-[popup_.5s_ease]">
       
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div
            className="hidden lg:flex relative flex-col justify-center p-12 text-white"
            style={{
              background:
                "linear-gradient(rgba(15,23,42,.80),rgba(15,23,42,.85)),url('/restaurant-bg.jpg') center/cover",
            }}
          >
            <Sparkles size={55} className="mb-6 text-yellow-400 animate-pulse" />

            <h1 className="text-5xl font-extrabold leading-tight">Welcome to</h1>

            <h2 className="mt-3 text-4xl font-bold text-[#E4C590]">
              The Seasons Restaurant
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-200">
              Experience luxury dining, reserve your favourite table,
              discover delicious dishes and enjoy a seamless restaurant
              experience in one beautiful place.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <div className="rounded-2xl border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-lg">
                🍴 Premium Food
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-lg">
                ⭐ 5 Star Service
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center bg-gradient-to-br from-[#fffaf3] via-white to-[#fff3e8] p-6 sm:p-8 lg:p-10">
            <div className="mx-auto w-full max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm font-semibold text-orange-700">
                <Sparkles size={16} className="text-amber-500" />
                Choose your experience
              </div>

              <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
                Welcome back, let’s begin
              </h2>

              <p className="mt-3 text-base leading-7 text-slate-600">
                Select the option that fits your visit and step into a smooth,
                elegant dining experience.
              </p>

              <button
                onClick={() => handleNavigate("/registercustomer")}
                className="group mt-8 w-full rounded-[1.5rem] border border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50 p-5 text-left shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-300/40 sm:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-orange-500 p-3
                     text-white shadow-lg transition-all duration-300 
                     group-hover:scale-110">
                      <User className="h-7 w-7 sm:h-8 sm:w-8" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-orange-600 sm:text-2xl">
                          Continue as Customer
                        </h3>
                        <span className="rounded-full bg-orange-100 px-2.5 py-1 text-[11px] font-semibold text-orange-700">
                          Popular
                        </span>
                      </div>

                      <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
                        Explore our delicious menu, book a table and enjoy a
                        seamless dining journey.
                      </p>

                      
                    </div>
                  </div>

                  <ArrowRight className="hidden text-orange-600 transition-all duration-300 group-hover:translate-x-3 sm:block" />
                </div>
              </button>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <Sparkles size={16} className="text-amber-500" />
                  Why guests love The Seasons
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                    Fresh ingredients
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                    Cozy ambience
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                    Fast service
                  </span>
                </div>
              </div>

              <div className="lg:hidden mt-8 rounded-2xl bg-slate-900 p-6 text-white">
                <Sparkles className="mb-4 text-yellow-400" />
                <h2 className="text-2xl font-bold">Welcome to</h2>
                <h3 className="mt-1 text-xl font-bold text-[#E4C590]">
                  The Seasons Restaurant
                </h3>
                <p className="mt-4 text-sm leading-7 text-gray-300">
                  Enjoy premium dining, reserve your favourite table and discover
                  delicious dishes in a luxurious setting.
                </p>
              </div>

              <div className="mt-8 text-center text-sm text-gray-500 sm:text-base">
                Enjoy an unforgettable dining experience ❤️
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usertype;