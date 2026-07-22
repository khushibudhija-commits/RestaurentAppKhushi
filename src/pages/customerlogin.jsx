import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, LogIn } from "lucide-react";
import { Outlet, useNavigate } from "react-router-dom";
import useAuthStore from "../store/customerlogin";

const CustomerLogin = ({ theme }) => {
  const navigate = useNavigate();

  const isDark = theme === "dark";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

const customerlogin = useAuthStore((state) => state.customerlogin);
  const onSubmit = async (e) => {
  e.preventDefault();
  try {
    setLoading(true);
    setError("");
    const response = await fetch("http://localhost:7000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });


    const result = await response.json();
    if (!response.ok) {
      setError(result.message || "Invalid email or password");
      return;
    }


    localStorage.setItem("customerToken", result.token);
    localStorage.setItem("customer", JSON.stringify(result.data));


    // alert("Login Successful 🎉");
customerlogin(result.data);
 navigate("/home");
  }
   catch (err) {
    setError("Server error. Please try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <section
      className={`min-h-screen flex items-center justify-center px-6 transition-all duration-300 ${
        isDark
          ? "bg-[#0f172a]"
          : "bg-gradient-to-br from-orange-100 via-white to-yellow-100"
      }`}
    >
     <form
  onSubmit={onSubmit}
  className={`w-full max-w-md rounded-3xl shadow-2xl p-8 transition duration-300 ${
    isDark
      ? "bg-[#171717] border border-gray-700"
      : "bg-white border border-gray-200"
  }`}
>
        <div className="flex justify-center mb-5">
          <div className="w-20 h-20 rounded-full bg-[#D6B56C] flex items-center justify-center">
            <LogIn className="text-white" size={35} />
          </div>
        </div>

        <h1
          className={`text-3xl font-bold text-center ${
            isDark ? "text-white" : "text-[#3c2415]"
          }`}
        >
          Welcome Back
        </h1>

        <p
          className={`text-center mt-2 mb-8 ${
            isDark ? "text-gray-400" : "text-gray-500"
          }`}
        >
          Login to continue your food journey.
        </p>
        <div className="mb-5">
          <label
            className={`font-semibold ${
              isDark ? "text-[#D6B56C]" : "text-[#3c2415]"
            }`}
          >
            Email
          </label>

          <div className="relative mt-2">
            <Mail
              size={20}
              className={`absolute left-3 top-3 ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            />

            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full pl-11 pr-4 py-3 rounded-xl border outline-none ${
                isDark
                  ? "bg-[#222] border-gray-600 text-white"
                  : "bg-white border-gray-300"
              }`}
            />
          </div>
        </div>
        <div className="mb-3">
          <label
            className={`font-semibold ${
              isDark ? "text-[#D6B56C]" : "text-[#3c2415]"
            }`}
          >
            Password
          </label>

          <div className="relative mt-2">
            <Lock
              size={20}
              className={`absolute left-3 top-3 ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full pl-11 pr-12 py-3 rounded-xl border outline-none ${
                isDark
                  ? "bg-[#222] border-gray-600 text-white"
                  : "bg-white border-gray-300"
              }`}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3"
            >
              {showPassword ? (
                <EyeOff
                  size={20}
                  className={isDark ? "text-white" : "text-gray-700"}
                />
              ) : (
                <Eye
                  size={20}
                  className={isDark ? "text-white" : "text-gray-700"}
                />
              )}
            </button>
          </div>
        </div>

        <div className="flex justify-end mb-5">
          <button
            onClick={() => navigate("/forgotpassword")}
            className="text-[#D6B56C] hover:underline"
          >
            Forgot Password?
          </button>
        </div>
        {error && (
          <div className="bg-red-100 text-red-600 rounded-lg p-3 mb-5">
            {error}
          </div>
        )}

        <button 
        //   disabled={loading}
        type="submit"
          className="w-full py-3 rounded-xl font-semibold text-white bg-[#D6B56C] hover:opacity-90 transition"
        >
          {/* {loading ? "Logging in..." : "Login"} */}
          Login
        </button>

        <div className="mt-6 text-center">
          <span className={isDark ? "text-gray-400" : "text-gray-600"}>
            Don't have an account?
          </span>

          <button
            onClick={() => navigate("/registercustomer")}
            className="text-[#D6B56C] hover:underline"
          >
            Register
          </button>
        </div>
      </form>
          <Outlet />
      </section>
  );
};

export default CustomerLogin;