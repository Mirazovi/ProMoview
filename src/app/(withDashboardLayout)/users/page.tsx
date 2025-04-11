'use client'
import { useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";

const allUsers = [
  {
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
    lastLogin: "2 hours ago",
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Editor",
    status: "Active",
    lastLogin: "1 day ago",
  },
  {
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "Viewer",
    status: "Active",
    lastLogin: "3 days ago",
  },
  {
    name: "Alice Williams",
    email: "alice@example.com",
    role: "Editor",
    status: "Inactive",
    lastLogin: "2 weeks ago",
  },
  {
    name: "Charlie Brown",
    email: "charlie@example.com",
    role: "Viewer",
    status: "Suspended",
    lastLogin: "1 month ago",
  },
  {
    name: "Diana Prince",
    email: "diana@example.com",
    role: "Admin",
    status: "Active",
    lastLogin: "5 hours ago",
  },
  {
    name: "Ethan Hunt",
    email: "ethan@example.com",
    role: "Viewer",
    status: "Active",
    lastLogin: "2 days ago",
  },
  {
    name: "Fiona Gallagher",
    email: "fiona@example.com",
    role: "Editor",
    status: "Active",
    lastLogin: "1 week ago",
  },
];

export default function UsersPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 5;

  const paginatedUsers = allUsers.slice((currentPage - 1) * perPage, currentPage * perPage);
  const totalPages = Math.ceil(allUsers.length / perPage);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Users</h1>
          <p className="text-gray-500">Manage user accounts and permissions.</p>
        </div>
        <button className="flex items-center gap-2 bg-[#e11d48] hover:bg-[#e11d47d3] text-white px-4 py-2 rounded-lg transition">
          <Plus className="w-4 h-4" />
          Add User
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <input
          type="text"
          placeholder="Search users..."
          className="w-full md:w-1/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select className="px-4 py-2 border rounded-lg">
          <option>Role: All</option>
          <option>Admin</option>
          <option>Editor</option>
          <option>Viewer</option>
        </select>
        <select className="px-4 py-2 border rounded-lg">
          <option>Status: All</option>
          <option>Active</option>
          <option>Inactive</option>
          <option>Suspended</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border rounded-xl shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {["Name", "Email", "Role", "Status", "Last Login", "Actions"].map((header) => (
                <th
                  key={header}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {paginatedUsers.map((user, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{user.name}</td>
                <td className="px-6 py-4 text-gray-700">{user.email}</td>
                <td className="px-6 py-4">{user.role}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : user.status === "Inactive"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{user.lastLogin}</td>
                <td className="px-6 py-4 flex gap-2">
                  <button className="text-blue-600 hover:underline text-sm flex items-center gap-1">
                    <Pencil className="w-4 h-4" /> Edit
                  </button>
                  <button className="text-red-500 hover:underline text-sm flex items-center gap-1">
                    <Trash2 className="w-4 h-4" /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600">
          Showing {(currentPage - 1) * perPage + 1}-
          {Math.min(currentPage * perPage, allUsers.length)} of {allUsers.length} users
        </span>
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-md border ${
              currentPage === 1
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded-md border ${
              currentPage === totalPages
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
