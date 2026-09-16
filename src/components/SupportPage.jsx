import React, { useState } from 'react'
import { ChevronLeft, CheckCircle } from 'lucide-react'

// Importing dropdown triangle asset
import dropdownArrowIcon from '../assets/Vector.svg'

const supportOptions = [
  'Lorem ipsum dolor sit amet, consectetur',
  'Lorem ipsum dolor sit amet',
  'Lorem ipsum dolor sit amet, consectetur',
  'Lorem ipsum dolor sit amet, consectetur',
  'Lorem ipsum dolor sit amet, consectetur',
]

export default function SupportPage({ onBack }) {
  const [supportType, setSupportType] = useState('Lorem ipsum dolor sit amet')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [text, setText] = useState('')
  const [toast, setToast] = useState({ show: false, message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setToast({ show: true, message: 'Support request submitted successfully!' })
    setTimeout(() => {
      setToast({ show: false, message: '' })
      if (onBack) onBack()
    }, 1500)
  }

  const handleSelectOption = (option) => {
    setSupportType(option)
    setIsDropdownOpen(false)
  }

  return (
    <div className="relative w-full max-w-md bg-white min-h-screen sm:min-h-[750px] sm:h-[812px] sm:rounded-[36px] sm:shadow-2xl sm:border sm:border-gray-200 flex flex-col font-sans overflow-hidden">
      
      {/* Toast Notification */}
      {toast.show && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-gray-900/95 text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-3 text-sm font-semibold border border-gray-700 animate-in fade-in slide-in-from-top-4 duration-300">
          <CheckCircle className="w-5 h-5 text-[#FA6200]" />
          <span>{toast.message}</span>
        </div>
      )}

      {/* Top Header */}
      <div className="px-5 pt-5 pb-3 flex items-center gap-3">
        <button
          onClick={onBack}
          className="p-1 rounded-full text-gray-800 hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Go back"
        >
          <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
        </button>
        <h1 className="text-xl font-bold text-gray-900 tracking-tight">Support</h1>
      </div>

      {/* Content Body */}
      <form onSubmit={handleSubmit} className="px-5 py-4 space-y-5 overflow-y-auto no-scrollbar flex-1 pb-8">
        
        {/* Type Support Dropdown Field */}
        <div className="relative">
          <label className="block text-xs font-bold text-gray-900 mb-1.5">
            Type Support
          </label>

          <div
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full px-4 py-3 rounded-full border border-[#FA6200] text-sm text-gray-800 bg-white flex items-center justify-between cursor-pointer select-none"
          >
            <span className="truncate pr-4">{supportType}</span>
            <img
              src={dropdownArrowIcon}
              alt="Select dropdown"
              className={`w-3.5 h-2 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
            />
          </div>

          {/* Floating Dropdown Options Menu (Matching exact screenshot design) */}
          {isDropdownOpen && (
            <div className="absolute left-0 right-0 top-full mt-2 bg-[#EFEFEF] rounded-2xl shadow-xl border border-gray-200/80 overflow-hidden z-20 py-1 animate-in fade-in duration-150">
              {supportOptions.map((opt, index) => {
                const isSelected = opt === supportType && index === 1 // matches screenshot highlighted 2nd option
                return (
                  <div
                    key={index}
                    onClick={() => handleSelectOption(opt)}
                    className={`px-5 py-3 text-xs sm:text-sm text-gray-900 cursor-pointer transition-colors ${
                      isSelected
                        ? 'bg-[#C2C2C2] font-semibold'
                        : 'hover:bg-gray-200/80 font-normal'
                    }`}
                  >
                    {opt}
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Text Field */}
        <div>
          <label className="block text-xs font-bold text-gray-900 mb-1.5">
            Text
          </label>
          <textarea
            rows={4}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text"
            className="w-full p-4 rounded-2xl border border-gray-300 text-sm focus:outline-none focus:border-[#FA6200] text-gray-800 placeholder:text-gray-400 bg-white resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full py-3.5 rounded-full bg-[#FA6200] text-white font-semibold text-sm hover:bg-orange-600 transition-all cursor-pointer shadow-md text-center"
          >
            Submit Request
          </button>
        </div>

      </form>

    </div>
  )
}
