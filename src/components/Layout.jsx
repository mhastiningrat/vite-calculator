import { Link, Outlet, useNavigate } from 'react-router'
import { useAuthStore } from '../store/authStore'
import Button from './Button'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Layout() {
  const { logout } = useAuthStore()
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/balistic-calculator', label: 'Calculator Balistik' },
    { path: '/zero-point-calculator', label: 'Calculator Zero Point' },
    { path: '/user-management', label: 'User Management' },
  ]

  return (
    <div className="flex h-screen bg-gray-100">
      <button 
        className="md:hidden absolute top-4 left-4 z-20 p-2"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      
      <aside className={`
        fixed md:relative z-10 w-64 h-full bg-gray-800 text-white
        transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        transition-transform duration-200 ease-in-out
      `}>
        <div className="p-4">
          <h1 className="text-xl font-bold">Ballistik App</h1>
        </div>
        <nav className="mt-4">
          {menuItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className="block px-4 py-2 hover:bg-gray-700"
              onClick={() => setSidebarOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-4">
          <Button variant="danger" onClick={() => { logout(); navigate('/') }}>Logout</Button>
        </div>
      </aside>
      
      <main className="flex-1 p-4 md:p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  )
}