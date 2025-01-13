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
  const [totalVisits, setTotalVisits] = useState(0); // Initialize total visits
  const [filter, setFilter] = useState('all');
  const [roomFilter, setRoomFilter] = useState('all'); // Room filter state
  const [timeFilteredData, setTimeFilteredData] = useState<ScanData[]>([]);

  // Fetch data from the backend
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/getScanData');
      const data = await response.json();
      setScanData(data);
      setTotalVisits(data.length); // Counting total visits
      setTimeFilteredData(data); // Default: Show all data initially
    }

    fetchData();
  }, []);

  // Filter function based on time and room
  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    const filteredData = filterData(scanData, newFilter, roomFilter);
    setTimeFilteredData(filteredData);
    setTotalVisits(filteredData.length);
  };

  // Filter data based on selected time period and room
  const filterData = (data: ScanData[], period: string, room: string) => {
    const now = new Date();
    const filteredByTime = data.filter((entry) => {
      const entryDate = new Date(entry.Time);
      if (period === 'day') {
        return entryDate.toDateString() === now.toDateString();
      } else if (period === 'week') {
        const diffInDays = Math.floor((now.getTime() - entryDate.getTime()) / (1000 * 3600 * 24));
        return diffInDays <= 7;
      } else if (period === 'month') {
        return entryDate.getMonth() === now.getMonth() && entryDate.getFullYear() === now.getFullYear();
      } else if (period === 'year') {
        return entryDate.getFullYear() === now.getFullYear();
      } else if (period === 'all') {
        return true; // No filter applied
      }
      return true;
    });

    // Filter by room
    const filteredByRoom = room === 'all' ? filteredByTime : filteredByTime.filter(entry => entry.Location === room);

    return filteredByRoom;
  };

  // Data for chart visualization
  const chartData = {
    labels: [...new Set(timeFilteredData.map((entry) => entry.Location))],
    datasets: [
      {
        label: 'Häufigkeit der Anker Scans',
        data: [...new Set(timeFilteredData.map((entry) => entry.Location))].map(
          (location) => timeFilteredData.filter((entry) => entry.Location === location).length
        ),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Format date in desired format
  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
  };
  
  // Function to convert filtered data into CSV format
  const getCSVData = () => {
    return [...timeFilteredData] // Create copy of data
      .reverse() // Reverse order of data
      .map((entry) => ({
        Location: entry.Location, // Export location
        Time: formatDate(entry.Time), // Export formatted time
      }));
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
        <div className="mb-6 flex justify-between items-center">
          <div className="flex">
            {/* Time Period Dropdown */}
            <select
              className="px-4 py-2 bg-blue-600 text-white rounded"
              value={filter}
              onChange={(e) => handleFilterChange(e.target.value)}
            >
              <option value="all">Alle</option>
              <option value="day">Heute</option>
              <option value="week">Diese Woche</option>
              <option value="month">Diesen Monat</option>
              <option value="year">Dieses Jahr</option>
            </select>

            {/* Room Filter Dropdown */}
            <select
              className="px-4 py-2 bg-blue-600 text-white rounded"
              value={roomFilter}
              onChange={(e) => {
                setRoomFilter(e.target.value);
                const filteredData = filterData(scanData, filter, e.target.value);
                setTimeFilteredData(filteredData);
                setTotalVisits(filteredData.length);
              }}
            >
              <option value="all">Alle Anker</option>
              {/* Assuming rooms are dynamic, use a set to remove duplicates */}
              {[...new Set(scanData.map(entry => entry.Location))].map((room, index) => (
                <option key={index} value={room}>
                  {room}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Anker Scans Visualisierung</h3>
          <Bar data={chartData} options={{ responsive: true }} />
        </div>

        {/* CSV Export Button */}
        <div>
          <CSVLink data={getCSVData()} filename="scan_data.csv">
            <button className="px-4 py-2 bg-blue-600 text-white rounded">
              Daten als CSV exportieren
            </button>
          </CSVLink>
        </div>

        {/* Display Data Table */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Anker Scans</h3>
          <table className="table-auto w-full mt-4">
            <thead>
              <tr>
                <th className="border px-4 py-2">Location</th>
                <th className="border px-4 py-2">Time</th>
              </tr>
            </thead>
            <tbody>
              {timeFilteredData
                .slice() // Erst eine Kopie des Arrays machen, um das Original nicht zu verändern
                .reverse() // Umkehren der Reihenfolge
                .map((entry, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{entry.Location}</td>
                    <td className="border px-4 py-2">{formatDate(entry.Time)}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AdminPage;
