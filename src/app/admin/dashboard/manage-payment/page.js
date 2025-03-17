"use client";
import { useState } from "react";
import { FaFileInvoice, FaCheckCircle, FaTimesCircle, FaCreditCard } from "react-icons/fa";

export default function PaymentHistoryPage() {
  const [payments] = useState([
    { id: 1, date: "March 10, 2025", amount: "$250", status: "paid", invoice: "INV-001" },
    { id: 2, date: "April 5, 2025", amount: "$400", status: "pending", invoice: "INV-002" },
    { id: 3, date: "Jan 15, 2025", amount: "$150", status: "failed", invoice: "INV-003" },
  ]);

  return (
    <div className=" sm:p-6 space-y-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold text-green-800">Payment History</h1>
      </div>

      <div className="hidden sm:block  p-6 rounded-lg shadow-sm overflow-x-auto">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Recent Transactions</h2>
        {payments.length > 0 ? (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-600 uppercase text-sm">
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Amount</th>
                <th className="py-3 px-4 text-center">Status</th>
                <th className="py-3 px-4 text-center">Invoice</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm">
              {payments.map((payment) => (
                <tr key={payment.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-4">{payment.date}</td>
                  <td className="py-3 px-4">{payment.amount}</td>
                  <td className="py-3 px-4 text-center">
                    {payment.status === "paid" && (
                      <span className="text-green-500 font-semibold flex items-center justify-center">
                        <FaCheckCircle className="mr-1" /> Paid
                      </span>
                    )}
                    {payment.status === "pending" && (
                      <span className="text-yellow-500 font-semibold flex items-center justify-center">
                        <FaCreditCard className="mr-1" /> Pending
                      </span>
                    )}
                    {payment.status === "failed" && (
                      <span className="text-red-500 font-semibold flex items-center justify-center">
                        <FaTimesCircle className="mr-1" /> Failed
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <button className="text-blue-500 hover:text-blue-700 flex items-center justify-center">
                      <FaFileInvoice className="mr-1" /> View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500 mt-4">No payment history available.</p>
        )}
      </div>

      <div className="sm:hidden space-y-4">
        {payments.length > 0 ? (
          payments.map((payment) => (
            <div key={payment.id} className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-gray-900 font-semibold">{payment.date}</h3>
                  <p className="text-gray-600">{payment.amount}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-white text-xs font-bold ${
                    payment.status === "paid"
                      ? "bg-green-500"
                      : payment.status === "pending"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                >
                  {payment.status}
                </span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <button className="text-blue-500 hover:text-blue-700 flex items-center">
                  <FaFileInvoice className="mr-1" /> View Invoice
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No payment history available.</p>
        )}
      </div>
    </div>
  );
}
