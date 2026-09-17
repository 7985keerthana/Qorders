import React, { useState } from 'react'
import { Eye, EyeOff, CheckCircle } from 'lucide-react'
import dropdownArrowIcon from '../assets/Vector.svg'

export default function SignUpPage({ onSignUpSuccess, onBackToLogin }) {
  const [formData, setFormData] = useState({
    role: '',
    university: '',
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    canteenName: '',
    address: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
    password: '',
    confirmPassword: '',
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [toast, setToast] = useState({ show: false, message: '' })

  const showToast = (message) => {
    setToast({ show: true, message })
    setTimeout(() => setToast({ show: false, message: '' }), 3000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword) {
      showToast('Passwords do not match!')
      return
    }
    showToast('Account created successfully!')
    setTimeout(() => {
      if (onSignUpSuccess) {
        onSignUpSuccess(formData)
      } else if (onBackToLogin) {
        onBackToLogin()
      }
    }, 1200)
  }

  return (
    <div className="relative w-full max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl bg-white min-h-screen sm:min-h-0 sm:max-h-[90vh] sm:rounded-3xl sm:shadow-2xl sm:border sm:border-gray-200 flex flex-col font-sans overflow-hidden transition-all duration-300">
      
      {/* Toast Notification */}
      {toast.show && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-gray-900/95 text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-3 text-sm font-semibold border border-gray-700 animate-in fade-in slide-in-from-top-4 duration-300">
          <CheckCircle className="w-5 h-5 text-[#FA6200]" />
          <span>{toast.message}</span>
        </div>
      )}

      {/* Top Header Title & Subtitle */}
      <div className="px-5 pt-6 pb-2 md:px-8 md:pt-8 text-center border-b border-gray-100/80">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
          Sign Up
        </h1>
        <p className="text-xs text-gray-400 font-medium mt-1">
          Please sign up to get started
        </p>
      </div>

      {/* Form Content Body */}
      <form onSubmit={handleSubmit} className="px-5 py-5 md:px-8 md:py-6 overflow-y-auto no-scrollbar flex-1 pb-8">
        
        {/* Form Fields Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">

          {/* Select Roll / Role */}
          <div className="relative">
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-5 py-3.5 rounded-full border border-[#F7AE7C] text-sm text-gray-700 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#FA6200]/30 cursor-pointer font-medium"
            >
              <option value="" disabled hidden>
                Select Roll
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

          {/* Select University / College */}
          <div className="relative">
            <select
              name="university"
              value={formData.university}
              onChange={handleChange}
              className="w-full px-5 py-3.5 rounded-full border border-[#F7AE7C] text-sm text-gray-700 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#FA6200]/30 cursor-pointer font-medium"
            >
              <option value="" disabled hidden>
                Select University/college
              </option>
              <option value="GTU">Gujarat Technological University</option>
              <option value="Parul">Parul University</option>
              <option value="Nirma">Nirma University</option>
              <option value="Marwadi">Marwadi University</option>
            </select>
            <img
              src={dropdownArrowIcon}
              alt="Select dropdown"
              className="w-3.5 h-2 absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-80"
            />
          </div>

          {/* Your First Name */}
          <div>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Your First name"
              className="w-full px-5 py-3.5 rounded-full border border-[#F7AE7C] text-sm text-gray-700 placeholder:text-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#FA6200]/30 font-medium"
            />
          </div>

          {/* Your Last Name */}
          <div>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Your Last name"
              className="w-full px-5 py-3.5 rounded-full border border-[#F7AE7C] text-sm text-gray-700 placeholder:text-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#FA6200]/30 font-medium"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile number"
              className="w-full px-5 py-3.5 rounded-full border border-[#F7AE7C] text-sm text-gray-700 placeholder:text-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#FA6200]/30 font-medium"
            />
          </div>

          {/* Email Id */}
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Id"
              className="w-full px-5 py-3.5 rounded-full border border-[#F7AE7C] text-sm text-gray-700 placeholder:text-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#FA6200]/30 font-medium"
            />
          </div>

          {/* Canteen Name */}
          <div>
            <input
              type="text"
              name="canteenName"
              value={formData.canteenName}
              onChange={handleChange}
              placeholder="Canteen name"
              className="w-full px-5 py-3.5 rounded-full border border-[#F7AE7C] text-sm text-gray-700 placeholder:text-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#FA6200]/30 font-medium"
            />
          </div>

          {/* Address (Spans 2 columns on desktop) */}
          <div className="md:col-span-2">
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              className="w-full px-5 py-3.5 rounded-full border border-[#F7AE7C] text-sm text-gray-700 placeholder:text-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#FA6200]/30 font-medium"
            />
          </div>

          {/* City */}
          <div>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className="w-full px-5 py-3.5 rounded-full border border-[#F7AE7C] text-sm text-gray-700 placeholder:text-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#FA6200]/30 font-medium"
            />
          </div>

          {/* State */}
          <div>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="State"
              className="w-full px-5 py-3.5 rounded-full border border-[#F7AE7C] text-sm text-gray-700 placeholder:text-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#FA6200]/30 font-medium"
            />
          </div>

          {/* Country */}
          <div>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Country"
              className="w-full px-5 py-3.5 rounded-full border border-[#F7AE7C] text-sm text-gray-700 placeholder:text-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#FA6200]/30 font-medium"
            />
          </div>

          {/* Pincode */}
          <div>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              placeholder="Pincode"
              className="w-full px-5 py-3.5 rounded-full border border-[#F7AE7C] text-sm text-gray-700 placeholder:text-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#FA6200]/30 font-medium"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
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

          {/* Confirm Password */}
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              className="w-full px-5 py-3.5 rounded-full border border-[#F7AE7C] text-sm text-gray-700 placeholder:text-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#FA6200]/30 pr-12 font-medium"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800 p-1 cursor-pointer transition-colors"
              aria-label="Toggle confirm password visibility"
            >
              {showConfirmPassword ? (
                <EyeOff className="w-5 h-5 opacity-75" />
              ) : (
                <Eye className="w-5 h-5 opacity-75" />
              )}
            </button>
          </div>

          {/* Signup Solid Orange Button (Spans 2 columns on desktop) */}
          <div className="pt-2 md:col-span-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-[#FA6200] hover:bg-orange-600 text-white font-bold text-base shadow-md transition-all cursor-pointer text-center"
            >
              Signup
            </button>
          </div>

        </div>

        {/* Footer / Already have account link */}
        <div className="text-center pt-6 text-xs text-gray-400 font-medium">
          Already have an account?{' '}
          <button
            type="button"
            onClick={onBackToLogin}
            className="text-[#FA6200] font-bold hover:underline cursor-pointer ml-0.5"
          >
            Sign In
          </button>
        </div>

      </form>

    </div>
  )
}
