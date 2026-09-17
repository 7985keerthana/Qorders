import React, { useState } from "react"
import HomeIcon from "../assets/Home.svg"
import ListIconActive from "../assets/List.svg"
import BellIcon from "../assets/bell 1.svg"
import GroupIcon from "../assets/Group.svg"
import EditIcon from "../assets/edit 2.svg"
import TrashIcon from "../assets/trash 2.svg"

const initialItems = [
  { id: 1, name: "Dhokla", price: 50 },
  { id: 2, name: "Khaman", price: 50 },
  { id: 3, name: "Pasta",  price: 80 },
  { id: 4, name: "Dhokla", price: 50 },
  { id: 5, name: "Khaman", price: 50 },
  { id: 6, name: "Pasta",  price: 80 },
  { id: 7, name: "Dhokla", price: 50 },
  { id: 8, name: "Khaman", price: 50 },
  { id: 9, name: "Pasta",  price: 80 },
]

export default function MenuPage({ onBack, onAddItem, onNavigateHome }) {
  const [items, setItems] = useState(initialItems)
  const [activeTab, setActiveTab] = useState("list")

  const handleDelete = (id) => {
    setItems(prev => prev.filter(item => item.id !== id))
  }

  return (
    <div className="relative w-full max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl bg-white min-h-screen sm:min-h-0 sm:max-h-[90vh] sm:rounded-3xl sm:shadow-2xl sm:border sm:border-gray-200 flex flex-col font-sans overflow-hidden">

      {/* Header */}
      <div className="px-5 pt-6 pb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="text-gray-800 font-bold text-xl cursor-pointer">
            &lt;
          </button>
          <h1 className="text-xl font-bold text-gray-900">Menu</h1>
        </div>
        <button
          onClick={onAddItem}
          className="bg-[#FA6200] text-white text-sm font-semibold px-4 py-2 rounded-xl flex items-center gap-1.5 cursor-pointer hover:bg-orange-600 transition-colors"
        >
          <span className="text-lg leading-none">+</span>
          <span>Add</span>
        </button>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-y-auto no-scrollbar pb-24">
        {/* Table Header */}
        <div className="mx-5 bg-[#F5F5F5] rounded-xl px-4 py-3 grid grid-cols-[1fr_1fr_auto] gap-2 mb-1">
          <span className="text-sm font-semibold text-gray-700">Name</span>
          <span className="text-sm font-semibold text-gray-700">Price</span>
          <span className="text-sm font-semibold text-gray-700">Action</span>
        </div>

        {/* Table Rows */}
        <div className="mx-5 divide-y divide-gray-100">
          {items.map(item => (
            <div key={item.id} className="py-3.5 grid grid-cols-[1fr_1fr_auto] gap-2 items-center">
              <span className="text-sm text-gray-700">{item.name}</span>
              <span className="text-sm text-gray-700">{item.price}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={onAddItem}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                >
                  <img src={EditIcon} alt="Edit" className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                >
                  <img src={TrashIcon} alt="Delete" className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200/80 px-4 py-2 flex items-center justify-around z-20">

        {/* Home Tab */}
        <button
          onClick={() => onNavigateHome && onNavigateHome()}
          className="flex flex-col items-center gap-1 cursor-pointer transition-colors text-gray-400 hover:text-gray-600"
        >
          <img src={HomeIcon} alt="Home" className="w-5 h-5 opacity-50" />
          <span className="text-[11px] font-semibold">Home</span>
        </button>

        {/* List Tab (active) */}
        <button
          className="flex flex-col items-center gap-1 cursor-pointer text-[#FA6200]"
        >
          <img src={ListIconActive} alt="List" className="w-5 h-5" />
          <span className="text-[11px] font-semibold">List</span>
        </button>

        {/* Center Add Button */}
        <div className="relative -mt-6">
          <button
            onClick={onAddItem}
            className="w-13 h-13 rounded-full bg-[#FA6200] hover:bg-orange-600 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer border-4 border-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
          <span className="text-[11px] font-semibold text-gray-400 block text-center mt-0.5">Add</span>
        </div>

        {/* Notification Tab */}
        <button className="flex flex-col items-center gap-1 cursor-pointer text-gray-400 hover:text-gray-600">
          <img src={BellIcon} alt="Notification" className="w-5 h-5 opacity-40" />
          <span className="text-[11px] font-semibold">Notification</span>
        </button>

        {/* Profile Tab */}
        <button className="flex flex-col items-center gap-1 cursor-pointer text-gray-400 hover:text-gray-600">
          <img src={GroupIcon} alt="Profile" className="w-5 h-5" />
          <span className="text-[11px] font-semibold">Profile</span>
        </button>

      </div>
    </div>
  )
}
