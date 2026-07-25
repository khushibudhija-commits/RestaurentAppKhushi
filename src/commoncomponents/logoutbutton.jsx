import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const [isOpen, setIsOpen] = useState(false);
const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-lg bg-[#D6B56C] px-5 py-2.5
         font-medium text-white hover:bg-[#D6B56C]"
      >
        Logout
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="w-80 rounded-lg bg-white p-6 shadow-lg">
            <h2 className="text-lg text-black font-semibold">Confirm Logout</h2>
            <p className="mt-2 text-gray-600">
              Are you sure you want to logout?
            </p>

            <div className="mt-5 flex justify-end gap-3">
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg border text-orange-300 px-4 py-2"
              >
                Cancel
              </button>

              <button
  onClick={() => {
    localStorage.removeItem("customerToken");
    localStorage.removeItem("customer");
    
alert("logged out successfully")
    setIsOpen(false);
    navigate("/");

  }}
  className="rounded-lg bg-orange-200 px-4 py-2 text-black"
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