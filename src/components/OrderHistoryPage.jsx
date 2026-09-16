import React, { useState } from 'react'
import { ChevronLeft } from 'lucide-react'

const ordersData = [
  {
    id: 1,
    number: '#1',
    invoiceId: '#32053',
    customerName: 'Kartik Patel',
    tableNo: '32',
    price: '300',
    type: 'Dining',
    date: '01/01/2024',
  },
  {
    id: 2,
    number: '#1',
    invoiceId: '#32053',
    customerName: 'Kartik Patel',
    tableNo: null,
    price: '300',
    type: 'Parcel',
    date: '01/01/2024',
  },
  {
    id: 3,
    number: '#1',
    invoiceId: '#32053',
    customerName: 'Kartik Patel',
    tableNo: null,
    price: '300',
    type: 'Parcel',
    date: '01/01/2024',
  },
  {
    id: 4,
    number: '#1',
    invoiceId: '#32053',
    customerName: 'Kartik Patel',
    tableNo: null,
    price: '300',
    type: 'Parcel',
    date: '01/01/2024',
  },
  {
    id: 5,
    number: '#1',
    invoiceId: '#32053',
    customerName: 'Kartik Patel',
    tableNo: '32',
    price: '300',
    type: 'Dining',
    date: '01/01/2024',
  },
  {
    id: 6,
    number: '#1',
    invoiceId: '#32053',
    customerName: 'Kartik Patel',
    tableNo: '32',
    price: '300',
    type: 'Dining',
    date: '01/01/2024',
  },
  {
    id: 7,
    number: '#1',
    invoiceId: '#32053',
    customerName: 'Kartik Patel',
    tableNo: '32',
    price: '300',
    type: 'Dining',
    date: '01/01/2024',
  },
]

export default function OrderHistoryPage({ onBack }) {
  const [startDate, setStartDate] = useState('2024-01-01')
  const [endDate, setEndDate] = useState('2024-01-31')

  return (
    <div className="relative w-full max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl bg-white min-h-screen sm:min-h-0 sm:max-h-[90vh] sm:rounded-3xl sm:shadow-2xl sm:border sm:border-gray-200 flex flex-col font-sans overflow-hidden transition-all duration-300">
      
      {/* Top Header */}
      <div className="px-5 pt-5 pb-3 md:px-8 md:pt-6 flex items-center justify-between border-b border-gray-100/80">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-1 rounded-full text-gray-800 hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Go back"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>
          <h1 className="text-xl font-bold text-gray-900 tracking-tight">Order History</h1>
        </div>

        {/* Date Filter Badges */}
        <div className="flex items-center gap-2">
          <div className="bg-[#F1F1F1] px-3 py-1.5 rounded-lg text-xs font-medium text-gray-700 flex items-center gap-1 cursor-pointer">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="bg-transparent text-xs font-semibold text-gray-800 focus:outline-none cursor-pointer"
            />
          </div>

          <div className="bg-[#F1F1F1] px-3 py-1.5 rounded-lg text-xs font-medium text-gray-700 flex items-center gap-1 cursor-pointer">
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="bg-transparent text-xs font-semibold text-gray-800 focus:outline-none cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Orders List Content */}
      <div className="px-5 py-5 md:px-8 md:py-6 overflow-y-auto no-scrollbar flex-1 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {ordersData.map((order) => (
            <div
              key={order.id}
              className="bg-[#F1F1F1] rounded-2xl p-4 flex items-center justify-between relative shadow-2xs hover:shadow-xs transition-shadow"
            >
              {/* Left: Number Badge Box */}
              <div className="w-16 h-16 rounded-2xl bg-[#D9D9D9] flex items-center justify-center font-bold text-xl text-gray-900 shrink-0">
                {order.number}
              </div>

              {/* Center: Main Details */}
              <div className="flex-1 ml-3.5 flex flex-col justify-center">
                <span className="text-[11px] font-medium text-[#FA6200] leading-tight">
                  Invoice ID: {order.invoiceId}
                </span>
                <h3 className="text-base font-bold text-gray-900 leading-snug">
                  {order.customerName}
                </h3>
                {order.tableNo && (
                  <span className="text-xs font-medium text-gray-500">
                    Table No: {order.tableNo}
                  </span>
                )}
                <span className="text-base font-bold text-[#FA6200] mt-0.5">
                  ₹ {order.price}
                </span>
              </div>

              {/* Right: Type Badge & Date */}
              <div className="flex flex-col items-end justify-between h-16 py-0.5 shrink-0">
                <span className="bg-[#FA6200] text-white text-[11px] font-medium px-3 py-0.5 rounded-full shadow-2xs">
                  {order.type}
                </span>
                <span className="text-xs font-medium text-gray-500">
                  {order.date}
                </span>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
