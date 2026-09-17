import React, { useState } from "react"
import ImageIcon from "../assets/Image.svg"

export default function EditItemPage({ onBack, onSubmit }) {
  const [form, setForm] = useState({
    name: "Paneer Chilli",
    price: "300",
    cuisine: "Biriyani",
    priceWithTax: "inclusive",
    taxPercentage: "5",
    extras: { "Extra Panner": true, "Cold Drink": false, "Extra Masala": true },
    description: "Lorem ipsum dolor sit amet, consectetur...",
  })

  const cuisineOptions = ["Biriyani", "Chinese", "Italian", "Indian", "Continental"]
  const miscItems = ["Extra Panner", "Cold Drink", "Extra Masala"]

  const toggleExtra = (item) => {
    setForm(prev => ({
      ...prev,
      extras: { ...prev.extras, [item]: !prev.extras[item] }
    }))
  }

  return (
    <div className="relative w-full max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl bg-white min-h-screen sm:min-h-0 sm:max-h-[90vh] sm:rounded-3xl sm:shadow-2xl sm:border sm:border-gray-200 flex flex-col font-sans overflow-hidden">

      {/* Header */}
      <div className="px-5 pt-6 pb-3 flex items-center gap-3 shrink-0">
        <button onClick={onBack} className="text-gray-800 font-bold text-xl cursor-pointer">
          &lt;
        </button>
        <h1 className="text-xl font-bold text-gray-900">Edit Item</h1>
      </div>

      {/* Scrollable Form */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-5 pb-8 space-y-4">

        {/* Upload Photo */}
        <div>
          <p className="text-sm font-semibold text-gray-800 mb-2">Upload Photo</p>
          <div className="w-full border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center py-8 gap-2 cursor-pointer hover:border-[#FA6200] transition-colors bg-[#F9F9F9]">
            <img src={ImageIcon} alt="Upload" className="w-12 h-12 opacity-60" />
            <p className="text-[#FA6200] text-sm font-semibold">Add Food Photo</p>
            <p className="text-xs text-gray-400">(up to 12 Mb)</p>
          </div>
        </div>

        {/* Add Item Name */}
        <div>
          <label className="text-sm font-semibold text-gray-800 block mb-1.5">Add Item Name</label>
          <input
            type="text"
            value={form.name}
            onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
            className="w-full border border-[#FA6200] rounded-2xl px-4 py-3 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-[#FA6200]/30"
          />
        </div>

        {/* Price */}
        <div>
          <label className="text-sm font-semibold text-gray-800 block mb-1.5">Price</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-600">Rs.</span>
            <input
              type="number"
              value={form.price}
              onChange={e => setForm(p => ({ ...p, price: e.target.value }))}
              className="w-full border border-[#FA6200] rounded-2xl pl-10 pr-4 py-3 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-[#FA6200]/30"
            />
          </div>
        </div>

        {/* Select Cuisine */}
        <div>
          <label className="text-sm font-semibold text-gray-800 block mb-1.5">Select Cuisine</label>
          <div className="relative">
            <select
              value={form.cuisine}
              onChange={e => setForm(p => ({ ...p, cuisine: e.target.value }))}
              className="w-full border border-[#FA6200] rounded-2xl px-4 py-3 text-sm text-gray-800 outline-none appearance-none bg-white cursor-pointer focus:ring-2 focus:ring-[#FA6200]/30"
            >
              {cuisineOptions.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Price With Tax */}
        <div>
          <label className="text-sm font-semibold text-gray-800 block mb-2">Price With Tax</label>
          <div className="space-y-2">
            {[
              { val: "inclusive", label: "Inclusive of tax in invoice" },
              { val: "exclusive", label: "Exclusive of tax in invoice" },
            ].map(opt => (
              <label key={opt.val} className="flex items-center gap-2.5 cursor-pointer">
                <div
                  onClick={() => setForm(p => ({ ...p, priceWithTax: opt.val }))}
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                    form.priceWithTax === opt.val
                      ? "bg-blue-500 border-blue-500"
                      : "border-gray-400 bg-white"
                  }`}
                >
                  {form.priceWithTax === opt.val && (
                    <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
                <span className="text-sm text-gray-700">{opt.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Tax Percentage */}
        <div>
          <label className="text-sm font-semibold text-gray-800 block mb-1.5">Tax Percentage</label>
          <div className="relative">
            <input
              type="number"
              value={form.taxPercentage}
              onChange={e => setForm(p => ({ ...p, taxPercentage: e.target.value }))}
              className="w-full border border-[#FA6200] rounded-2xl px-4 py-3 pr-10 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-[#FA6200]/30"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-gray-500">%</span>
          </div>
        </div>

        {/* Miscellaneous Items */}
        <div>
          <label className="text-sm font-semibold text-gray-800 block mb-2">Miscellaneous items</label>
          <div className="space-y-2">
            {miscItems.map(item => (
              <label key={item} className="flex items-center gap-2.5 cursor-pointer" onClick={() => toggleExtra(item)}>
                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
                  form.extras[item] ? "bg-blue-500 border-blue-500" : "border-gray-400 bg-white"
                }`}>
                  {form.extras[item] && (
                    <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
                <span className="text-sm text-gray-700">{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="text-sm font-semibold text-gray-800 block mb-1.5">Description</label>
          <textarea
            value={form.description}
            onChange={e => setForm(p => ({ ...p, description: e.target.value }))}
            rows={3}
            className="w-full border border-[#FA6200] rounded-2xl px-4 py-3 text-sm text-gray-800 outline-none resize-none focus:ring-2 focus:ring-[#FA6200]/30"
          />
        </div>

        {/* Submit / Cancel Buttons */}
        <div className="flex gap-3 pt-1 pb-4">
          <button
            onClick={onSubmit || onBack}
            className="flex-1 bg-[#FA6200] text-white font-semibold py-3.5 rounded-2xl hover:bg-orange-600 transition-colors cursor-pointer"
          >
            Submit
          </button>
          <button
            onClick={onBack}
            className="flex-1 bg-white text-gray-400 font-semibold py-3.5 rounded-2xl border border-gray-300 hover:border-gray-400 transition-colors cursor-pointer"
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  )
}
