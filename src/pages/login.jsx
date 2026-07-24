import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/login";
import Usertype from "./usertype";

const Login = () => {
  const savedEmail = useAuthStore((state) => state.userEmail);
  const savedPassword = useAuthStore((state) => state.userPassword);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const [email, setEmail] = useState(savedEmail || "");
  const [password, setPassword] = useState(savedPassword || "");

  const [showPopup, setShowPopup] = useState(true);

  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const [error, setError] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    setShowPopup(true);
  }, []);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!value) {
      setError("Email is required.");
    } else if (!emailRegex.test(value)) {
      setError("Please enter a valid email.");
    } else {
      setError("");
    }
  };
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (!value) {
      setError("Password is required.");
    } else if (value.length < 6) {
      setError("Password must be at least 6 characters.");
    } else {
      setError("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill all fields.");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    fetch("http://localhost:7000/api/admins/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    login(email, password);
    navigate("/", { replace: true });
  };


  return (
    <div className="min-h-screen flex flex-col bg-gray-300 ">
        <div
      className={`w-full min-h-screen cursor-pointer flex items-center justify-center
      bg-linear-to-r from-blue-300 to-indigo-300
      ${showPopup ? "blur-sm pointer-events-none" : ""}`}
    >
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Login
          </h1>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {error && (
              <div className="bg-red-100 text-red-600 px-4 py-2 rounded-lg text-sm">
                {error}
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-blue-300 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      {/* Popup */}
    {/* {showPopup && (
      <Usertype onClose={() => setShowPopup(false)} />
    )} */}
    </div>
  );
};

export default Login;
