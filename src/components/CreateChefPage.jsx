import React, { useState } from 'react'
import { ChevronLeft, CheckCircle } from 'lucide-react'

// Importing avatar pen badge asset
import editBadgeIcon from '../assets/Frame 427319775.svg'

export default function CreateChefPage({ onBack, onSave }) {
  const [formData, setFormData] = useState({
    firstName: 'Kartik',
    email: 'user67@gmail.com',
    cuisine: 'Panner',
    phone: '+91 123 456 7890',
    password: 'password123',
    confirmPassword: 'password123',
    salary: '₹15,000',
  })

  const [toast, setToast] = useState({ show: false, message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Show Toastify notification
    setToast({ show: true, message: 'Chef created successfully!' })

    setTimeout(() => {
      setToast({ show: false, message: '' })
      if (onSave) {
        onSave(formData.firstName)
      } else if (onBack) {
        onBack()
      }
    }, 1500)
  }

  return (
    <div className="relative w-full max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl bg-white min-h-screen sm:min-h-0 sm:max-h-[90vh] sm:rounded-3xl sm:shadow-2xl sm:border sm:border-gray-200 flex flex-col font-sans overflow-hidden transition-all duration-300">
      
      {/* Toast Notification (Toastify effect) */}
      {toast.show && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-gray-900/95 text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-3 text-sm font-semibold border border-gray-700 animate-in fade-in slide-in-from-top-4 duration-300">
          <CheckCircle className="w-5 h-5 text-[#FA6200]" />
          <span>{toast.message}</span>
        </div>
      )}

      {/* Top Header */}
      <div className="px-5 pt-5 pb-3 md:px-8 md:pt-6 flex items-center gap-3 border-b border-gray-100/80">
        <button
          onClick={onBack}
          className="p-1 rounded-full text-gray-800 hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Go back"
        >
          <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
        </button>
        <h1 className="text-xl font-bold text-gray-900 tracking-tight">Create Chef</h1>
      </div>

      {/* Form Content Body */}
      <form onSubmit={handleSubmit} className="px-5 py-5 md:px-8 md:py-6 space-y-4 overflow-y-auto no-scrollbar flex-1">
        
        {/* Avatar Section */}
        <div className="flex justify-center my-2 md:my-4">
          <div className="relative">
            <div className="w-24 h-24 rounded-full border-2 border-[#FA6200] bg-[#FA6200]/15 flex items-center justify-center text-[#FA6200] font-bold text-2xl shadow-xs">
              KP
            </div>
            <button
              type="button"
              className="absolute bottom-0 right-0 w-7 h-7 cursor-pointer hover:scale-105 transition-transform"
            >
              <img src={editBadgeIcon} alt="Edit avatar" className="w-7 h-7 object-contain" />
            </button>
          </div>
        </div>

        {/* Inputs Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* First Name */}
          <div>
            <label className="block text-xs font-bold text-gray-900 mb-1.5">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="w-full px-4 py-3 rounded-full border border-[#FA6200] text-sm focus:outline-none focus:ring-2 focus:ring-[#FA6200]/30 text-gray-800 bg-white"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-xs font-bold text-gray-900 mb-1.5">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-full border border-[#FA6200] text-sm focus:outline-none focus:ring-2 focus:ring-[#FA6200]/30 text-gray-800 bg-white"
            />
          </div>

          {/* Select Cuisine */}
          <div>
            <label className="block text-xs font-bold text-gray-900 mb-1.5">Select Cuisine</label>
            <input
              type="text"
              name="cuisine"
              value={formData.cuisine}
              onChange={handleChange}
              placeholder="Select Cuisine"
              className="w-full px-4 py-3 rounded-full border border-[#FA6200] text-sm focus:outline-none focus:ring-2 focus:ring-[#FA6200]/30 text-gray-800 bg-white"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-xs font-bold text-gray-900 mb-1.5">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-full border border-[#FA6200] text-sm focus:outline-none focus:ring-2 focus:ring-[#FA6200]/30 text-gray-800 bg-white"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-bold text-gray-900 mb-1.5">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full px-4 py-3 rounded-full border border-[#FA6200] text-sm focus:outline-none focus:ring-2 focus:ring-[#FA6200]/30 text-gray-800 bg-white"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-xs font-bold text-gray-900 mb-1.5">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full px-4 py-3 rounded-full border border-[#FA6200] text-sm focus:outline-none focus:ring-2 focus:ring-[#FA6200]/30 text-gray-800 bg-white"
            />
          </div>

          {/* Salary (Full width on desktop or grid) */}
          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-gray-900 mb-1.5">Salary</label>
            <input
              type="text"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              placeholder="Salary"
              className="w-full px-4 py-3 rounded-full border border-[#FA6200] text-sm focus:outline-none focus:ring-2 focus:ring-[#FA6200]/30 text-gray-800 bg-white"
            />
          </div>

        </div>

        {/* Save Details Solid Orange Button */}
        <div className="pt-3">
          <button
            type="submit"
            className="w-full py-3.5 rounded-full bg-[#FA6200] text-white font-semibold text-sm hover:bg-orange-600 transition-all cursor-pointer shadow-md text-center"
          >
            Save Details
          </button>
        </div>

      </form>

    </div>
  )
}
