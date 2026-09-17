import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import dropdownArrowIcon from '../assets/Vector.svg'

export default function LoginPage({ onLogin, onSignUp, onForgotPassword }) {
  const [role, setRole] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onLogin) {
      onLogin({ role, username, password })
    }
  }

  return (
    <div className="relative w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl bg-white min-h-screen sm:min-h-[600px] sm:max-h-[90vh] sm:rounded-3xl sm:shadow-2xl sm:border sm:border-gray-200 flex flex-col justify-between font-sans overflow-hidden transition-all duration-300 p-6 md:p-10">
      
      {/* Top Empty Spacer for Vertical Alignment */}
      <div className="hidden sm:block h-6"></div>

      {/* Main Content Area */}
      <div className="w-full max-w-sm mx-auto my-auto flex flex-col justify-center space-y-6 pt-10 sm:pt-0">
        
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 text-center tracking-tight">
          Welcome Back!
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          
          {/* Select Role Dropdown Field */}
          <div className="relative">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-5 py-3.5 rounded-full border border-[#F7AE7C] text-sm text-gray-700 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#FA6200]/30 cursor-pointer font-medium select-none"
            >
              <option value="" disabled hidden>
                Select role
              </option>
              <option value="Chef">Chef</option>
              <option value="Manager">Manager</option>
              <option value="Admin">Admin</option>
              <option value="Staff">Staff</option>
            </select>
            <img
              src={dropdownArrowIcon}
              alt="Select dropdown"
              className="w-3.5 h-2 absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-80"
            />
          </div>

          {/* Email or User Name Field */}
          <div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Email or user name"
              className="w-full px-5 py-3.5 rounded-full border border-[#F7AE7C] text-sm text-gray-700 placeholder:text-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#FA6200]/30 font-medium"
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-5 py-3.5 rounded-full border border-[#F7AE7C] text-sm text-gray-700 placeholder:text-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#FA6200]/30 pr-12 font-medium"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800 p-1 cursor-pointer transition-colors"
              aria-label="Toggle password visibility"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5 opacity-75" />
              ) : (
                <Eye className="w-5 h-5 opacity-75" />
              )}
            </button>
          </div>

          {/* Forgot Password Link */}
          <div className="text-right pt-0.5">
            <button
              type="button"
              onClick={onForgotPassword}
              className="text-xs font-semibold text-gray-900 hover:text-[#FA6200] transition-colors cursor-pointer"
            >
              Forgot password?
            </button>
          </div>

          {/* Login Button */}
          <div className="pt-3">
            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-[#FA6200] hover:bg-orange-600 text-white font-bold text-base shadow-md transition-all cursor-pointer text-center"
            >
              Login
            </button>
          </div>

        </form>

      </div>

      {/* Footer / Sign Up Link */}
      <div className="text-center py-4 sm:py-6 text-xs text-gray-400 font-medium">
        Don't have any account?{' '}
        <button
          type="button"
          onClick={onSignUp}
          className="text-[#FA6200] font-bold hover:underline cursor-pointer ml-0.5"
        >
          Sign Up
        </button>
      </div>

    </div>
  )
}
