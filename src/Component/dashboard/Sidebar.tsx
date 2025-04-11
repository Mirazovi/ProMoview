'use client'
import { Home, Users, Settings, BarChart2, Folder, Upload, Move3dIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
    { label: "Dashboard", icon: Home, href: "/dashboard" },
    { label: "Movies", icon: Move3dIcon, href: "/movie" },
    { label: "Users", icon: Users, href: "/users" },
    { label: "Analytics", icon: BarChart2, href: "/analytics" },
    { label: "Category", icon: Folder, href: "/category" },
    { label: "Upload Movie", icon: Upload, href: "/upload" },
    { label: "Settings", icon: Settings, href: "/settings" },
  ];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-64 bg-white border-r shadow-md flex flex-col justify-between">
      <div className="p-6">
        <div className="text-2xl font-bold text-blue-600 mb-10">✨ My Dashboard</div>
        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                  isActive
                    ? "bg-[#e11d48] text-white font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

    </aside>
  );
}
