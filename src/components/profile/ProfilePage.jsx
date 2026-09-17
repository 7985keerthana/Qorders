import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react'
import EditProfilePage from './EditProfilePage'
import ChefPage from './ChefPage'
import CreateChefPage from './CreateChefPage'
import CuisinesPage from './CuisinesPage'
import OrderHistoryPage from './OrderHistoryPage'
import ReviewModal from './ReviewModal'
import DiscountModal from './DiscountModal'
import OrderWaterBottleModal from './OrderWaterBottleModal'
import LogoutModal from './LogoutModal'
import TermsPage from './TermsPage'
import SupportPage from './SupportPage'
import SettingPage from './SettingPage'
import ChangePasswordPage from './ChangePasswordPage'

// Importing icons from assets
import nameIcon from '../../assets/Name.svg'
import badgePercentIcon from '../../assets/badge-percent 1.svg'
import hatChefIcon from '../../assets/hat-chef 1.svg'
import inventoryAltIcon from '../../assets/inventory-alt 1.svg'
import logoutIcon from '../../assets/logout.svg'
import settingsIcon from '../../assets/settings 1.svg'
import starIcon from '../../assets/star.svg'
import termsCheckIcon from '../../assets/terms-check 1.svg'
import userHeadsetIcon from '../../assets/user-headset 1.svg'

const accountsList = [
  { id: 1, title: 'Personal Info', icon: nameIcon },
  { id: 2, title: 'Cuisines', icon: inventoryAltIcon },
  { id: 3, title: 'Menu', icon: inventoryAltIcon },
  { id: 4, title: 'Miscellaneous Items', icon: inventoryAltIcon },
  { id: 5, title: 'Item Master', icon: inventoryAltIcon },
  { id: 6, title: 'Recipes Master', icon: inventoryAltIcon },
  { id: 7, title: 'Chefs', icon: hatChefIcon },
  { id: 8, title: 'Order History', icon: inventoryAltIcon },
]

const moreList = [
  { id: 1, title: 'Review', icon: starIcon },
  { id: 2, title: 'Discount', icon: badgePercentIcon },
  { id: 3, title: 'Order Water Bottle', icon: badgePercentIcon },
  { id: 4, title: 'Support', icon: userHeadsetIcon },
  { id: 5, title: 'Privacy Policy', icon: nameIcon },
  { id: 6, title: 'Term & Condition', icon: termsCheckIcon },
  { id: 7, title: 'Setting', icon: settingsIcon },
  { id: 8, title: 'Log out', icon: logoutIcon },
]

export default function ProfilePage({ onLogout, onBack }) {
  const [currentView, setCurrentView] = useState('main') // 'main' | 'edit' | 'cuisines' | 'chefs' | 'createChef' | 'orderHistory' | 'terms' | 'privacy' | 'support' | 'setting' | 'changePassword'
  const [showReviewModal, setShowReviewModal] = useState(false)
  const [showDiscountModal, setShowDiscountModal] = useState(false)
  const [showWaterBottleModal, setShowWaterBottleModal] = useState(false)
  const [showLogoutModal, setShowLogoutModal] = useState(false)
  const [toast, setToast] = useState({ show: false, message: '' })

  const showToast = (message) => {
    setToast({ show: true, message })
    setTimeout(() => setToast({ show: false, message: '' }), 3000)
  }

  const handleItemClick = (title) => {
    if (title === 'Personal Info') {
      setCurrentView('edit')
    } else if (title === 'Cuisines') {
      setCurrentView('cuisines')
    } else if (title === 'Chefs') {
      setCurrentView('chefs')
    } else if (title === 'Order History') {
      setCurrentView('orderHistory')
    } else if (title === 'Review') {
      setShowReviewModal(true)
    } else if (title === 'Discount') {
      setShowDiscountModal(true)
    } else if (title === 'Order Water Bottle') {
      setShowWaterBottleModal(true)
    } else if (title === 'Support') {
      setCurrentView('support')
    } else if (title === 'Term & Condition') {
      setCurrentView('terms')
    } else if (title === 'Privacy Policy') {
      setCurrentView('privacy')
    } else if (title === 'Setting') {
      setCurrentView('setting')
    } else if (title === 'Log out') {
      setShowLogoutModal(true)
    }
  }

  const handleDiscountSubmit = (value) => {
    setShowDiscountModal(false)
    if (value) {
      showToast(`Discount "${value}" applied successfully!`)
    } else {
      showToast('Discount submitted successfully!')
    }
  }

  const handleWaterBottleSubmit = ({ selectedSize, lotSize }) => {
    setShowWaterBottleModal(false)
    const lotMsg = lotSize ? ` (Lot size: ${lotSize})` : ''
    showToast(`Water bottle order placed for ${selectedSize}${lotMsg}!`)
  }

  const handleLogoutConfirm = () => {
    setShowLogoutModal(false)
    showToast('Logged out successfully!')
    if (onLogout) {
      setTimeout(() => onLogout(), 800)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center sm:py-6 sm:px-4 relative font-sans">
      
      {/* Toast Notification */}
      {toast.show && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-gray-900/95 text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-3 text-sm font-semibold border border-gray-900 animate-in fade-in slide-in-from-top-4 duration-300">
          <CheckCircle className="w-5 h-5 text-[#FA6200]" />
          <span>{toast.message}</span>
        </div>
      )}

      {/* Review Modal Popup */}
      {showReviewModal && (
        <ReviewModal
          onClose={() => setShowReviewModal(false)}
          reviewUrl="https://g.co/kgs/8hUXnYs"
        />
      )}

      {/* Discount Modal Popup */}
      {showDiscountModal && (
        <DiscountModal
          onClose={() => setShowDiscountModal(false)}
          onSubmit={handleDiscountSubmit}
        />
      )}

      {/* Order Water Bottle Modal Popup */}
      {showWaterBottleModal && (
        <OrderWaterBottleModal
          onClose={() => setShowWaterBottleModal(false)}
          onSubmit={handleWaterBottleSubmit}
        />
      )}

      {/* Logout Modal Popup */}
      {showLogoutModal && (
        <LogoutModal
          onClose={() => setShowLogoutModal(false)}
          onConfirm={handleLogoutConfirm}
        />
      )}

      {currentView === 'edit' ? (
        <EditProfilePage onBack={() => setCurrentView('main')} />
      ) : currentView === 'cuisines' ? (
        <CuisinesPage onBack={() => setCurrentView('main')} />
      ) : currentView === 'chefs' ? (
        <ChefPage
          onBack={() => setCurrentView('main')}
          onCreateChef={() => setCurrentView('createChef')}
        />
      ) : currentView === 'createChef' ? (
        <CreateChefPage
          onBack={() => setCurrentView('chefs')}
          onSave={() => setCurrentView('chefs')}
        />
      ) : currentView === 'orderHistory' ? (
        <OrderHistoryPage onBack={() => setCurrentView('main')} />
      ) : currentView === 'support' ? (
        <SupportPage onBack={() => setCurrentView('main')} />
      ) : currentView === 'setting' ? (
        <SettingPage
          onBack={() => setCurrentView('main')}
          onChangePassword={() => setCurrentView('changePassword')}
        />
      ) : currentView === 'changePassword' ? (
        <ChangePasswordPage onBack={() => setCurrentView('setting')} />
      ) : currentView === 'terms' ? (
        <TermsPage onBack={() => setCurrentView('main')} title="Term & Condition" />
      ) : currentView === 'privacy' ? (
        <TermsPage onBack={() => setCurrentView('main')} title="Privacy Policy" />
      ) : (
        /* Main Responsive Container */
        <div className="w-full max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl bg-white min-h-screen sm:min-h-0 sm:max-h-[90vh] sm:rounded-3xl sm:shadow-2xl sm:border sm:border-gray-200 flex flex-col font-sans overflow-hidden transition-all duration-300">
          
          {/* Top Header */}
          <div className="px-5 pt-5 pb-3 md:px-8 md:pt-6 flex items-center gap-3 border-b border-gray-100/80">
            <button
              onClick={onBack}
              className="p-1 rounded-full text-gray-800 hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Back to Home"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
            </button>
            <h1 className="text-xl font-bold text-gray-900 tracking-tight">Profile</h1>
          </div>

          {/* Content Body */}
          <div className="px-5 py-5 md:px-8 md:py-6 space-y-6 overflow-y-auto no-scrollbar flex-1">

            {/* Profile Header Card -> Navigates to Edit Profile Page on Click */}
            <div
              onClick={() => setCurrentView('edit')}
              className="bg-[#F1F1F1] rounded-2xl p-4 md:p-5 flex items-center justify-between shadow-xs hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full border-2 border-[#FA6200] bg-[#FA6200]/15 flex items-center justify-center text-[#FA6200] font-bold text-lg shadow-xs">
                  KP
                </div>
                <span className="font-bold text-gray-900 text-base md:text-lg">Kartik Patel</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
            </div>

            {/* Grid Layout for Accounts & More Sections on Desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Accounts Section */}
              <div>
                <h2 className="text-sm font-semibold text-gray-700 mb-2 px-1">Accounts</h2>
                <div className="bg-[#F1F1F1] rounded-2xl px-4 py-1 flex flex-col">
                  {accountsList.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleItemClick(item.title)}
                      className="flex items-center gap-3.5 group cursor-pointer hover:opacity-90 transition-opacity"
                    >
                      {/* Icon with 15% opacity background tint */}
                      <div className="w-9 h-9 rounded-full bg-[#FA6200]/15 flex items-center justify-center p-2 shrink-0 my-2">
                        <img src={item.icon} alt={item.title} className="w-5 h-5 object-contain" />
                      </div>
                      
                      {/* Text & Darker Border starting right after icon */}
                      <div className="flex-1 flex items-center justify-between py-3.5 border-b border-gray-300 group-last:border-b-0">
                        <span className="text-sm font-medium text-gray-800">{item.title}</span>
                        <ChevronRight className="w-4 h-4 text-white group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* More Section */}
              <div>
                <h2 className="text-sm font-semibold text-gray-700 mb-2 px-1">More</h2>
                <div className="bg-[#F1F1F1] rounded-2xl px-4 py-1 flex flex-col">
                  {moreList.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleItemClick(item.title)}
                      className="flex items-center gap-3.5 group cursor-pointer hover:opacity-90 transition-opacity"
                    >
                      {/* Icon with 15% opacity background tint */}
                      <div className="w-9 h-9 rounded-full bg-[#FA6200]/15 flex items-center justify-center p-2 shrink-0 my-2">
                        <img src={item.icon} alt={item.title} className="w-5 h-5 object-contain" />
                      </div>

                      {/* Text & Darker Border starting right after icon */}
                      <div className="flex-1 flex items-center justify-between py-3.5 border-b border-gray-300 group-last:border-b-0">
                        <span className="text-sm font-medium text-gray-800">{item.title}</span>
                        <ChevronRight className="w-4 h-4 text-white group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      )}
    </div>
  )
}
