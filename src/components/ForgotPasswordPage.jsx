import React, { useState } from 'react'

export default function ForgotPasswordPage({ onBackToLogin, onSubmit }) {
  const [emailOrUsername, setEmailOrUsername] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSubmit) {
      onSubmit(emailOrUsername)
    } else if (onBackToLogin) {
      onBackToLogin()
    }
  }

  return (
    <div className="relative w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl bg-white min-h-screen sm:min-h-[500px] sm:max-h-[90vh] sm:rounded-3xl sm:shadow-2xl sm:border sm:border-gray-200 flex flex-col justify-between font-sans overflow-hidden transition-all duration-300 p-6 md:p-10">
      
      {/* Top Spacer for layout positioning */}
      <div className="hidden sm:block h-6"></div>

      {/* Main Content Area */}
      <div className="w-full max-w-sm mx-auto my-auto flex flex-col justify-center space-y-6 pt-10 sm:pt-0">
        
        {/* Title & Subtitle */}
        <div className="space-y-2 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
            Forgot Password
          </h1>
          <p className="text-xs text-gray-400 font-medium">
            Please sign in to your existing account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          
          {/* Email or User Name Input Field */}
          <div>
            <input
              type="text"
              value={emailOrUsername}
              onChange={(e) => setEmailOrUsername(e.target.value)}
              placeholder="Email or user name"
              className="w-full px-5 py-3.5 rounded-full border border-[#F7AE7C] text-sm text-gray-700 placeholder:text-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#FA6200]/30 font-medium"
              autoFocus
            />
          </div>

          {/* Login / Submit Orange Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-[#FA6200] hover:bg-orange-600 text-white font-bold text-base shadow-md transition-all cursor-pointer text-center"
            >
              Login
            </button>
          </div>

        </form>

      </div>

      {/* Bottom Back / Helper link */}
      <div className="text-center py-4 sm:py-6 text-xs text-gray-400 font-medium">
        Remembered your password?{' '}
        <button
          type="button"
          onClick={onBackToLogin}
          className="text-[#FA6200] font-bold hover:underline cursor-pointer ml-0.5"
        >
          Sign In
        </button>
      </div>

    </div>
  )
}
