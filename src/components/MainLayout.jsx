import {
  Menu,
  Bell,
  User,
  Home,
  Settings,
  Users,
  LogOut,
} from "lucide-react";

import { useState } from "react";

export default function MainLayout() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex">
      {/* SIDEBAR */}
      <aside
        className={`
          fixed lg:static top-0 left-0 z-50
          h-screen w-72
          bg-black border-r border-green-400/30
          transform transition-transform duration-300
          ${openSidebar ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* LOGO */}
        <div className="h-16 border-b border-green-400/30 flex items-center px-6">
          <h1 className="text-xl font-bold text-green-400">
            My Dashboard
          </h1>
        </div>

        {/* MENU */}
        <nav className="p-5">
          <ul className="space-y-2">
            <li>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-green-400/20 hover:bg-green-400 hover:text-black transition">
                <Home size={20} />
                Dashboard
              </button>
            </li>

            <li>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-transparent hover:border-green-400/20 hover:bg-zinc-900 transition">
                <Users size={20} />
                Users
              </button>
            </li>

            <li>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-transparent hover:border-green-400/20 hover:bg-zinc-900 transition">
                <Settings size={20} />
                Settings
              </button>
            </li>
          </ul>
        </nav>

        {/* FOOTER SIDEBAR */}
        <div className="absolute bottom-0 left-0 w-full p-5 border-t border-green-400/20">
          <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-red-400/20 hover:bg-red-500 hover:text-white transition">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* OVERLAY MOBILE */}
      {openSidebar && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setOpenSidebar(false)}
        />
      )}

      {/* CONTENT */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* HEADER */}
        <header className="h-16 border-b border-green-400/20 bg-black/80 backdrop-blur sticky top-0 z-30">
          <div className="h-full px-5 flex items-center justify-between">
            {/* LEFT */}
            <div className="flex items-center gap-4">
              <button
                className="lg:hidden"
                onClick={() => setOpenSidebar(true)}
              >
                <Menu size={24} />
              </button>

              <h2 className="text-lg font-semibold">
                Dashboard
              </h2>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-4">
              <button className="relative p-2 rounded-lg hover:bg-zinc-800 transition">
                <Bell size={20} />

                <span className="absolute top-1 right-1 w-2 h-2 bg-green-400 rounded-full" />
              </button>

              <button className="flex items-center gap-2 border border-green-400/20 px-3 py-2 rounded-xl hover:bg-zinc-900 transition">
                <User size={18} />

                <span className="hidden sm:block">
                  Hastin
                </span>
              </button>
            </div>
          </div>
        </header>

        {/* MAIN */}
        <main className="flex-1 p-5 overflow-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {/* CARD */}
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-green-400/20 bg-black p-5 hover:border-green-400 transition"
              >
                <p className="text-zinc-400 text-sm">
                  Total Sales
                </p>

                <h3 className="text-3xl font-bold mt-3">
                  $12,000
                </h3>

                <div className="mt-4 h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-green-400" />
                </div>
              </div>
            ))}
          </div>

          {/* TABLE */}
          <div className="mt-8 rounded-2xl border border-green-400/20 bg-black overflow-hidden">
            <div className="p-5 border-b border-green-400/20">
              <h3 className="font-semibold">
                Recent Transactions
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead className="bg-zinc-900">
                  <tr>
                    <th className="text-left p-4">Name</th>
                    <th className="text-left p-4">Email</th>
                    <th className="text-left p-4">Status</th>
                    <th className="text-left p-4">Amount</th>
                  </tr>
                </thead>

                <tbody>
                  {[1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,14].map((item) => (
                    <tr
                      key={item}
                      className="border-t border-green-400/10 hover:bg-zinc-900/50"
                    >
                      <td className="p-4">John Doe</td>
                      <td className="p-4">
                        john@example.com
                      </td>
                      <td className="p-4">
                        <span className="px-3 py-1 rounded-full bg-green-400/20 text-green-400 text-sm">
                          Success
                        </span>
                      </td>
                      <td className="p-4">$120</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>

        {/* FOOTER */}
        <footer className="h-14 border-t border-green-400/20 bg-black">
          <div className="h-full px-5 flex items-center justify-between text-sm text-zinc-400">
            <p>
              © 2026 My Dashboard
            </p>

            <p>
              Build with React + Tailwind
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}