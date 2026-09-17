import React from 'react'
import logoIcon from '../assets/Frame 1.svg'

export default function SplashPage({ onStart }) {
  return (
    <div
      onClick={onStart}
      className="relative w-full max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl bg-white min-h-screen sm:min-h-[500px] sm:max-h-[90vh] sm:rounded-3xl sm:shadow-2xl sm:border sm:border-gray-200 flex flex-col items-center justify-center font-sans overflow-hidden cursor-pointer select-none transition-all duration-300"
    >
      {/* Centered QOrder Logo */}
      <div className="flex flex-col items-center justify-center px-6 animate-in fade-in zoom-in-95 duration-700">
        <img
          src={logoIcon}
          alt="QOrder Logo"
          className="w-52 sm:w-60 md:w-72 h-auto object-contain transition-transform hover:scale-105"
        />
      </div>

      {/* Subtle indicator hint */}
      <div className="absolute bottom-8 text-xs text-gray-400 animate-pulse font-medium">
        Click anywhere or wait to continue
      </div>
    </div>
  )
}
