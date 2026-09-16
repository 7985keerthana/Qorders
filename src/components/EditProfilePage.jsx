import React, { useState } from 'react'
import { ChevronLeft, CheckCircle } from 'lucide-react'

// Importing assets
import editBadgeIcon from '../assets/Frame 427319775.svg'
import dropdownArrowIcon from '../assets/Vector.svg'

export default function EditProfilePage({ onBack }) {
  const [formData, setFormData] = useState({
    firstName: 'Kartik',
    lastName: 'Patel',
    canteenName: 'Lorem Ipsum',
    gstNumber: '24AAAAA0000A1Z5',
    fssaiNumber: '10022ABC000000',
    googleReviewLink: 'Lorem Ipsum',
    email: 'lorem@gmail.com',
    contactNumber: '+91 91000 12345',
    address: 'Lorem Ipsum',
    city: 'Surat',
    state: 'Gujarat',
    country: 'India',
    pincode: '123456',
  })

  // Toast notification state
  const [toast, setToast] = useState({ show: false, message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Show Toastify notification instead of browser alert
    setToast({ show: true, message: 'Details saved successfully!' })
    
    // Auto-hide toast after 3 seconds
    setTimeout(() => {
      setToast({ show: false, message: '' })
    }, 3000)
  }

  const handleDownloadQR = (e) => {
    e.preventDefault()
    setToast({ show: true, message: 'Downloading QR Code...' })
    setTimeout(() => {
      setToast({ show: false, message: '' })
    }, 3000)
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
        <h1 className="text-xl font-bold text-gray-900 tracking-tight">Profile</h1>
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
              placeholder="Add First Name"
              className="w-full px-4 py-3 rounded-full border border-[#FA6200] text-sm focus:outline-none focus:ring-2 focus:ring-[#FA6200]/30 text-gray-800 bg-white"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-xs font-bold text-gray-900 mb-1.5">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Add Last Name"
              className="w-full px-4 py-3 rounded-full border border-[#FA6200] text-sm focus:outline-none focus:ring-2 focus:ring-[#FA6200]/30 text-gray-800 bg-white"
            />
          </div>

          {/* Canteen Name */}
          <div>
            <label className="block text-xs font-bold text-gray-900 mb-1.5">Canteen Name</label>
            <input
              type="text"
              name="canteenName"
              value={formData.canteenName}
              onChange={handleChange}
              placeholder="Add Canteen Name"
              className="w-full px-4 py-3 rounded-full border border-[#FA6200] text-sm focus:outline-none focus:ring-2 focus:ring-[#FA6200]/30 text-gray-800 bg-white"
            />
          </div>

          {/* GST Number */}
          <div>
            <label className="block text-xs font-bold text-gray-900 mb-1.5">GST Number</label>
            <input
              type="text"
              name="gstNumber"
              value={formData.gstNumber}
              onChange={handleChange}
              placeholder="GST Number"
              className="w-full px-4 py-3 rounded-full border border-[#FA6200] text-sm focus:outline-none focus:ring-2 focus:ring-[#FA6200]/30 text-gray-800 bg-white"
            />
          </div>

          {/* FSSAI Number */}
          <div>
            <label className="block text-xs font-bold text-gray-900 mb-1.5">FSSAI Number</label>
            <input
              type="text"
              name="fssaiNumber"
              value={formData.fssaiNumber}
              onChange={handleChange}
              placeholder="FSSAI Number"
              className="w-full px-4 py-3 rounded-full border border-[#FA6200] text-sm focus:outline-none focus:ring-2 focus:ring-[#FA6200]/30 text-gray-800 bg-white"
            />
          </div>

          {/* Google Review Link */}
          <div>
            <label className="block text-xs font-bold text-gray-900 mb-1.5">Google Review Link</label>
            <input
              type="text"
              name="googleReviewLink"
              value={formData.googleReviewLink}
              onChange={handleChange}
              placeholder="Google Review Link"
              className="w-full px-4 py-3 rounded-full border border-[#FA6200] text-sm focus:outline-none focus:ring-2 focus:ring-[#FA6200]/30 text-gray-800 bg-white"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-bold text-gray-900 mb-1.5">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Add Email"
              className="w-full px-4 py-3 rounded-full border border-[#FA6200] text-sm focus:outline-none focus:ring-2 focus:ring-[#FA6200]/30 text-gray-800 bg-white"
            />
          </div>

          {/* Contact Number */}
          <div>
            <label className="block text-xs font-bold text-gray-900 mb-1.5">Contact Number</label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="Contact Number"
              className="w-full px-4 py-3 rounded-full border border-[#FA6200] text-sm focus:outline-none focus:ring-2 focus:ring-[#FA6200]/30 text-gray-800 bg-white"
            />
          </div>

          {/* Address (Spans 2 columns on desktop) */}
          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-gray-900 mb-1.5">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Add Address"
              className="w-full px-4 py-3 rounded-full border border-[#FA6200] text-sm focus:outline-none focus:ring-2 focus:ring-[#FA6200]/30 text-gray-800 bg-white"
            />
          </div>

          {/* Select City */}
          <div>
            <label className="block text-xs font-bold text-gray-900 mb-1.5">Select City</label>
            <div className="relative">
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-full border border-[#FA6200] text-sm focus:outline-none focus:ring-2 focus:ring-[#FA6200]/30 text-gray-800 font-medium bg-white appearance-none pr-10 cursor-pointer"
              >
                <option value="Surat">Surat</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Vadodara">Vadodara</option>
                <option value="Mumbai">Mumbai</option>
              </select>
              <img
                src={dropdownArrowIcon}
                alt="Select triangle"
                className="w-3.5 h-2 absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none"
              />
            </div>
          </div>

          {/* Select State */}
          <div>
            <label className="block text-xs font-bold text-gray-900 mb-1.5">Select State</label>
            <div className="relative">
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-full border border-[#FA6200] text-sm focus:outline-none focus:ring-2 focus:ring-[#FA6200]/30 text-gray-800 font-medium bg-white appearance-none pr-10 cursor-pointer"
              >
                <option value="Gujarat">Gujarat</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Rajasthan">Rajasthan</option>
              </select>
              <img
                src={dropdownArrowIcon}
                alt="Select triangle"
                className="w-3.5 h-2 absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none"
              />
            </div>
          </div>

          {/* Select Country */}
          <div>
            <label className="block text-xs font-bold text-gray-900 mb-1.5">Select Country</label>
            <div className="relative">
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-full border border-[#FA6200] text-sm focus:outline-none focus:ring-2 focus:ring-[#FA6200]/30 text-gray-800 font-medium bg-white appearance-none pr-10 cursor-pointer"
              >
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
              <img
                src={dropdownArrowIcon}
                alt="Select triangle"
                className="w-3.5 h-2 absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none"
              />
            </div>
          </div>

          {/* Pincode */}
          <div>
            <label className="block text-xs font-bold text-gray-900 mb-1.5">Pincode</label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              placeholder="Add pincode"
              className="w-full px-4 py-3 rounded-full border border-[#FA6200] text-sm focus:outline-none focus:ring-2 focus:ring-[#FA6200]/30 text-gray-800 bg-white"
            />
          </div>

        </div>

        {/* Download QR Code Link */}
        <div className="pt-2">
          <a
            href="#download-qr"
            onClick={handleDownloadQR}
            className="underline text-xs font-semibold text-gray-900 hover:text-[#FA6200] transition-colors"
          >
            Download qr code
          </a>
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
