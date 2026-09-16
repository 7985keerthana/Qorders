import React, { useState } from 'react'
import { X, Copy, ExternalLink, CheckCircle } from 'lucide-react'

export default function ReviewModal({ onClose, reviewUrl = 'https://g.co/kgs/8hUXnYs' }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(reviewUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
      {/* Modal Container */}
      <div className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl relative font-sans space-y-4 border border-gray-100 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">Review</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="space-y-3 pt-1">
          <label className="block text-xs font-semibold text-gray-600">
            Google Review Link
          </label>

          {/* Link Display Box */}
          <div className="bg-[#F1F1F1] rounded-2xl p-3.5 flex items-center justify-between gap-2 border border-gray-200">
            <span className="text-xs font-medium text-gray-800 truncate select-all">
              {reviewUrl}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2.5 pt-2">
            <button
              onClick={handleCopy}
              className="flex-1 py-2.5 px-4 rounded-full bg-[#FA6200] hover:bg-orange-600 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-xs cursor-pointer"
            >
              {copied ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Link</span>
                </>
              )}
            </button>

            <a
              href={reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 rounded-full border border-gray-300 hover:bg-gray-100 text-gray-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
