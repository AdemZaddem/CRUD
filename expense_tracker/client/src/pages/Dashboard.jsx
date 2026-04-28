import QuickStats from "@/components/QuickStats";
import RecentExpenses from "@/components/RecentExpenses";
import StatsCard from "@/components/StatsCard";
import React from "react";

function Dashboard() {
  return (
    <div className="flex flex-col gap-6">
      <header>
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <p className="text-gray-400">Overview of your finances</p>
      </header>
      <StatsCard />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <RecentExpenses />
        <QuickStats />
      </div>
    </div>
  );
}

export default Dashboard;
