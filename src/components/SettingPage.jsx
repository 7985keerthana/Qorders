import React, { useState } from 'react'
import { ChevronLeft, CheckCircle } from 'lucide-react'

const languages = ['Telugu', 'English', 'Hindi']

export default function SettingPage({ onBack, onChangePassword }) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [selectedLang, setSelectedLang] = useState('English')
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [toast, setToast] = useState({ show: false, message: '' })

  const showToast = (message) => {
    setToast({ show: true, message })
    setTimeout(() => setToast({ show: false, message: '' }), 2500)
  }

  const handleToggleTheme = () => {
    setIsDarkMode((prev) => {
      const nextState = !prev
      showToast(nextState ? 'Dark theme enabled' : 'Light theme enabled')
      return nextState
    })
  }

  const handleSelectLang = (lang) => {
    setSelectedLang(lang)
    setIsLangOpen(false)
    showToast(`Language set to ${lang}`)
  }

  const handleChangePassword = () => {
    if (onChangePassword) {
      onChangePassword()
    } else {
      showToast('Navigate to Change Password...')
    }
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

      {/* Top Header */}
      <div className="px-5 pt-5 pb-3 md:px-8 md:pt-6 flex items-center gap-3 border-b border-gray-100/80">
        <button
          onClick={onBack}
          className="p-1 rounded-full text-gray-800 hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Go back"
        >
          <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
        </button>
        <h1 className="text-xl font-bold text-gray-900 tracking-tight">Setting</h1>
      </div>

      {/* Settings Content Body */}
      <div className="px-5 py-5 md:px-8 md:py-6 overflow-y-auto flex-1 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Card 1: Themes with Toggle Switch */}
          <div className="bg-[#F1F1F1] rounded-2xl p-4 flex items-center justify-between shadow-2xs">
            <span className="font-semibold text-gray-900 text-sm">Themes</span>
            
            {/* Custom Toggle Switch */}
            <button
              type="button"
              onClick={handleToggleTheme}
              className={`w-11 h-6 rounded-full relative p-0.5 transition-colors cursor-pointer focus:outline-none ${
                isDarkMode ? 'bg-[#FA6200]' : 'bg-[#D1D5DB]'
              }`}
              aria-label="Toggle theme"
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform ${
                  isDarkMode ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Card 2: Change Password */}
          <div
            onClick={handleChangePassword}
            className="bg-[#F1F1F1] rounded-2xl p-4 flex items-center justify-between shadow-2xs cursor-pointer hover:bg-gray-200/80 transition-colors"
          >
            <span className="font-semibold text-gray-900 text-sm">Change Password</span>
          </div>

          {/* Card 3: Language with Dropdown Menu */}
          <div className="relative md:col-span-2">
            <div
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="bg-[#F1F1F1] rounded-2xl p-4 flex items-center justify-between shadow-2xs cursor-pointer select-none"
            >
              <span className="font-semibold text-gray-900 text-sm">Language</span>
              <span className="text-xs font-semibold text-gray-500">{selectedLang}</span>
            </div>

            {/* Language Dropdown Menu Card */}
            {isLangOpen && (
              <div className="absolute right-3 top-2 bg-[#EFEFEF] rounded-2xl shadow-xl border border-gray-200/90 overflow-hidden z-20 py-1.5 w-32 text-center animate-in fade-in duration-150">
                {languages.map((lang) => {
                  const isSelected = lang === selectedLang
                  return (
                    <div
                      key={lang}
                      onClick={() => handleSelectLang(lang)}
                      className={`py-2 px-3 text-sm cursor-pointer transition-colors ${
                        isSelected
                          ? 'bg-[#C2C2C2] font-semibold text-gray-900'
                          : 'hover:bg-gray-200/80 font-medium text-gray-800'
                      }`}
                    >
                      {lang}
                    </div>
                  )
                })}
              </div>
            )}
          </div>

        </div>
      </div>

    </div>
  )
}
