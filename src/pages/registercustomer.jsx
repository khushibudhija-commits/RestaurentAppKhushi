
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { User, Mail, Lock, UtensilsCrossed } from "lucide-react";

const Input = ({
  label,
  icon: Icon,
  isDark,
  name,
  type = "text",
  register,
  errors,
  min,
  max,
  ...rules
}) => {
  return (
    <div className="mb-4">
      <label
        className={`mb-1 block font-semibold tracking-wide ${
          isDark ? "text-[#D6B56C]" : "text-[#8a4b12]"
        }`}
      >
        {label}
      </label>

      <div
        className={`flex items-center rounded-xl border transition-all duration-300 focus-within:ring-2 focus-within:ring-[#D6B56C]
        ${
          isDark
            ? "border-gray-600 bg-[#232323]"
            : "border-gray-300 bg-white"
        }`}
      >
        <div className="px-4">
          <Icon
            size={20}
            className={isDark ? "text-[#D6B56C]" : "text-[#8a4b12]"}
          />
        </div>

        <input
          type={type}
          min={min}
          max={max}
          {...register(name, rules)}
          className={`w-full rounded-r-xl bg-transparent px-2 py-3 outline-none
          ${
            isDark
              ? "text-white placeholder-gray-400"
              : "text-gray-800 placeholder-gray-400"
          }`}
        />
      </div>

      <div className="min-h-[18px] mt-1">
        {errors[name] && (
          <p className="text-sm text-red-500">
            {errors[name].message}
          </p>
        )}
      </div>
    </div>
  );
};

const RegisterCustomer = ({ theme = "light" }) => {
  const navigate = useNavigate();

  const isDark = theme === "dark";

  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    try {
      setError("");

      const response = await fetch(
        "https://restraunt-app-backend.onrender.com/api/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            password: data.password,
          }),
        }
      );

      const result = await response.json();
      console.log(result);
console.log(response.ok);

      if (!response.ok) {
        setError(result.message || "Something went wrong");
        return;
      }

      reset();

      alert("Customer Registered Successfully 🎉");

      navigate("/customerlogin");
    } catch (err) {
      setError("Server error. Please try again.");
    }
  };

  return (
    <div
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center px-6 py-10"
      style={{
        backgroundImage: "url('/hero-light.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

      <div
        className={`relative z-10 w-full max-w-2xl overflow-hidden rounded-[35px] border shadow-[0_20px_60px_rgba(0,0,0,.35)]
        ${
          isDark
            ? "border-[#D6B56C]/30 bg-[#171717]/95 text-white"
            : "border-white bg-white/95 text-black"
        }`}
      >
        <div className="px-10 py-8">
          <div className="flex justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-[#D6B56C] bg-gradient-to-br from-[#D6B56C] to-[#8a4b12] shadow-xl">
              <UtensilsCrossed size={42} className="text-white" />
            </div>
          </div>

          <div className="mt-5 text-center">
            <h1
              className={`text-3xl font-bold tracking-wide ${
                isDark ? "text-[#D6B56C]" : "text-[#8a4b12]"
              }`}
            >
              Welcome to The Seasons
            </h1>

            <p
              className={`mt-2 text-sm ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Create your customer account and enjoy premium dining,
              exclusive offers and seamless table booking.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
            <div className="grid gap-5 md:grid-cols-2">
                            <Input
                icon={User}
                isDark={isDark}
                label="Full Name"
                name="name"
                register={register}
                errors={errors}
                required="Name is required"
                minLength={{
                  value: 3,
                  message: "Minimum 3 characters",
                }}
                pattern={{
                  value: /^[A-Za-z ]+$/,
                  message: "Only letters are allowed",
                }}
              />

              <Input
                icon={Mail}
                isDark={isDark}
                label="Email Address"
                name="email"
                type="email"
                register={register}
                errors={errors}
                required="Email is required"
                pattern={{
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter a valid email",
                }}
              />
              </div>
            <div className="mt-2">
              <Input
                icon={Lock}
                isDark={isDark}
                label="Password"
                name="password"
                type="password"
                register={register}
                errors={errors}
                required="Password is required"
                minLength={{
                  value: 5,
                  message: "Password must be at least 5 characters",
                }}
              />
            </div>

          
{error && (
  <div
    className={`mb-5 rounded-xl border px-4 py-3 text-sm font-medium ${
      isDark
        ? "border-red-500 bg-red-500/10 text-red-300"
        : "border-red-300 bg-red-50 text-red-600"
    }`}
  >
    {error}
  </div>
)}
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-[#8a4b12] via-[#b86b1c] to-[#8a4b12] py-3.5 text-lg font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-300"
            >
              Create Account →
            </button>

            </form>

            <div className="my-6 flex items-center">
              <div className="h-px flex-1 bg-gray-300"></div>

              <span
                className={`px-4 text-sm font-semibold ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                OR
              </span>

              <div className="h-px flex-1 bg-gray-300"></div>
            </div>
            
            </div>
                        <button
              type="button"
              onClick={() => navigate("/customerlogin")}
              className={`w-full rounded-xl border py-3.5 text-lg font-semibold transition-all duration-300 hover:scale-[1.02]
              ${
                isDark
                  ? "border-[#D6B56C] text-[#D6B56C] hover:bg-[#D6B56C] hover:text-black hover:shadow-lg hover:shadow-[#D6B56C]/30"
                  : "border-[#8a4b12] text-[#8a4b12] hover:bg-[#8a4b12] hover:text-white hover:shadow-lg hover:shadow-orange-300"
              }`}
            >
              Already have an account? Login
            </button>

            <div className="mt-8 rounded-2xl border border-dashed border-[#D6B56C]/40 bg-gradient-to-r from-[#D6B56C]/10 to-transparent p-4 text-center">
              <h3
                className={`text-lg font-semibold ${
                  isDark ? "text-[#D6B56C]" : "text-[#8a4b12]"
                }`}
              >
                🍽 Experience Fine Dining
              </h3>

              <p
                className={`mt-2 text-sm leading-6 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Reserve tables instantly, discover delicious dishes,
                receive exclusive offers and enjoy a seamless restaurant
                experience with <b>The Seasons Restaurant.</b>
              </p>
            </div>

            <p
              className={`mt-6 text-center text-sm ${
                isDark ? "text-gray-500" : "text-gray-500"
              }`}
            >
              By creating an account, you agree to our{" "}
              <span className="font-semibold text-[#D6B56C] cursor-pointer hover:underline">
                Terms & Conditions
              </span>{" "}
              and{" "}
              <span className="font-semibold text-[#D6B56C] cursor-pointer hover:underline">
                Privacy Policy
              </span>.
            </p>
        </div>
      </div>
  );
};

export default RegisterCustomer;