"use client";

const bookings = [
  { id: 1, user: "John Doe", destination: "Bali, Indonesia", status: "Completed" },
  { id: 2, user: "Jane Smith", destination: "Paris, France", status: "Pending" },
  { id: 3, user: "Michael Brown", destination: "Tokyo, Japan", status: "Completed" },
];

const RecentBookings = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-gray-700 text-lg font-semibold mb-2">Recent Bookings</h3>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2">User</th>
            <th className="p-2">Destination</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id} className="border-t">
              <td className="p-2">{booking.user}</td>
              <td className="p-2">{booking.destination}</td>
              <td className={`p-2 font-semibold ${booking.status === "Completed" ? "text-green-600" : "text-yellow-600"}`}>
                {booking.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentBookings;
