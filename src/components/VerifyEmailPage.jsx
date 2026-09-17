import React, { useState, useRef } from 'react'
import { CheckCircle } from 'lucide-react'

export default function VerifyEmailPage({ onVerify, onResend }) {
  const [otp, setOtp] = useState(['8', '8', '7', '6'])
  const [activeIndex, setActiveIndex] = useState(3)
  const [toast, setToast] = useState({ show: false, message: '' })
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]

  const showToast = (msg) => {
    setToast({ show: true, message: msg })
    setTimeout(() => setToast({ show: false, message: '' }), 3000)
  }

  const handleChange = (index, value) => {
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp]
      newOtp[index] = value.slice(-1)
      setOtp(newOtp)

      if (value && index < 3) {
        inputRefs[index + 1].current?.focus()
        setActiveIndex(index + 1)
      }
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus()
      setActiveIndex(index - 1)
    }
  }

  const handleVerify = (e) => {
    e.preventDefault()
    const code = otp.join('')
    if (code.length < 4) {
      showToast('Please enter all 4 digits')
      return
    }
    showToast('Code verified successfully!')
    setTimeout(() => {
      if (onVerify) onVerify(code)
    }, 1200)
  }

  const handleSendAgain = () => {
    showToast('A new code has been sent to your email.')
    if (onResend) onResend()
  }

  return (
    <div className="relative w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl bg-white min-h-screen sm:min-h-[500px] sm:max-h-[90vh] sm:rounded-3xl sm:shadow-2xl sm:border sm:border-gray-200 flex flex-col justify-between font-sans overflow-hidden transition-all duration-300 p-6 md:p-10">
      
      {/* Toast Notification */}
      {toast.show && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-gray-900/95 text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-3 text-sm font-semibold border border-gray-700 animate-in fade-in slide-in-from-top-4 duration-300">
          <CheckCircle className="w-5 h-5 text-[#FA6200]" />
          <span>{toast.message}</span>
        </div>
      )}

      {/* Top Spacer for vertical alignment */}
      <div className="hidden sm:block h-6"></div>

      {/* Main Content Area */}
      <div className="w-full max-w-sm mx-auto my-auto flex flex-col justify-center space-y-6 pt-10 sm:pt-0">
        
        {/* Title & Subtitle */}
        <div className="space-y-2 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
            Check your email
          </h1>
          <p className="text-xs text-gray-400 font-medium">
            We have sent the code to your email
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleVerify} className="space-y-6 pt-2">
          
          {/* OTP Inputs 4 Boxes Row */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 my-2">
            {otp.map((digit, idx) => {
              const isActive = idx === activeIndex
              return (
                <input
                  key={idx}
                  ref={inputRefs[idx]}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onFocus={() => setActiveIndex(idx)}
                  onChange={(e) => handleChange(idx, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(idx, e)}
                  className={`w-14 h-14 sm:w-16 sm:h-16 text-center text-xl sm:text-2xl font-bold rounded-2xl focus:outline-none transition-all ${
                    isActive
                      ? 'border-2 border-[#FA6200] bg-white text-gray-900 shadow-xs'
                      : 'border border-transparent bg-[#F2F2F2] text-gray-900'
                  }`}
                />
              )
            })}
          </div>

          {/* Action Buttons: Verify & Send again */}
          <div className="space-y-3 pt-2">
            
            {/* Verify Solid Orange Button */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-[#FA6200] hover:bg-orange-600 text-white font-bold text-base shadow-md transition-all cursor-pointer text-center"
            >
              Verify
            </button>

            {/* Send again Outlined Button */}
            <button
              type="button"
              onClick={handleSendAgain}
              className="w-full py-3.5 rounded-2xl border border-gray-300/90 text-gray-600 font-semibold text-base hover:bg-gray-50 transition-colors cursor-pointer text-center bg-white"
            >
              Send again
            </button>

          </div>

        </form>

      </div>

      {/* Footer Empty Spacer */}
      <div className="py-4 sm:py-6"></div>

    </div>
  )
}
