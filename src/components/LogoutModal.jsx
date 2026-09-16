import React from 'react'

// Importing logout icon asset
import logoutIcon from '../assets/logout.svg'

export default function LogoutModal({ onClose, onConfirm }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
      {/* Modal Container */}
      <div className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl relative font-sans space-y-3 text-center border border-gray-100 animate-in zoom-in-95 duration-200">
        
        {/* Logout Icon Badge */}
        <div className="w-12 h-12 rounded-full bg-[#FA6200]/15 flex items-center justify-center mx-auto mb-1 p-2.5">
          <img src={logoutIcon} alt="Log out" className="w-6 h-6 object-contain" />
        </div>

        {/* Title */}
        <h2 className="text-base font-bold text-gray-900">Log Out</h2>

        {/* Subtitle */}
        <p className="text-xs text-gray-500 font-normal">
          Would you like to log out, are you sure?
        </p>

        {/* Divider Line */}
        <div className="border-t border-gray-200/80 my-2"></div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-1">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-2.5 rounded-full border border-[#FA6200] text-[#FA6200] font-semibold text-sm hover:bg-[#FA6200]/10 transition-colors cursor-pointer text-center"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onConfirm}
            className="flex-1 py-2.5 rounded-full bg-[#FA6200] text-white font-semibold text-sm hover:bg-orange-600 transition-colors cursor-pointer shadow-xs text-center"
          >
            Submit
          </button>
        </div>

      </div>
    </div>
  )
}
