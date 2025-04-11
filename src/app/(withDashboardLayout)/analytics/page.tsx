'use client'
import { Download, TrendingUp, Star, Users } from "lucide-react";
import { Line } from 'react-chartjs-2'; // Assuming you use chart.js for the line chart
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const downloadData = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], // Months
  datasets: [
    {
      label: 'Movie Downloads',
      data: [1200, 1100, 1300, 1250, 1400, 1500, 1600, 1450, 1700, 1800, 1900, 2100],
      borderColor: '#4F8A10',
      backgroundColor: 'rgba(79, 138, 16, 0.2)',
      tension: 0.4,
    },
  ],
};

const topMovies = [
  { title: "Dune: Part Two", downloads: 12450 },
  { title: "Oppenheimer", downloads: 10320 },
  { title: "Barbie", downloads: 9870 },
  { title: "The Batman", downloads: 8540 },
  { title: "Everything Everywhere All at Once", downloads: 7650 },
];

const trendingCategories = [
  { category: "Action", percentage: 32 },
  { category: "Sci-Fi", percentage: 28 },
  { category: "Comedy", percentage: 18 },
  { category: "Drama", percentage: 14 },
  { category: "Horror", percentage: 8 },
];

export default function Analytics() {
  return (
    <div className="space-y-8">
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-4">
            <Download className="w-8 h-8" />
            <div>
              <h2 className="text-xl font-semibold">Total Downloads</h2>
              <p className="text-2xl">45,200</p>
            </div>
          </div>
        </div>
        <div className="bg-green-600 text-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-4">
            <TrendingUp className="w-8 h-8" />
            <div>
              <h2 className="text-xl font-semibold">Downloads This Month</h2>
              <p className="text-2xl">2,400</p>
            </div>
          </div>
        </div>
        <div className="bg-purple-600 text-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-4">
            <Star className="w-8 h-8" />
            <div>
              <h2 className="text-xl font-semibold">Top Movies</h2>
              <p className="text-2xl">5 Movies</p>
            </div>
          </div>
        </div>
        <div className="bg-orange-600 text-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-4">
            <Users className="w-8 h-8" />
            <div>
              <h2 className="text-xl font-semibold">Active Users</h2>
              <p className="text-2xl">12,500</p>
            </div>
          </div>
        </div>
      </div>

      {/* Analytics Chart */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Download Statistics</h2>
        <Line data={downloadData} />
      </div>

      {/* Popular Movies */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Popular Movies</h2>
        <div className="space-y-4">
          {topMovies.map((movie, idx) => (
            <div key={idx} className="flex justify-between items-center">
              <span className="font-medium">{movie.title}</span>
              <span className="text-gray-500">{movie.downloads}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Categories */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Trending Categories</h2>
        <div className="space-y-4">
          {trendingCategories.map((category, idx) => (
            <div key={idx} className="flex justify-between items-center">
              <span className="font-medium">{category.category}</span>
              <span className="text-gray-500">{category.percentage}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Uploads */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Recent Uploads</h2>
        <div className="space-y-4">
          {/* Sample movie data */}
          <div className="flex justify-between items-center">
            <span className="font-medium">Dune: Part Two</span>
            <span className="text-gray-500">2 hours ago</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">The Fall Guy</span>
            <span className="text-gray-500">1 day ago</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Civil War</span>
            <span className="text-gray-500">3 days ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}
