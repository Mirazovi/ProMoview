import { Film, Users, Folder, Download, Pencil, Trash2 } from "lucide-react";

export default function DashboardPage() {
  const stats = [
    { label: "Total Movies", value: "1,284", change: "+24 this week", icon: Film },
    { label: "Categories", value: "32", change: "+3 this month", icon: Folder },
    { label: "Downloads", value: "45.2K", change: "+12%", icon: Download },
    { label: "Users", value: "12.5K", change: "+8%", icon: Users },
  ];

  const popularMovies = [
    { title: "Dune: Part Two", downloads: "12,450", change: "+24%" },
    { title: "Oppenheimer", downloads: "10,320", change: "+18%" },
    { title: "Barbie", downloads: "9,870", change: "+12%" },
    { title: "The Batman", downloads: "8,540", change: "+8%" },
    { title: "Everything Everywhere All at Once", downloads: "7,650", change: "+5%" },
  ];

  const trendingCategories = [
    { name: "Action", percent: 32 },
    { name: "Sci-Fi", percent: 28 },
    { name: "Comedy", percent: 18 },
    { name: "Drama", percent: 14 },
    { name: "Horror", percent: 8 },
  ];

  const recentUploads = [
    { title: "Dune: Part Two", time: "2 hours ago", category: "Sci-Fi" },
    { title: "The Fall Guy", time: "1 day ago", category: "Action" },
    { title: "Civil War", time: "3 days ago", category: "Drama" },
    { title: "Godzilla x Kong: The New Empire", time: "5 days ago", category: "Action" },
  ];

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-500">Overview of your movie website statistics and recent activity.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="p-4 bg-white rounded-2xl shadow flex items-center gap-4">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-xl font-semibold">{stat.value}</p>
                <p className="text-xs text-green-600">{stat.change}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Overview & Downloads Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2 p-6 bg-white rounded-2xl shadow">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Download Statistics</h2>
            <span className="text-sm text-gray-500">Last 30 days</span>
          </div>
          <div className="h-64 flex items-center justify-center text-gray-400 text-sm">
            Chart visualization would appear here 📊
          </div>
        </div>

        {/* Popular Movies */}
        <div className="p-6 bg-white rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-4">Popular Movies</h2>
          <ul className="space-y-3">
            {popularMovies.map((movie, idx) => (
              <li key={idx} className="flex justify-between text-sm">
                <span className="font-medium">{idx + 1}. {movie.title}</span>
                <div className="text-right">
                  <p>{movie.downloads}</p>
                  <p className="text-green-600 text-xs">{movie.change}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Categories & Uploads */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Trending Categories */}
        <div className="p-6 bg-white rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-4">Trending Categories</h2>
          <ul className="space-y-3">
            {trendingCategories.map((cat) => (
              <li key={cat.name} className="flex justify-between text-sm">
                <span>{cat.name}</span>
                <span className="font-medium">{cat.percent}%</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Uploads */}
        <div className="p-6 bg-white rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-4">Recent Uploads</h2>
          <ul className="space-y-4">
            {recentUploads.map((movie, idx) => (
              <li key={idx} className="flex items-center justify-between text-sm">
                <div>
                  <p className="font-medium">{movie.title}</p>
                  <p className="text-xs text-gray-500">{movie.time} • {movie.category}</p>
                </div>
                <div className="flex gap-2">
                  <button className="text-blue-500 hover:underline text-xs flex items-center gap-1">
                    <Pencil className="w-4 h-4" /> Edit
                  </button>
                  <button className="text-red-500 hover:underline text-xs flex items-center gap-1">
                    <Trash2 className="w-4 h-4" /> Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
