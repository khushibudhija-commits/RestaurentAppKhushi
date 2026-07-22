import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const [isOpen, setIsOpen] = useState(false);
const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700"
      >
        Logout
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="w-80 rounded-lg bg-white p-6 shadow-lg">
            <h2 className="text-lg font-semibold">Confirm Logout</h2>
            <p className="mt-2 text-gray-600">
              Are you sure you want to logout?
            </p>

            <div className="mt-5 flex justify-end gap-3">
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg border px-4 py-2"
              >
                Cancel
              </button>

              <button
  onClick={() => {
    // localStorage.removeItem("token");
    // localStorage.removeItem("user");
    
alert("logged out successfully")
    setIsOpen(false);
    navigate("/login");

  }}
  className="rounded-lg bg-blue-600 px-4 py-2 text-white"
>
  Confirm
</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogoutButton;