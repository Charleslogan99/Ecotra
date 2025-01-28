'use client'
import { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaCreditCard, FaCalendarAlt, FaHeadset, FaShieldAlt, FaMoneyBillAlt } from 'react-icons/fa';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 text-gray-800">
      <h2 className="text-4xl font-extrabold text-green-700 text-center mb-12">Frequently Asked Questions</h2>
      
      <div className="space-y-8">
        {/* Question 1 */}
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all ease-in-out duration-300">
          <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleAccordion(0)}>
            <div className="flex items-center space-x-4">
              <FaCalendarAlt className="text-green-700 text-2xl" />
              <h3 className="text-2xl font-semibold text-gray-800">How can I book a trip on Ecotra?</h3>
            </div>
            {openIndex === 0 ? (
              <FaChevronUp className="text-green-700 text-2xl transform transition-all duration-300" />
            ) : (
              <FaChevronDown className="text-green-700 text-2xl transform transition-all duration-300" />
            )}
          </div>
          {openIndex === 0 && (
            <p className="text-lg text-gray-600 mt-4 leading-relaxed">
              You can book a trip through our website by selecting your destination, preferred dates, and travel preferences. Then, simply follow the booking steps to confirm your reservation.
            </p>
          )}
        </div>

        {/* Question 2 */}
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all ease-in-out duration-300">
          <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleAccordion(1)}>
            <div className="flex items-center space-x-4">
              <FaCreditCard className="text-green-700 text-2xl" />
              <h3 className="text-2xl font-semibold text-gray-800">What payment methods do you accept?</h3>
            </div>
            {openIndex === 1 ? (
              <FaChevronUp className="text-green-700 text-2xl transform transition-all duration-300" />
            ) : (
              <FaChevronDown className="text-green-700 text-2xl transform transition-all duration-300" />
            )}
          </div>
          {openIndex === 1 && (
            <p className="text-lg text-gray-600 mt-4 leading-relaxed">
              We accept payments via credit cards, debit cards, PayPal, and cryptocurrency. You can choose your preferred payment method during the checkout process.
            </p>
          )}
        </div>

        {/* Question 3 */}
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all ease-in-out duration-300">
          <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleAccordion(2)}>
            <div className="flex items-center space-x-4">
              <FaCalendarAlt className="text-green-700 text-2xl" />
              <h3 className="text-2xl font-semibold text-gray-800">Can I modify my booking?</h3>
            </div>
            {openIndex === 2 ? (
              <FaChevronUp className="text-green-700 text-2xl transform transition-all duration-300" />
            ) : (
              <FaChevronDown className="text-green-700 text-2xl transform transition-all duration-300" />
            )}
          </div>
          {openIndex === 2 && (
            <p className="text-lg text-gray-600 mt-4 leading-relaxed">
              Yes, you can modify your booking. If you need to change your dates or destination, simply contact our customer support team to assist with the changes.
            </p>
          )}
        </div>

        {/* Question 4 */}
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all ease-in-out duration-300">
          <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleAccordion(3)}>
            <div className="flex items-center space-x-4">
              <FaShieldAlt className="text-green-700 text-2xl" />
              <h3 className="text-2xl font-semibold text-gray-800">What is your cancellation policy?</h3>
            </div>
            {openIndex === 3 ? (
              <FaChevronUp className="text-green-700 text-2xl transform transition-all duration-300" />
            ) : (
              <FaChevronDown className="text-green-700 text-2xl transform transition-all duration-300" />
            )}
          </div>
          {openIndex === 3 && (
            <p className="text-lg text-gray-600 mt-4 leading-relaxed">
              Our cancellation policy varies depending on the package. You can cancel or reschedule your trip up to 48 hours before departure for a full refund. Please refer to your booking for specific terms and conditions.
            </p>
          )}
        </div>

        {/* Question 5 */}
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all ease-in-out duration-300">
          <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleAccordion(4)}>
            <div className="flex items-center space-x-4">
              <FaMoneyBillAlt className="text-green-700 text-2xl" />
              <h3 className="text-2xl font-semibold text-gray-800">Do you offer travel insurance?</h3>
            </div>
            {openIndex === 4 ? (
              <FaChevronUp className="text-green-700 text-2xl transform transition-all duration-300" />
            ) : (
              <FaChevronDown className="text-green-700 text-2xl transform transition-all duration-300" />
            )}
          </div>
          {openIndex === 4 && (
            <p className="text-lg text-gray-600 mt-4 leading-relaxed">
              Yes, we offer travel insurance for our customers. You can add travel insurance during the booking process, or contact our customer service for more details on available plans.
            </p>
          )}
        </div>

        {/* Question 6 */}
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all ease-in-out duration-300">
          <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleAccordion(5)}>
            <div className="flex items-center space-x-4">
              <FaHeadset className="text-green-700 text-2xl" />
              <h3 className="text-2xl font-semibold text-gray-800">How do I contact customer support?</h3>
            </div>
            {openIndex === 5 ? (
              <FaChevronUp className="text-green-700 text-2xl transform transition-all duration-300" />
            ) : (
              <FaChevronDown className="text-green-700 text-2xl transform transition-all duration-300" />
            )}
          </div>
          {openIndex === 5 && (
            <p className="text-lg text-gray-600 mt-4 leading-relaxed">
              You can reach our customer support team via email at support@ecotra.com or call us at +1 (800) 123-4567. We are available 24/7 to assist you.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
