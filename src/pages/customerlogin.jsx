
import { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  LogIn,
  UserPlus,
} from "lucide-react";
import { Outlet, useNavigate } from "react-router-dom";
import useAuthStore from "../store/customerlogin";

const CustomerLogin = ({ theme = "light" }) => {
  const navigate = useNavigate();

  const isDark = theme === "dark";

  const customerlogin = useAuthStore(
    (state) => state.customerlogin
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "https://restaurent-app-backend.onrender.com/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        setError(result.message || "Invalid email or password");
        return;
      }

      localStorage.setItem(
        "customerToken",
        result.token
      );

      localStorage.setItem(
        "customer",
        JSON.stringify(result.data)
      );

      customerlogin(result.data);

      navigate("/home");
      
      // alert("Login Successful 🎉");
    } catch (err) {
      setError("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center px-6 py-8"
      style={{
        backgroundImage: "url('/logo-dark.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" />

      <div
        className={`relative z-10 w-full max-w-md rounded-[32px] overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,.45)] backdrop-blur-xl transition-all duration-500 ${
          isDark
            ? "bg-[#171717]/95 border border-gray-700"
            : "bg-white/90 border border-white/30"
        }`}
      >
        <div className="h-2 w-full bg-gradient-to-r from-[#D6B56C] via-[#F5D98B] to-[#D6B56C]" />

        <div className="px-8 py-8">

          <div className="flex justify-center">
            <img
              src={isDark ? "/logo-dark.png" : "/logo.png"}
              alt="logo"
              className="w-24 object-contain drop-shadow-xl"
            />
          </div>

          <div className="flex justify-center mt-4">
            <div className="w-20 h-20 rounded-full bg-[#D6B56C] flex items-center justify-center shadow-xl">
              <LogIn
                size={36}
                className="text-black"
              />
            </div>
          </div>


          <h1
            className={`mt-6 text-center text-4xl font-bold ${
              isDark
                ? "text-[#D6B56C]"
                : "text-[#3c2415]"
            }`}
          >
            Welcome Back 👋
          </h1>

          <p
            className={`mt-3 mb-8 text-center ${
              isDark
                ? "text-gray-400"
                : "text-gray-600"
            }`}
          >
            Login to continue your premium dining experience.
          </p>

          <form onSubmit={onSubmit}>
            <div className="mb-5">
              <label
                className={`block mb-2 font-semibold ${
                  isDark
                    ? "text-[#D6B56C]"
                    : "text-[#3c2415]"
                }`}
              >
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={20}
                  className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                    isDark
                      ? "text-gray-400"
                      : "text-gray-500"
                  }`}
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  required
                  className={`w-full pl-12 pr-4 py-4 rounded-2xl outline-none border transition-all duration-300
                  focus:ring-2 focus:ring-[#D6B56C]
                  ${
                    isDark
                      ? "bg-[#1f1f1f] border-gray-600 text-white placeholder-gray-500"
                      : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400"
                  }`}
                />
              </div>
            </div>

            <div className="mb-3">
              <label
                className={`block mb-2 font-semibold ${
                  isDark
                    ? "text-[#D6B56C]"
                    : "text-[#3c2415]"
                }`}
              >
                Password
              </label>

              <div className="relative">
                <Lock
                  size={20}
                  className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                    isDark
                      ? "text-gray-400"
                      : "text-gray-500"
                  }`}
                />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  required
                  className={`w-full pl-12 pr-12 py-4 rounded-2xl outline-none border transition-all duration-300
                  focus:ring-2 focus:ring-[#D6B56C]
                  ${
                    isDark
                      ? "bg-[#1f1f1f] border-gray-600 text-white placeholder-gray-500"
                      : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400"
                  }`}
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeOff
                      size={20}
                      className={
                        isDark
                          ? "text-gray-300"
                          : "text-gray-600"
                      }
                    />
                  ) : (
                    <Eye
                      size={20}
                      className={
                        isDark
                          ? "text-gray-300"
                          : "text-gray-600"
                      }
                    />
                  )}
                </button>
              </div>
            </div>

            
        

            {error && (
              <div className="mb-5 rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-red-600 text-sm font-medium">
                {error}
              </div>
            )}            

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-2xl bg-[#3c2415] text-white text-lg font-bold transition-all duration-300 hover:scale-[1.02] hover:bg-[#2b1b11] hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Logging In..." : "Login"}
            </button>


            <div className="flex items-center my-8">
              <div className="flex-1 h-px bg-gray-300" />

              <span
                className={`px-4 font-semibold ${
                  isDark
                    ? "text-gray-400"
                    : "text-gray-500"
                }`}
              >
                OR
              </span>

              <div className="flex-1 h-px bg-gray-300" />
            </div>

            <button
              type="button"
              onClick={() =>
                navigate("/registercustomer")
              }
              className={`w-full rounded-2xl border py-4 font-semibold flex items-center justify-center gap-3 transition-all duration-300 ${
                isDark
                  ? "border-[#D6B56C] text-[#D6B56C] hover:bg-[#D6B56C] hover:text-black"
                  : "border-[#3c2415] text-[#3c2415] hover:bg-[#3c2415] hover:text-white"
              }`}
            >
              <UserPlus size={20} />
              Create New Account
            </button>

            <p
              className={`text-center mt-6 text-sm ${
                isDark
                  ? "text-gray-500"
                  : "text-gray-600"
              }`}
            >
              Enjoy delicious meals, reserve tables,
              and experience premium dining with
              <span className="font-semibold text-[#D6B56C]">
                {" "}
                The Seasons Restaurant
              </span>
              .
            </p>

          </form>
        </div>
      </div>

      <Outlet />
    </section>
  );
};

export default CustomerLogin;
          