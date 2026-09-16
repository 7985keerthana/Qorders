import React from 'react'
import { ChevronLeft } from 'lucide-react'

const termsData = [
  {
    id: 'i',
    title: 'i) Lorem ipsum dolor sit amet',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 'ii',
    title: 'ii) Lorem ipsum dolor sit amet consectetur',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 'iii',
    title: 'iii) Lorem ipsum dolor sit amet',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 'iv',
    title: 'iv) Lorem ipsum dolor sit amet consectetur',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 'v',
    title: 'v) Lorem ipsum dolor sit amet',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 'vi',
    title: 'vi) Lorem ipsum dolor sit amet consectetur',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 'vii',
    title: 'vii) Lorem ipsum dolor sit amet',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

export default function TermsPage({ onBack, title = 'Term & Condition' }) {
  return (
    <div className="relative w-full max-w-md bg-white min-h-screen sm:min-h-[750px] sm:h-[812px] sm:rounded-[36px] sm:shadow-2xl sm:border sm:border-gray-200 flex flex-col font-sans overflow-hidden">
      
      {/* Top Header */}
      <div className="px-5 pt-5 pb-3 flex items-center gap-3">
        <button
          onClick={onBack}
          className="p-1 rounded-full text-gray-800 hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Go back"
        >
          <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
        </button>
        <h1 className="text-xl font-bold text-gray-900 tracking-tight">{title}</h1>
      </div>

      {/* Terms List Content */}
      <div className="px-5 py-4 space-y-5 overflow-y-auto no-scrollbar flex-1 pb-8">
        {termsData.map((item) => (
          <div key={item.id} className="space-y-1">
            <h2 className="text-sm font-semibold text-gray-900">{item.title}</h2>
            <p className="text-xs text-gray-400 leading-relaxed font-normal">
              {item.content}
            </p>
          </div>
        ))}
      </div>

    </div>
  )
}
