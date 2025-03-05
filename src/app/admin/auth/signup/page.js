"use client";

export default function Signup() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-96">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Admin Signup</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full p-2 border rounded-lg" />
          <input type="email" placeholder="Admin Email" className="w-full p-2 border rounded-lg" />
          <input type="password" placeholder="Password" className="w-full p-2 border rounded-lg" />
          <button type="submit" className="w-full p-2 bg-green-600 text-white rounded-lg">Sign Up</button>
        </form>
        <p className="mt-4 text-center text-sm">
          Already have an account? <a href="/admin/auth/login" className="text-blue-600">Login</a>
        </p>
      </div>
    </div>
  );
}
