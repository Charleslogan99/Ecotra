'use client'
import React, { useState } from 'react';
import { FaPlaneDeparture, FaPlaneArrival, FaCalendarAlt, FaUserAlt, FaTrashAlt } from 'react-icons/fa';

const BookFlight = () => {
  const [departureCity, setDepartureCity] = useState('');
  const [destinationCity, setDestinationCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [flightClass, setFlightClass] = useState('Economy');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking flight from ${departureCity} to ${destinationCity} on ${departureDate} returning on ${returnDate}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-12 font-sans">
      <div className="bg-white shadow-lg rounded-xl w-full sm:w-96 lg:w-[500px] xl:w-[600px] p-8 space-y-8">
        <h1 className="text-3xl font-semibold text-center text-green-600 mb-6">Book Your Flight</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Departure City Input */}
          <div>
            <label htmlFor="departure-city" className="block text-sm font-semibold text-gray-700">Departure City</label>
            <div className="flex items-center border border-gray-300 rounded-lg mt-2 focus-within:border-green-600 focus-within:ring-2 focus-within:ring-green-600">
              <FaPlaneDeparture className="text-green-600 ml-3" />
              <input
                type="text"
                id="departure-city"
                className="w-full p-3 pl-10 rounded-lg focus:outline-none"
                placeholder="Enter departure city"
                value={departureCity}
                onChange={(e) => setDepartureCity(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Destination City Input */}
          <div>
            <label htmlFor="destination-city" className="block text-sm font-semibold text-gray-700">Destination City</label>
            <div className="flex items-center border border-gray-300 rounded-lg mt-2 focus-within:border-green-600 focus-within:ring-2 focus-within:ring-green-600">
              <FaPlaneArrival className="text-green-600 ml-3" />
              <input
                type="text"
                id="destination-city"
                className="w-full p-3 pl-10 rounded-lg focus:outline-none"
                placeholder="Enter destination city"
                value={destinationCity}
                onChange={(e) => setDestinationCity(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Dates Inputs */}
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[250px] sm:min-w-[300px]">
              <label htmlFor="departure-date" className="block text-sm font-semibold text-gray-700">Departure Date</label>
              <div className="flex items-center border border-gray-300 rounded-lg mt-2 focus-within:border-green-600 focus-within:ring-2 focus-within:ring-green-600">
                <FaCalendarAlt className="text-green-600 ml-3" />
                <input
                  type="date"
                  id="departure-date"
                  className="w-full p-3 pl-10 rounded-lg focus:outline-none"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex-1 min-w-[250px] sm:min-w-[300px]">
              <label htmlFor="return-date" className="block text-sm font-semibold text-gray-700">Return Date</label>
              <div className="flex items-center border border-gray-300 rounded-lg mt-2 focus-within:border-green-600 focus-within:ring-2 focus-within:ring-green-600">
                <FaCalendarAlt className="text-green-600 ml-3" />
                <input
                  type="date"
                  id="return-date"
                  className="w-full p-3 pl-10 rounded-lg focus:outline-none"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Passengers Selector */}
          <div>
            <label htmlFor="passengers" className="block text-sm font-semibold text-gray-700">Number of Passengers</label>
            <div className="flex items-center border border-gray-300 rounded-lg mt-2 focus-within:border-green-600 focus-within:ring-2 focus-within:ring-green-600">
              <FaUserAlt className="text-green-600 ml-3" />
              <input
                type="number"
                id="passengers"
                className="w-full p-3 pl-10 rounded-lg focus:outline-none"
                placeholder="1"
                min="1"
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Flight Class Selector */}
          <div>
            <label htmlFor="flight-class" className="block text-sm font-semibold text-gray-700">Flight Class</label>
            <select
              id="flight-class"
              value={flightClass}
              onChange={(e) => setFlightClass(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              <option>Economy</option>
              <option>Business</option>
              <option>First Class</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 transition duration-300"
            >
              Search Flights
            </button>
          </div>

          {/* Clear Button */}
          <div className="mt-4 text-center">
            <button
              type="button"
              className="flex items-center justify-center text-sm text-green-600 hover:underline"
              onClick={() => {
                setDepartureCity('');
                setDestinationCity('');
                setDepartureDate('');
                setReturnDate('');
                setPassengers(1);
                setFlightClass('Economy');
              }}
            >
              <FaTrashAlt className="mr-2" />
              Clear All
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookFlight;
