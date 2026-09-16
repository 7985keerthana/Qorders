import React, { useState } from 'react'
import { ChevronLeft, Search, Plus, CheckCircle } from 'lucide-react'

// Importing edit and trash icons from assets
import editIcon from '../assets/edit 2.svg'
import trashIcon from '../assets/trash 2.svg'

const initialCuisines = [
  { id: 1, name: 'Chines' },
  { id: 2, name: 'Panjabi' },
  { id: 3, name: 'South' },
  { id: 4, name: 'Gujarati' },
  { id: 5, name: 'Panjabi' },
  { id: 6, name: 'South' },
  { id: 7, name: 'Gujarati' },
]

export default function CuisinesPage({ onBack }) {
  const [cuisines, setCuisines] = useState(initialCuisines)
  const [searchTerm, setSearchTerm] = useState('')
  const [toast, setToast] = useState({ show: false, message: '' })

  const showToast = (message) => {
    setToast({ show: true, message })
    setTimeout(() => setToast({ show: false, message: '' }), 3000)
  }

  const handleDelete = (id, name) => {
    setCuisines((prev) => prev.filter((item) => item.id !== id))
    showToast(`${name} deleted successfully`)
  }

  const handleEdit = (name) => {
    showToast(`Editing ${name}...`)
  }

  const handleCreate = () => {
    const newName = prompt('Enter new Cuisine Name:')
    if (newName && newName.trim()) {
      const newCuisine = { id: Date.now(), name: newName.trim() }
      setCuisines((prev) => [newCuisine, ...prev])
      showToast(`${newName.trim()} added successfully`)
    }
  }

  const filteredCuisines = cuisines.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
      <div className="px-5 pt-5 pb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-1 rounded-full text-gray-800 hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Go back"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>
          <h1 className="text-xl font-bold text-gray-900 tracking-tight">Cuisines</h1>
        </div>

        {/* + Create Button */}
        <button
          onClick={handleCreate}
          className="bg-[#FA6200] hover:bg-orange-600 text-white px-3.5 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-1 transition-colors shadow-xs cursor-pointer"
        >
          <Plus className="w-4 h-4 stroke-[3]" />
          <span>Create</span>
        </button>
      </div>

      {/* Content Area */}
      <div className="px-5 pb-8 space-y-4 overflow-y-auto no-scrollbar flex-1">
        
        {/* Search Bar */}
        <div className="bg-[#F1F1F1] rounded-2xl px-4 py-3 flex items-center gap-2.5">
          <Search className="w-5 h-5 text-gray-400 shrink-0" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search here..."
            className="w-full bg-transparent text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none"
          />
        </div>

        {/* Table Header Bar */}
        <div className="bg-[#F1F1F1] rounded-xl px-4 py-3 flex items-center justify-between">
          <span className="font-bold text-gray-900 text-base">Name</span>
          <span className="font-bold text-gray-900 text-base">Action</span>
        </div>

        {/* Cuisines Rows List */}
        <div className="flex flex-col">
          {filteredCuisines.length > 0 ? (
            filteredCuisines.map((cuisine) => (
              <div
                key={cuisine.id}
                className="px-4 py-3.5 flex items-center justify-between border-b border-gray-300/80 last:border-b-0 group hover:bg-gray-50/50 transition-colors"
              >
                <span className="text-sm font-medium text-gray-500">{cuisine.name}</span>
                <div className="flex items-center gap-3">
                  {/* Edit Button */}
                  <button
                    onClick={() => handleEdit(cuisine.name)}
                    className="p-1 text-gray-500 hover:opacity-75 transition-opacity cursor-pointer"
                    aria-label={`Edit ${cuisine.name}`}
                  >
                    <img src={editIcon} alt="Edit" className="w-5 h-5 object-contain" />
                  </button>

                  {/* Trash Button */}
                  <button
                    onClick={() => handleDelete(cuisine.id, cuisine.name)}
                    className="p-1 text-gray-500 hover:opacity-75 transition-opacity cursor-pointer"
                    aria-label={`Delete ${cuisine.name}`}
                  >
                    <img src={trashIcon} alt="Trash" className="w-5 h-5 object-contain" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="py-8 text-center text-sm text-gray-400">
              No cuisines found matching "{searchTerm}"
            </div>
          )}
        </div>

      </div>

    </div>
  )
}
