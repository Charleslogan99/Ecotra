import AdminLayout from "@/app/admin/adminlayout";
import DashboardStats from "@/app/admin/DashboardStats";
import RevenueChart from "@/app/admin/RevenueChart";
import RecentBookings from "@/app/admin/RecentBookings";
import UserActivity from "@/app/admin/UserActivity";

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <DashboardStats />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <RevenueChart />
        <UserActivity />
        <RecentBookings />
      </div>
    </AdminLayout>
  );
}
