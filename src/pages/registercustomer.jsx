import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import Usertype from "./usertype";

const Input = ({
  label,
  isDark,
  name,
  type = "text",
  register,
  errors,
  min,
  max,
  ...rules
}) => (
  <div className="mb-5">
    <label
      className={`block mb-2 font-semibold tracking-wide ${
        isDark ? "text-[#D6B56C]" : "text-[#251d0a]"
      }`}
    >
      {label}
    </label>

    <input
      type={type}
      min={min}
      max={max}
      {...register(name, rules)}
      className={`w-full rounded-xl border px-4 py-3 outline-none transition-all duration-300 focus:border-[#D6B56C]
        ${
          isDark
            ? "border-gray-600 bg-[#1e1e1e] text-white placeholder-gray-400"
            : "border-gray-600 bg-white/10 text-gray-800 placeholder-gray-400"
        }`}
    />

    <div className="h-5 mt-1">
      {errors[name] && (
        <p className="text-sm text-red-500">{errors[name].message}</p>
      )}
    </div>
  </div>
);

const RegisterCustomer = ({ theme }) => {
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

      const response = await fetch("http://localhost:7000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.message || "Something went wrong");
        return;
      }
      reset();

      alert("Customer Registered Successfully🎊");
      navigate("/customerlogin");
    } catch (err) {
      setError("Server error. Please try again.");
    }
  };
  return (
    <div className="min-h-screen flex flex-col bg-gray-300">
      <div
        className={`w-full min-h-screen flex items-center justify-center
      bg-linear-to-r from-blue-300 to-indigo-300
  
   `}
      >
        <div
          className={`w-full max-w-md rounded-2xl shadow-2xl p-8 transition-all duration-300
        ${isDark ? "bg-[#171717] text-white" : "bg-white text-black"}`}
        >
          <h1 className="text-3xl font-bold text-center mb-6">Register</h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input
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
              isDark={isDark}
              label="Email"
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

            <Input
              isDark={isDark}
              label="Set Password"
              name="password"
              type="password"
              register={register}
              errors={errors}
              required="Password is required"
              minLength={{
                value: 8,
                message: "Password must be at least 8 characters",
              }}
              pattern={{
                value:
                  5,
                message:
                  "Password must be atleast 5 characters "}}
            />

            {error && (
              <div className="bg-red-100 text-red-600 px-4 py-2 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold text-white transition duration-300"
              style={{
                backgroundColor: "#D6B56C",
              }}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterCustomer;
