import { useState } from "react";
import { useForm } from "react-hook-form";
import { useOutletContext } from "react-router-dom";

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
      className={` mb-2 font-semibold tracking-wide ${
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
      className={`w-full rounded-xl border px-4 py-3 outline-none 
          transition-all duration-300 focus:border-[#D6B56C] 
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

const Booking = () => {
  const { theme } = useOutletContext();

  const [showPopup, setShowPopup] = useState(false);
  const isDark = theme === "dark";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const today = new Date();
  const minBookingDate = today.toISOString().split("T")[0];
  const onSubmit = (data) => {
    console.log(data);
    reset();
    alert("Form Submit Successful!");
  };

  if (showPopup) {
    return (
      <div className="bg-black/60 flex items-center justify-center py-20 pt-34">
        <div
          className={`w-[90%] max-w-md rounded-2xl p-8 shadow-xl ${
            isDark ? "bg-[#171717] text-white" : "bg-white text-black"
          }`}
        >
          <div className="text-center">
            <div className="text-6xl mb-4">🍽️</div>

            <h2 className="text-3xl font-bold mb-3">Confirm Your Order</h2>

            <p className={`mb-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
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
    reset();           // Clear all fields
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
    );
  }

  return (
    <div
      className={`min-h-screen bg-[url('/booking.avif')] bg-cover 
         cursor-pointer bg-center bg-fixed flex items-center justify-center
          px-4 py-12 ${isDark ? "bg-black/80" : ""}`}
    >
      <div
        className={`w-full max-w-2xl rounded-3xl backdrop-blur-md mt-10
           border shadow-2xl p-10 transition-all duration-500 ${
             isDark
               ? "bg-black/60 border-[#D6B56C] text-white"
               : "bg-white/10 border-[#D6B56C]/40 text-black"
           }`}
      >
        <div className="mb-8 text-center">
          <h1
            className={`text-4xl font-serif font-bold ${
              isDark ? "text-[#D6B56C]" : "text-[#312407]"
            }`}
          >
            Reserve Your Table
          </h1>

          <p className={`mt-3 ${isDark ? "text-gray-300" : "text-gray-800"}`}>
            Fill out the details below to book your dining experience.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            isDark={isDark}
            label="Name"
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
            label="Booking Date"
            name="bookingDate"
            type="date"
            register={register}
            errors={errors}
            required="Booking date is required"
            min={minBookingDate}
            validate={(value) =>
              value >= minBookingDate || "Past dates are not allowed"
            }
          />
          <Input
            isDark={isDark}
            label="Number of Guests"
            name="guests"
            type="number"
            register={register}
            errors={errors}
            required="Guests are required"
            min={1}
            max={20}
            validate={(value) => {
              if (value < 1) return "Minimum 1 guest";
              if (value > 20) return "Maximum 20 guests";
              return true;
            }}
          />
          <div className="mb-5">
            <label
              className={`block mb-2 font-semibold tracking-wide ${
                isDark ? "text-[#D6B56C]" : "text-[#251d0a]"
              }`}
            >
              Booking Time
            </label>

            <select
              {...register("bookingTime", {
                required: "Booking time is required",
              })}
              className={`w-full rounded-xl border px-4 py-3 outline-none transition-all duration-300 focus:border-[#D6B56C] focus:ring-2 focus:ring-[#D6B56C]/50 ${
                isDark
                  ? "border-gray-600 bg-[#1e1e1e] text-white"
                  : "border-gray-600 bg-white/10 text-gray-800"
              }`}
            >
              <option value="">Select Time</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="11:30 AM">11:30 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="12:30 PM">12:30 PM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="1:30 PM">1:30 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="2:30 PM">2:30 PM</option>
              <option value="3:00 PM">3:00 PM</option>
              <option value="6:00 PM">6:00 PM</option>
              <option value="6:30 PM">6:30 PM</option>
              <option value="7:00 PM">7:00 PM</option>
              <option value="7:30 PM">7:30 PM</option>
              <option value="8:00 PM">8:00 PM</option>
              <option value="8:30 PM">8:30 PM</option>
              <option value="9:00 PM">9:00 PM</option>
              <option value="9:30 PM">9:30 PM</option>
              <option value="10:00 PM">10:00 PM</option>
            </select>

            <div className="h-5 mt-1">
              {errors.bookingTime && (
                <p className="text-sm text-red-500">
                  {errors.bookingTime.message}
                </p>
              )}
            </div>
          </div>
        </form>
{/* <button
  onClick={() => setShowPopup(true)}
  className="w-full mt-8 py-3 rounded-full font-semibold text-white hover:opacity-90 transition"
  style={{ backgroundColor: "#D6B56C" }}
>
  Confirm Order
</button> */}

<button
  onClick={handleSubmit(() => setShowPopup(true))}
  className="w-full mt-8 py-3 rounded-full font-semibold text-white hover:opacity-90 transition"
  style={{ backgroundColor: "#D6B56C" }}
>
  Confirm Order
</button>
      </div>
    </div>
  );
};

export default Booking;
