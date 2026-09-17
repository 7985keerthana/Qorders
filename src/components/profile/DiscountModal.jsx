import React, { useState } from 'react'

export default function DiscountModal({ onClose, onSubmit }) {
  const [discountValue, setDiscountValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSubmit) {
      onSubmit(discountValue)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
      {/* Modal Container */}
      <div className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl relative font-sans space-y-4 border border-gray-100 animate-in zoom-in-95 duration-200">
        
        {/* Title */}
        <h2 className="text-base font-bold text-gray-900">Enter Discount</h2>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={discountValue}
              onChange={(e) => setDiscountValue(e.target.value)}
              placeholder="Enter discount"
              className="w-full px-4 py-3 rounded-full border border-gray-300 text-sm focus:outline-none focus:border-[#FA6200] text-gray-800 placeholder:text-gray-400 bg-[#F8F8F8]"
              autoFocus
            />
          </div>

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
              type="submit"
              className="flex-1 py-2.5 rounded-full bg-[#FA6200] text-white font-semibold text-sm hover:bg-orange-600 transition-colors cursor-pointer shadow-xs text-center"
            >
              Submit
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}
