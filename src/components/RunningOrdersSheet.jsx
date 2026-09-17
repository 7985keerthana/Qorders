import React, { useState } from "react"

const sampleOrders = [
  { id: 1, invoiceId: "#32053", name: "Kartik Patel", table: "Table No: 32", amount: "300", date: "01/01/2024", type: "Dining" },
  { id: 2, invoiceId: "#32053", name: "Kartik Patel", table: "Table No: 32", amount: "300", date: "01/01/2024", type: "Dining" },
  { id: 3, invoiceId: "#32053", name: "Kartik Patel", table: "Table No: 32", amount: "300", date: "01/01/2024", type: "Dining" },
  { id: 4, invoiceId: "#32053", name: "Kartik Patel", table: "Table No: 32", amount: "300", date: "01/01/2024", type: "Dining" },
  { id: 5, invoiceId: "#32053", name: "Kartik Patel", table: "Table No: 32", amount: "300", date: "01/01/2024", type: "Dining" },
]

export default function RunningOrdersSheet({ onClose }) {
  const [orderStates, setOrderStates] = useState(
    sampleOrders.reduce((acc, o) => ({ ...acc, [o.id]: null }), {})
  )

  const handleAction = (id, action) => {
    setOrderStates(prev => ({ ...prev, [id]: action }))
  }

  return (
    <div
      className="absolute inset-0 z-30 flex flex-col justify-end"
      style={{ background: "rgba(0,0,0,0.45)" }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-t-3xl px-5 pt-4 pb-6 flex flex-col max-h-[78%]"
        onClick={e => e.stopPropagation()}
        style={{ animation: "slideUp 0.3s ease-out" }}
      >
        <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-4" />

        <h2 className="text-xl font-bold text-gray-900 mb-4">
          {String(sampleOrders.length).padStart(2, "0")} Running Orders
        </h2>

        <div className="overflow-y-auto space-y-3 pr-0.5 no-scrollbar">
          {sampleOrders.map(order => (
            <div key={order.id} className="bg-[#F5F5F5] rounded-2xl p-4 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-gray-300 rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-base font-bold text-gray-800">#1</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-[#FA6200] mb-0.5">Invoice ID: {order.invoiceId}</p>
                  <p className="text-sm font-bold text-gray-900 leading-tight">{order.name}</p>
                  <p className="text-xs text-gray-500">{order.table}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-sm font-bold text-[#FA6200]">Rs.{order.amount}</span>
                    <span className="text-xs text-gray-500">{order.date}</span>
                  </div>
                </div>
                <span className="bg-[#FA6200] text-white text-[10px] font-semibold px-2.5 py-1 rounded-full shrink-0">
                  {order.type}
                </span>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => handleAction(order.id, "completed")}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                    orderStates[order.id] === "completed"
                      ? "bg-green-500 text-white"
                      : "bg-[#FA6200] text-white hover:bg-orange-600"
                  }`}
                >
                  {orderStates[order.id] === "completed" ? "Completed v" : "Completed"}
                </button>
                <button
                  onClick={() => handleAction(order.id, "declined")}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-semibold border transition-all cursor-pointer ${
                    orderStates[order.id] === "declined"
                      ? "bg-red-500 text-white border-red-500"
                      : "bg-white text-gray-400 border-gray-300 hover:border-gray-400"
                  }`}
                >
                  {orderStates[order.id] === "declined" ? "Declined x" : "Declined"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  )
}
