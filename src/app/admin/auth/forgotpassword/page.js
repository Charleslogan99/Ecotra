"use client";

export default function ForgotPassword() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-96">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Forgot Password</h2>
        <p className="text-sm text-gray-600 mb-4 text-center">Enter your email to receive a password reset link.</p>
        <form className="space-y-4">
          <input type="email" placeholder="Admin Email" className="w-full p-2 border rounded-lg" />
          <button type="submit" className="w-full p-2 bg-red-600 text-white rounded-lg">Reset Password</button>
        </form>
        <p className="mt-4 text-center text-sm">
          Remember your password? <a href="/admin/auth/login" className="text-blue-600">Login</a>
        </p>
      </div>
    </div>
  );
}
