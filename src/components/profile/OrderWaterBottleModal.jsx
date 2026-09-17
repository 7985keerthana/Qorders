import React, { useState } from 'react'

export default function OrderWaterBottleModal({ onClose, onSubmit }) {
  const [selectedSize, setSelectedSize] = useState('500ml')
  const [lotSize, setLotSize] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSubmit) {
      onSubmit({ selectedSize, lotSize })
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
      {/* Modal Container */}
      <div className="bg-[#F4F4F6] sm:bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl relative font-sans space-y-4 border border-gray-100 animate-in zoom-in-95 duration-200">
        
        {/* Form Body */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Radio Options */}
          <div className="space-y-3 pt-1">
            {/* 500ml Radio */}
            <label className="flex items-center gap-3 cursor-pointer select-none">
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                  selectedSize === '500ml'
                    ? 'bg-[#1E70EB] text-white'
                    : 'border-2 border-gray-400 bg-transparent'
                }`}
              >
                {selectedSize === '500ml' && (
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                )}
              </div>
              <input
                type="radio"
                name="size"
                value="500ml"
                checked={selectedSize === '500ml'}
                onChange={() => setSelectedSize('500ml')}
                className="sr-only"
              />
              <span className="text-sm font-medium text-gray-500">500ml</span>
            </label>

            {/* 1000ml Radio */}
            <label className="flex items-center gap-3 cursor-pointer select-none">
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                  selectedSize === '1000ml'
                    ? 'bg-[#1E70EB] text-white'
                    : 'border-2 border-gray-400 bg-transparent'
                }`}
              >
                {selectedSize === '1000ml' && (
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                )}
              </div>
              <input
                type="radio"
                name="size"
                value="1000ml"
                checked={selectedSize === '1000ml'}
                onChange={() => setSelectedSize('1000ml')}
                className="sr-only"
              />
              <span className="text-sm font-medium text-gray-500">1000ml</span>
            </label>
          </div>

          {/* Lot Size Input */}
          <div className="pt-1">
            <label className="block text-xs font-bold text-gray-900 mb-1.5">
              Enter lot size
            </label>
            <input
              type="text"
              value={lotSize}
              onChange={(e) => setLotSize(e.target.value)}
              placeholder="Enter lot size"
              className="w-full px-4 py-3 rounded-full border border-gray-300 text-sm focus:outline-none focus:border-[#FA6200] text-gray-800 placeholder:text-gray-400 bg-[#F8F8F8]"
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
