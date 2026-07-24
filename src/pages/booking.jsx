import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useOutletContext, useNavigate } from "react-router-dom";
import {
  Calendar,
  Clock,
  Users,
  Armchair,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  RefreshCw,
  History,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

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
  <div className="mb-4">
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
      className={`w-full rounded-xl border px-4 py-3 outline-none 
          transition-all duration-300 focus:border-[#D6B56C] focus:ring-2 focus:ring-[#D6B56C]/40
            ${
              isDark
                ? "border-gray-600 bg-[#1e1e1e] text-white placeholder-gray-400"
                : "border-gray-300 bg-white text-gray-800 placeholder-gray-400 shadow-sm"
            }`}
    />
    <div className="h-5 mt-1">
      {errors[name] && (
        <p className="text-sm text-red-500 font-medium">{errors[name].message}</p>
      )}
    </div>
  </div>
);

const Booking = () => {
  const { theme } = useOutletContext();
  const navigate = useNavigate();
  const isDark = theme === "dark";

  const [showPopup, setShowPopup] = useState(false);
  const [bookingData, setBookingData] = useState(null);
  const [bookedTableNumbers, setBookedTableNumbers] = useState([]);
  const [loadingTables, setLoadingTables] = useState(false);
  const [successBooking, setSuccessBooking] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  // User History State & Pagination
  const [userHistory, setUserHistory] = useState([]);
  const [historyPage, setHistoryPage] = useState(1);
  const [historyPagination, setHistoryPagination] = useState({
    total: 0,
    page: 1,
    limit: 5,
    totalPages: 1,
  });
  const [loadingHistory, setLoadingHistory] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const selectedDate = watch("bookingDate");
  const selectedTime = watch("bookingTime");

  const user = JSON.parse(localStorage.getItem("customer"));
  const today = new Date();
  const minBookingDate = today.toISOString().split("T")[0];

  // Fetch booked tables from backend whenever date or time slot changes
  const fetchBookedTables = async () => {
    if (!selectedDate || !selectedTime) {
      setBookedTableNumbers([]);
      return;
    }

    setLoadingTables(true);
    try {
      const response = await fetch(
        "http://localhost:7000/api/bookings/getcollections"
      );
      const result = await response.json();
      if (response.ok && result.data) {
        const slotBookings = result.data.filter(
          (b) =>
            b.bookingDate === selectedDate && b.bookingTime === selectedTime
        );
        const bookedNums = slotBookings.map((b) => Number(b.tableNumber));
        setBookedTableNumbers(bookedNums);
      }
    } catch (err) {
      console.error("Error fetching bookings:", err);
    } finally {
      setLoadingTables(false);
    }
  };

  useEffect(() => {
    fetchBookedTables();
  }, [selectedDate, selectedTime]);

  // Fetch user table booking history with pagination
  const fetchUserHistory = async (page = 1) => {
    if (!user?._id) return;
    setLoadingHistory(true);
    try {
      const response = await fetch(
        `http://localhost:7000/api/bookings/user/${user._id}?page=${page}&limit=5`
      );
      const result = await response.json();
      if (response.ok && result.data) {
        setUserHistory(result.data);
        if (result.pagination) {
          setHistoryPagination(result.pagination);
        }
      }
    } catch (err) {
      console.error("Error fetching user history:", err);
    } finally {
      setLoadingHistory(false);
    }
  };

  useEffect(() => {
    fetchUserHistory(historyPage);
  }, [user?._id, historyPage]);

  // Find next auto-assigned table (first free table between 1 and 20)
  const nextAssignedTable = Array.from({ length: 20 }, (_, i) => i + 1).find(
    (num) => !bookedTableNumbers.includes(num)
  );

  const isAllBooked = bookedTableNumbers.length >= 20 || !nextAssignedTable;

  const onSubmit = (data) => {
    if (isAllBooked) {
      alert("All 20 tables are booked for this time slot. Please choose another date or time slot.");
      return;
    }
    setBookingData(data);
    setShowPopup(true);
  };

  const handleConfirmBooking = async () => {
    setSubmitting(true);
    try {
      const response = await fetch(
        "http://localhost:7000/api/bookings/bookTable",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            bookingDate: bookingData?.bookingDate,
            bookingTime: bookingData?.bookingTime,
            numberOfGuests: Number(bookingData?.numberOfGuests),
            userId: user?._id,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        alert(result.message || "Failed to book table");
        setSubmitting(false);
        return;
      }

      setSuccessBooking(result.data || { tableNumber: nextAssignedTable, ...bookingData });
      setShowPopup(false);
      reset();
      setBookingData(null);
      fetchBookedTables();
      fetchUserHistory(1);
      setHistoryPage(1);
    } catch (error) {
      alert(error.message || "Server Error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className={`min-h-screen bg-[url('/booking.avif')] bg-cover bg-center bg-fixed flex flex-col items-center justify-center px-4 py-12 ${
        isDark ? "bg-black/80" : ""
      }`}
    >
      {/* Success Modal */}
      {successBooking && (
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
              Booking Confirmed!
            </h2>

            <div className="my-6 p-4 rounded-2xl bg-[#D6B56C]/10 border border-[#D6B56C]/30 text-center">
              <span className="text-sm uppercase tracking-widest text-[#D6B56C] font-semibold block mb-1">
                Assigned Table Number
              </span>
              <span className="text-5xl font-extrabold text-[#D6B56C] flex items-center justify-center gap-2">
                <Armchair className="w-9 h-9 text-[#D6B56C]" />
                Table #{successBooking.tableNumber}
              </span>
            </div>

            <div className={`space-y-2 text-left text-sm mb-6 p-4 rounded-xl ${isDark ? "bg-white/5" : "bg-gray-100"}`}>
              <div className="flex justify-between">
                <span className="text-gray-400">Date:</span>
                <span className="font-semibold">{successBooking.bookingDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Time Slot:</span>
                <span className="font-semibold">{successBooking.bookingTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Guests:</span>
                <span className="font-semibold">{successBooking.numberOfGuests} Guests</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setSuccessBooking(null)}
                className="flex-1 py-3 rounded-xl bg-[#D6B56C] text-black font-bold hover:bg-[#c4a359] transition shadow-lg"
              >
                Book Another Table
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
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div
            className={`w-full max-w-md rounded-3xl p-8 shadow-2xl ${
              isDark ? "bg-[#171717] text-white border border-gray-700" : "bg-white text-black"
            }`}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D6B56C]/20 text-[#D6B56C] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#D6B56C]/40">
                <Sparkles className="w-8 h-8" />
              </div>

              <h2 className="text-2xl font-bold mb-2">Confirm Reservation</h2>

              <p className={`text-sm mb-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                Please confirm your details. We will automatically assign an available table between 1 and 20.
              </p>

              <div className={`p-4 rounded-xl mb-6 text-left space-y-3 ${isDark ? "bg-white/5 border border-gray-800" : "bg-amber-50 border border-amber-200"}`}>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#D6B56C]" />
                  <div>
                    <span className="text-xs text-gray-400 block">Date</span>
                    <span className="font-semibold text-sm">{bookingData?.bookingDate}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#D6B56C]" />
                  <div>
                    <span className="text-xs text-gray-400 block">Time Slot</span>
                    <span className="font-semibold text-sm">{bookingData?.bookingTime}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-[#D6B56C]" />
                  <div>
                    <span className="text-xs text-gray-400 block">Guests</span>
                    <span className="font-semibold text-sm">{bookingData?.numberOfGuests} Guests</span>
                  </div>
                </div>
                {nextAssignedTable && (
                  <div className="flex items-center gap-3 pt-2 border-t border-gray-700/30">
                    <Armchair className="w-5 h-5 text-green-500" />
                    <div>
                      <span className="text-xs text-gray-400 block">Assigned Table (Preview)</span>
                      <span className="font-bold text-sm text-green-500">Table #{nextAssignedTable}</span>
                    </div>
                  </div>
                )}
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
                  onClick={handleConfirmBooking}
                  className="flex-1 py-3 rounded-xl bg-green-600 text-white font-bold hover:bg-green-700 transition flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                >
                  {submitting ? "Booking..." : "Confirm Booking"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Reservation Card */}
      <div
        className={`w-full max-w-4xl rounded-3xl backdrop-blur-md mt-10 border shadow-2xl p-6 sm:p-10 transition-all duration-500 ${
          isDark
            ? "bg-black/75 border-[#D6B56C]/60 text-white"
            : "bg-white/90 border-[#D6B56C]/40 text-black shadow-amber-900/10"
        }`}
      >
        <div className="mb-8 text-center">
          <span className="uppercase tracking-[4px] text-xs font-bold text-[#D6B56C]">
            Restaurant Table Reservation
          </span>
          <h1
            className={`text-4xl sm:text-5xl font-serif font-bold mt-1 ${
              isDark ? "text-[#D6B56C]" : "text-[#312407]"
            }`}
          >
            Reserve Your Table
          </h1>

          <p className={`mt-3 text-sm sm:text-base max-w-md mx-auto ${isDark ? "text-gray-300" : "text-gray-700"}`}>
            Our restaurant features 20 premium dining tables (Tables 1 – 20). Select your date and slot to check real-time availability.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 gap-6">
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

            <div className="mb-4">
              <label
                className={`block mb-2 font-semibold tracking-wide ${
                  isDark ? "text-[#D6B56C]" : "text-[#251d0a]"
                }`}
              >
                Time Slot
              </label>

              <select
                {...register("bookingTime", {
                  required: "Booking time is required",
                })}
                className={`w-full rounded-xl border px-4 py-3 outline-none transition-all duration-300 focus:border-[#D6B56C] focus:ring-2 focus:ring-[#D6B56C]/40 ${
                  isDark
                    ? "border-gray-600 bg-[#1e1e1e] text-white"
                    : "border-gray-300 bg-white text-gray-800 shadow-sm"
                }`}
              >
                <option value="">Select Time Slot</option>
                <option value="Morning Slot">Morning Slot (9:00 AM - 12:00 PM)</option>
                <option value="Afternoon Slot">Afternoon Slot (2:00 PM - 4:00 PM)</option>
                <option value="Evening Slot">Evening Slot (6:00 PM - 8:00 PM)</option>
              </select>

              <div className="h-5 mt-1">
                {errors.bookingTime && (
                  <p className="text-sm text-red-500 font-medium">
                    {errors.bookingTime.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <Input
            isDark={isDark}
            label="Number of Guests"
            name="numberOfGuests"
            type="number"
            register={register}
            errors={errors}
            required="Guests count is required"
            min={1}
            max={20}
            validate={(value) => {
              if (value < 1) return "Minimum 1 guest";
              if (value > 20) return "Maximum 20 guests per booking";
              return true;
            }}
          />

          {/* Interactive 1-20 Table Availability Map */}
          {selectedDate && selectedTime ? (
            <div className={`my-6 p-5 rounded-2xl border ${isDark ? "bg-[#141414] border-gray-800" : "bg-amber-50/70 border-amber-200"}`}>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <Armchair className="w-5 h-5 text-[#D6B56C]" />
                  <h3 className="font-bold text-base">
                    Table Availability Grid (Tables 1 - 20)
                  </h3>
                  {loadingTables && <RefreshCw className="w-4 h-4 animate-spin text-[#D6B56C]" />}
                </div>

                <div className="flex items-center gap-4 text-xs font-semibold">
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
                    Available ({20 - bookedTableNumbers.length})
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                    Booked ({bookedTableNumbers.length})
                  </span>
                  {nextAssignedTable && (
                    <span className="flex items-center gap-1.5 text-[#D6B56C]">
                      <span className="w-3 h-3 rounded-full bg-[#D6B56C] inline-block"></span>
                      Next Auto-Assign (# {nextAssignedTable})
                    </span>
                  )}
                </div>
              </div>

              {isAllBooked ? (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm">All tables are booked!</h4>
                    <p className="text-xs">
                      All 20 tables are occupied for {selectedTime} on {selectedDate}. Please select another date or time slot.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-10 gap-2 mt-2">
                  {Array.from({ length: 20 }, (_, i) => i + 1).map((tableNum) => {
                    const isBooked = bookedTableNumbers.includes(tableNum);
                    const isNext = tableNum === nextAssignedTable;

                    return (
                      <div
                        key={tableNum}
                        className={`relative rounded-xl p-2 sm:p-3 text-center border transition-all duration-300 flex flex-col items-center justify-center ${
                          isBooked
                            ? "bg-red-500/10 border-red-500/30 text-red-500 opacity-60 cursor-not-allowed"
                            : isNext
                            ? "bg-[#D6B56C]/20 border-[#D6B56C] text-[#D6B56C] font-bold shadow-md shadow-[#D6B56C]/10 scale-105"
                            : isDark
                            ? "bg-white/5 border-gray-700 text-gray-300 hover:border-green-500"
                            : "bg-white border-gray-200 text-gray-700 shadow-xs hover:border-green-500"
                        }`}
                      >
                        <span className="text-[10px] uppercase font-medium tracking-tight block text-gray-400">
                          T-{tableNum}
                        </span>
                        <Armchair className={`w-4 h-4 my-0.5 ${isBooked ? "text-red-500" : isNext ? "text-[#D6B56C]" : "text-green-500"}`} />
                        <span className="text-[10px] font-semibold">
                          {isBooked ? "Booked" : isNext ? "Next" : "Free"}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            <div className={`my-4 p-4 rounded-xl border border-dashed text-center text-xs ${isDark ? "border-gray-700 text-gray-400 bg-white/5" : "border-gray-300 text-gray-500 bg-amber-50/30"}`}>
              💡 Select a <strong>Booking Date</strong> and <strong>Time Slot</strong> above to preview live table availability for Tables 1 – 20.
            </div>
          )}

          <button
            type="submit"
            disabled={isAllBooked}
            className={`w-full mt-6 py-4 rounded-full font-bold text-white text-lg transition duration-300 shadow-xl flex items-center justify-center gap-2 ${
              isAllBooked
                ? "bg-gray-500 cursor-not-allowed opacity-60"
                : "bg-[#D6B56C] hover:bg-[#c5a45b] text-black hover:scale-[1.01]"
            }`}
          >
            <Sparkles className="w-5 h-5" />
            {isAllBooked ? "All Tables Booked" : "Reserve Table Now"}
          </button>
        </form>
      </div>

      {/* User Table Booking History Section with Pagination */}
      {user?._id && (
        <div
          className={`w-full max-w-4xl rounded-3xl backdrop-blur-md mt-10 border shadow-2xl p-6 sm:p-10 transition-all duration-500 ${
            isDark
              ? "bg-black/75 border-[#D6B56C]/50 text-white"
              : "bg-white/90 border-[#D6B56C]/40 text-black shadow-amber-900/10"
          }`}
        >
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b pb-4 border-gray-700/40">
            <div>
              <div className="flex items-center gap-2">
                <History className="w-6 h-6 text-[#D6B56C]" />
                <h2 className="text-2xl font-bold font-serif text-[#D6B56C]">
                  My Table Booking History
                </h2>
              </div>
              <p className={`text-xs mt-1 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                Your past and upcoming table reservations with real-time pagination.
              </p>
            </div>

            <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#D6B56C]/20 text-[#D6B56C] border border-[#D6B56C]/40">
              Total Bookings: {historyPagination.total}
            </span>
          </div>

          {loadingHistory ? (
            <div className="py-12 text-center text-sm text-gray-400 flex items-center justify-center gap-2">
              <RefreshCw className="w-5 h-5 animate-spin text-[#D6B56C]" />
              Loading history...
            </div>
          ) : userHistory.length === 0 ? (
            <div className={`py-12 text-center text-sm rounded-2xl border border-dashed ${isDark ? "border-gray-800 text-gray-400 bg-white/5" : "border-gray-300 text-gray-500 bg-amber-50/20"}`}>
              No table bookings found yet. Book your first table above!
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid gap-3">
                {userHistory.map((item) => (
                  <div
                    key={item._id}
                    className={`p-4 sm:p-5 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition duration-200 ${
                      isDark
                        ? "bg-[#141414] border-gray-800 hover:border-[#D6B56C]/50"
                        : "bg-white border-amber-200 hover:border-amber-400 shadow-xs"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#D6B56C]/20 border border-[#D6B56C]/40 flex flex-col items-center justify-center text-[#D6B56C]">
                        <Armchair className="w-6 h-6" />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-base text-[#D6B56C]">
                            Table #{item.tableNumber || "N/A"}
                          </span>
                          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-green-500/20 text-green-500 border border-green-500/30">
                            Confirmed
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-400 mt-1">
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

                    <div className="text-left sm:text-right text-xs text-gray-400">
                      <div>Booked On</div>
                      <div className="font-semibold text-gray-300">
                        {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : "N/A"}
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
  );
};

export default Booking;
