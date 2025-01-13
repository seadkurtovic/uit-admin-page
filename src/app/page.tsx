'use client'; // Ensure this is a client-side component

import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { CSVLink } from 'react-csv';

// Chart.js Registration
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Mock data structure
interface ScanData {
  Time: string;
  ID: string;
  Location: string;
}

const AdminPage: React.FC = () => {
  const [scanData, setScanData] = useState<ScanData[]>([]);
  const [totalVisits, setTotalVisits] = useState(0);
  const [filter, setFilter] = useState('day');
  const [timeFilteredData, setTimeFilteredData] = useState<any[]>([]);

  // Fetch data from the backend
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/getScanData');
      const data = await response.json();
      setScanData(data);
      setTotalVisits(data.length); // Counting total visits
    }

    fetchData();
  }, []);

  // Filter function based on time
  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    const filteredData = filterData(scanData, newFilter);
    setTimeFilteredData(filteredData);
  };

  // Filter data based on selected time period
  const filterData = (data: ScanData[], period: string) => {
    const now = new Date();
    return data.filter((entry) => {
      const entryDate = new Date(entry.Time);
      if (period === 'day') {
        return entryDate.toDateString() === now.toDateString();
      } else if (period === 'week') {
        const diffInDays = Math.floor((now.getTime() - entryDate.getTime()) / (1000 * 3600 * 24));
        return diffInDays <= 7;
      } else if (period === 'month') {
        return entryDate.getMonth() === now.getMonth() && entryDate.getFullYear() === now.getFullYear();
      }
      return true;
    });
  };

  // Data for chart visualization
  const chartData = {
    labels: scanData.map((entry) => entry.Location),
    datasets: [
      {
        label: 'Anker Scans',
        data: scanData.map((entry) => entry.ID),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-6">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <h2 className="text-xl font-semibold mb-4">Besucher und Anker Scans</h2>

        {/* Total Visits */}
        <div className="mb-6">
          <p className="text-lg">Gesamtanzahl der Web-App-Aufrufe: {totalVisits}</p>
        </div>

        {/* Zeitraum Filter */}
        <div className="mb-6">
          <button onClick={() => handleFilterChange('day')} className="px-4 py-2 bg-blue-600 text-white rounded">
            Heute
          </button>
          <button onClick={() => handleFilterChange('week')} className="px-4 py-2 bg-blue-600 text-white rounded mx-2">
            Diese Woche
          </button>
          <button onClick={() => handleFilterChange('month')} className="px-4 py-2 bg-blue-600 text-white rounded">
            Diesen Monat
          </button>
        </div>

        {/* Display Data Table */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Anker Scans</h3>
          <table className="table-auto w-full mt-4">
            <thead>
              <tr>
                <th className="border px-4 py-2">ID</th>
                <th className="border px-4 py-2">Location</th>
                <th className="border px-4 py-2">Time</th>
              </tr>
            </thead>
            <tbody>
              {scanData.map((entry, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{entry.ID}</td>
                  <td className="border px-4 py-2">{entry.Location}</td>
                  <td className="border px-4 py-2">{entry.Time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bar Chart */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Anker Scans Visualisierung</h3>
          <Bar data={chartData} options={{ responsive: true }} />
        </div>

        {/* CSV Export */}
        <div className="mt-6">
          <CSVLink data={scanData} filename="scan_data.csv">
            <button className="px-4 py-2 bg-blue-600 text-white rounded">Daten als CSV exportieren</button>
          </CSVLink>
        </div>
      </main>
    </div>
  );
};

export default AdminPage;
