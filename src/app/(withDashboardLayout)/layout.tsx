import Sidebar from "@/Component/dashboard/Sidebar";
import "../globals.css";


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <main className="flex-1 p-6 overflow-auto h-full bg-gray-50">{children}</main>
        </div>
      </body>
    </html>

  );
}


