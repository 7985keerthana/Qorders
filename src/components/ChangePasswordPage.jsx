import React, { useState } from 'react'
import { ChevronLeft, CheckCircle } from 'lucide-react'

export default function ChangePasswordPage({ onBack }) {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })
  const [toast, setToast] = useState({ show: false, message: '' })

  const showToast = (message) => {
    setToast({ show: true, message })
    setTimeout(() => setToast({ show: false, message: '' }), 2500)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleReset = () => {
    setFormData({ currentPassword: '', newPassword: '', confirmPassword: '' })
    showToast('Form reset successfully')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.currentPassword || !formData.newPassword || !formData.confirmPassword) {
      showToast('Please fill in all password fields')
      return
    }
    if (formData.newPassword !== formData.confirmPassword) {
      showToast('New passwords do not match!')
      return
    }
    showToast('Password updated successfully!')
    setTimeout(() => {
      if (onBack) onBack()
    }, 1500)
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
        <h1 className="text-xl font-bold text-gray-900 tracking-tight">Change Password</h1>
      </div>

      {/* Content Form Body */}
      <form onSubmit={handleSubmit} className="px-5 py-4 flex flex-col flex-1 justify-between no-scrollbar overflow-y-auto pb-8">
        
        {/* Input Fields */}
        <div className="space-y-5">
          
          {/* Current Password */}
          <div>
            <label className="block text-xs font-bold text-gray-900 mb-1.5">
              Current Password
            </label>
            <input
              type="password"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              placeholder="Add current password"
              className="w-full px-4 py-3.5 rounded-full border border-gray-300 text-sm focus:outline-none focus:border-[#FA6200] text-gray-800 placeholder:text-gray-400 bg-white"
            />
          </div>

          {/* New Password */}
          <div>
            <label className="block text-xs font-bold text-gray-900 mb-1.5">
              New Password
            </label>
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              placeholder="Add new password"
              className="w-full px-4 py-3.5 rounded-full border border-gray-300 text-sm focus:outline-none focus:border-[#FA6200] text-gray-800 placeholder:text-gray-400 bg-white"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-xs font-bold text-gray-900 mb-1.5">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Add confirm password"
              className="w-full px-4 py-3.5 rounded-full border border-gray-300 text-sm focus:outline-none focus:border-[#FA6200] text-gray-800 placeholder:text-gray-400 bg-white"
            />
          </div>

        </div>

        {/* Action Buttons: Update & Reset */}
        <div className="flex items-center gap-4 pt-8">
          <button
            type="submit"
            className="flex-1 py-3.5 rounded-2xl bg-[#FA6200] text-white font-bold text-sm hover:bg-orange-600 transition-colors shadow-md text-center cursor-pointer"
          >
            Update
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="flex-1 py-3.5 rounded-2xl border border-gray-300 text-gray-500 font-semibold text-sm hover:bg-gray-100 transition-colors text-center cursor-pointer"
          >
            Reset
          </button>
        </div>

      </form>

    </div>
  )
}
