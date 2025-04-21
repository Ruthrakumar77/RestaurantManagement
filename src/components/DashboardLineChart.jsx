
import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const DashboardLineChart = () => {
    // Sample data for the last 14 days
    const data = [
        { date: "Day 1", customers: 120, revenue: 240 },
        { date: "Day 2", customers: 150, revenue: 300 },
        { date: "Day 3", customers: 170, revenue: 340 },
        { date: "Day 4", customers: 180, revenue: 360 },
        { date: "Day 5", customers: 140, revenue: 280 },
        { date: "Day 6", customers: 160, revenue: 320 },
        { date: "Day 7", customers: 200, revenue: 400 },
        { date: "Day 8", customers: 220, revenue: 440 },
        { date: "Day 9", customers: 210, revenue: 420 },
        { date: "Day 10", customers: 190, revenue: 380 },
        { date: "Day 11", customers: 230, revenue: 460 },
        { date: "Day 12", customers: 240, revenue: 480 },
        { date: "Day 13", customers: 250, revenue: 500 },
        { date: "Day 14", customers: 260, revenue: 520 },
    ];
    return (
        <div className="bg-white p-4 shadow-lg rounded-2xl w-full">
            <h2 className="text-xl font-semibold text-center mb-4 text-gray-800">
                Daily Customers and Revenue (Last 2 Weeks)
            </h2>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="date" stroke="#475569" />
                    <YAxis stroke="#475569" />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="customers"
                        stroke="#22c55e"
                        strokeWidth={2}
                        activeDot={{ r: 6 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        activeDot={{ r: 6 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DashboardLineChart;
