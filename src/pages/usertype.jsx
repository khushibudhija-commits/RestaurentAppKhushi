
import { ShieldCheck, User, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Usertype = ({ onClose }) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    onClose?.();
    navigate(path);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center
     bg-black/40 px-4">
      <div className="relative w-full max-w-md rounded-3xl
       bg-white shadow-2xl p-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2
           text-gray-400 transition hover:bg-gray-100
            hover:text-gray-700"
          aria-label="Close popup"
        >
          <X size={20} />
        </button>

        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome 👋
          </h1>
          <p className="mt-3 text-gray-500">
            Please choose how you want to continue.
          </p>
        </div>

        <div className="mt-10 space-y-5">
          <button
            type="button"
            onClick={() => handleNavigate("/admindashboard")}
            className="group flex w-full items-center justify-between rounded-2xl border border-blue-200 bg-blue-50 px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white hover:shadow-xl"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-blue-600 p-3 text-white group-hover:bg-white group-hover:text-blue-600">
                <ShieldCheck size={24} />
              </div>

              <div className="text-left">
                <h2 className="text-lg font-semibold">Admin</h2>
                <p className="text-sm text-gray-500 group-hover:text-blue-100">
                  Manage restaurant and orders
                </p>
              </div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => handleNavigate("/registercustomer")}
            className="group flex w-full items-center justify-between rounded-2xl border border-orange-200 bg-orange-50 px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500 hover:text-white hover:shadow-xl"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-orange-500 p-3 text-white group-hover:bg-white group-hover:text-orange-500">
                <User size={24} />
              </div>

              <div className="text-left">
                <h2 className="text-lg font-semibold">Continue as a Customer</h2>
                <p className="text-sm text-gray-500 group-hover:text-orange-100">
                  Browse menu and book a table
                </p>
              </div>
            </div>
          </button>
        </div>

        <p className="mt-8 text-center text-sm text-gray-400">
          Select your role to continue
        </p>
      </div>
    </div>
  );
};

export default Usertype;