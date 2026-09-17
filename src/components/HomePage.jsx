import React, { useState } from 'react'
import { ChevronDown, CheckCircle } from 'lucide-react'
import HomeIcon from '../assets/Home.svg'
import ListIcon from '../assets/List.svg'
import BellIcon from '../assets/bell 1.svg'
import RunningOrdersIcon from '../assets/Vector 1.svg'
import OrderRequestIcon from '../assets/order - Request.svg'
import ProfileActiveIcon from '../assets/Name.svg'
import ProfileInactiveIcon from '../assets/Group.svg'
import RunningOrdersSheet from './RunningOrdersSheet'
import OrdersRequestSheet from './OrdersRequestSheet'

const weeklyData = [
  { day: 'M', value: 25, label: 'M' },
  { day: 'T', value: 50, label: 'T' },
  { day: 'W', value: 18, label: 'W' },
  { day: 'T', value: 58, label: 'T' },
  { day: 'F', value: 45, label: 'F' },
  { day: 'S', value: 20, label: 'S' },
  { day: 'Today', value: 30, label: 'Today' },
]

export default function HomePage({ onNavigateProfile, onNavigateMenu, onLogout }) {
  const [activeTab, setActiveTab] = useState('home')
  const [timeframe, setTimeframe] = useState('Weekly')
  const [toast, setToast] = useState({ show: false, message: '' })
  const [showRunningOrders, setShowRunningOrders] = useState(false)
  const [showOrdersRequest, setShowOrdersRequest] = useState(false)

  const showToast = (message) => {
    setToast({ show: true, message })
    setTimeout(() => setToast({ show: false, message: '' }), 2500)
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab)
    if (tab === 'profile' && onNavigateProfile) {
      onNavigateProfile()
    } else if (tab === 'list') {
      if (onNavigateMenu) onNavigateMenu()
    } else if (tab === 'notification') {
      showToast('No new notifications')
    } else if (tab === 'add') {
      showToast('Create new item / order')
    }
  }

  return (
    <div className="relative w-full max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl bg-white min-h-screen sm:min-h-0 sm:max-h-[90vh] sm:rounded-3xl sm:shadow-2xl sm:border sm:border-gray-200 flex flex-col justify-between font-sans overflow-hidden transition-all duration-300">
      
      {/* Running Orders Bottom Sheet */}
      {showRunningOrders && (
        <RunningOrdersSheet onClose={() => setShowRunningOrders(false)} />
      )}

      {/* Orders Request Bottom Sheet */}
      {showOrdersRequest && (
        <OrdersRequestSheet onClose={() => setShowOrdersRequest(false)} />
      )}

      {/* Toast Notification */}
      {toast.show && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-gray-900/95 text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-3 text-sm font-semibold border border-gray-700 animate-in fade-in slide-in-from-top-4 duration-300">
          <CheckCircle className="w-5 h-5 text-[#FA6200]" />
          <span>{toast.message}</span>
        </div>
      )}

      {/* Main Scrollable Dashboard Content Area */}
      <div className="px-5 py-5 md:px-8 md:py-6 space-y-5 overflow-y-auto no-scrollbar flex-1 pb-20">
        
        {/* 1. Top Header Bar: "Hello," & Notification Bell */}
        <div className="flex items-center justify-between pt-1">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
            Hello,
          </h1>
          <button
            onClick={() => showToast('No new notifications')}
            className="w-11 h-11 rounded-2xl bg-[#F1F1F1] hover:bg-gray-200 transition-colors flex items-center justify-center text-gray-800 cursor-pointer shadow-xs"
            aria-label="Notifications"
          >
            <img src={BellIcon} alt="Notifications" className="w-5 h-5" />
          </button>
        </div>

        {/* 2. Orange Discount Banner Card */}
        <div className="bg-[#FA6200] rounded-2xl p-5 md:p-6 text-white shadow-md flex items-center justify-between">
          <div className="space-y-0.5">
            <h2 className="text-lg md:text-xl font-bold leading-tight">
              Hurry Up!
            </h2>
            <h2 className="text-lg md:text-xl font-bold leading-tight">
              The Discount is
            </h2>
          </div>
          <div className="text-4xl md:text-5xl font-extrabold tracking-tight">
            50%
          </div>
        </div>

        {/* 3. Action Buttons Row: Running Orders & Orders Request */}
        <div className="grid grid-cols-2 gap-3.5">
          
          {/* Running Orders Button */}
          <button
            onClick={() => setShowRunningOrders(true)}
            className="bg-[#F1F1F1] hover:bg-gray-200 transition-colors rounded-2xl py-3.5 px-4 flex items-center justify-center gap-2.5 font-semibold text-xs sm:text-sm text-gray-800 shadow-2xs cursor-pointer select-none"
          >
            <div className="w-7 h-7 flex items-center justify-center shrink-0">
              <img src={RunningOrdersIcon} alt="Running Orders" className="w-4 h-4" />
            </div>
            <span>Running Orders</span>
          </button>

          {/* Orders Request Button */}
          <button
            onClick={() => setShowOrdersRequest(true)}
            className="bg-[#F1F1F1] hover:bg-gray-200 transition-colors rounded-2xl py-3.5 px-4 flex items-center justify-center gap-2.5 font-semibold text-xs sm:text-sm text-gray-800 shadow-2xs cursor-pointer select-none"
          >
            <div className="w-7 h-7 flex items-center justify-center shrink-0">
              <img src={OrderRequestIcon} alt="Orders Request" className="w-4 h-4" />
            </div>
            <span>Orders Request</span>
          </button>

        </div>

        {/* 4. Revenue Header Row: "Revenue" & "See Details" */}
        <div className="flex items-center justify-between pt-1">
          <h2 className="text-lg font-bold text-gray-900">
            Revenue
          </h2>
          <button
            onClick={() => showToast('Revenue Breakdown Details')}
            className="text-xs font-semibold text-[#FA6200] underline hover:opacity-80 transition-opacity cursor-pointer"
          >
            See Details
          </button>
        </div>

        {/* 5. Total Revenue & Bar Chart Card */}
        <div className="bg-[#F1F1F1] rounded-3xl p-5 md:p-6 shadow-2xs space-y-4">
          
          {/* Revenue Amount & Timeframe Selector */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-medium text-gray-500 block">
                Total Revenue
              </span>
              <span className="text-xl md:text-2xl font-extrabold text-[#FA6200] block mt-0.5">
                ₹ 80,000
              </span>
            </div>

            {/* Dropdown Timeframe Selector */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setTimeframe(timeframe === 'Weekly' ? 'Monthly' : 'Weekly')}
                className="bg-white rounded-xl px-3.5 py-1.5 border border-gray-200 text-xs font-semibold text-gray-800 flex items-center gap-1.5 shadow-2xs hover:bg-gray-50 cursor-pointer"
              >
                <span>{timeframe}</span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Bar Chart Graphic Area */}
          <div className="pt-2">
            <div className="relative h-44 flex items-end justify-between px-2 pt-4 pb-6 border-b border-gray-300/70">
              
              {/* Y-Axis Horizontal Grid Lines & Labels */}
              <div className="absolute left-0 right-0 top-0 bottom-6 flex flex-col justify-between pointer-events-none text-[10px] text-gray-400 font-medium">
                <div className="border-b border-gray-300/40 w-full flex items-center">
                  <span className="-mt-3.5">60K</span>
                </div>
                <div className="border-b border-gray-300/40 w-full flex items-center">
                  <span className="-mt-3.5">40K</span>
                </div>
                <div className="border-b border-gray-300/40 w-full flex items-center">
                  <span className="-mt-3.5">20K</span>
                </div>
                <div className="w-full flex items-center">
                  <span className="-mt-3.5 pl-2">0</span>
                </div>
              </div>

              {/* Vertical Orange Bars */}
              <div className="w-full pl-8 flex items-end justify-between h-full z-10 gap-1.5 sm:gap-3">
                {weeklyData.map((item, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end group">
                    <div
                      style={{ height: `${(item.value / 60) * 100}%` }}
                      className="w-full max-w-[28px] bg-[#FA6200] rounded-lg transition-all duration-500 group-hover:bg-orange-600 group-hover:scale-105"
                      title={`${item.label}: ₹${item.value},000`}
                    />
                  </div>
                ))}
              </div>

            </div>

            {/* X-Axis Day Labels Row */}
            <div className="pl-8 flex items-center justify-between pt-2.5 px-2">
              {weeklyData.map((item, idx) => (
                <div key={idx} className="flex-1 text-center text-[11px] font-semibold text-gray-600">
                  {item.label}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* 6. Bottom Navigation Bar */}
      <div className="bg-white border-t border-gray-200/80 px-4 py-2 flex items-center justify-around relative z-20">
        
        {/* Home Tab */}
        <button
          onClick={() => handleTabClick('home')}
          className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${
            activeTab === 'home' ? 'text-[#FA6200]' : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <img src={HomeIcon} alt="Home" className="w-5 h-5" />
          <span className="text-[11px] font-semibold">Home</span>
        </button>

        {/* List Tab */}
        <button
          onClick={() => handleTabClick('list')}
          className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${
            activeTab === 'list' ? 'text-[#FA6200]' : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <img src={ListIcon} alt="List" className="w-5 h-5" />
          <span className="text-[11px] font-semibold">List</span>
        </button>

        {/* Center Floating Add Button */}
        <div className="relative -mt-6">
          <button
            onClick={() => handleTabClick('add')}
            className="w-13 h-13 rounded-full bg-[#FA6200] hover:bg-orange-600 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer border-4 border-white"
            aria-label="Add"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
          <span className="text-[11px] font-semibold text-gray-400 block text-center mt-0.5">
            Add
          </span>
        </div>

        {/* Notification Tab */}
        <button
          onClick={() => handleTabClick('notification')}
          className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${
            activeTab === 'notification' ? 'text-[#FA6200]' : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <img src={BellIcon} alt="Notification" className="w-5 h-5" />
          <span className="text-[11px] font-semibold">Notification</span>
        </button>

        {/* Profile Tab */}
        <button
          onClick={() => handleTabClick('profile')}
          className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${
            activeTab === 'profile' ? 'text-[#FA6200]' : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <img
            src={activeTab === 'profile' ? ProfileActiveIcon : ProfileInactiveIcon}
            alt="Profile"
            className="w-5 h-5"
          />
          <span className="text-[11px] font-semibold">Profile</span>
        </button>

      </div>

    </div>
  )
}
