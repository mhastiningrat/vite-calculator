import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './module/auth/Login'
import Register from './module/auth/Register'
import Layout from './components/Layout'
import Dashboard from './module/dashboard/Dasboard'
import BalisticCalculatorList from './module/balistic-calculator/List'
import BalisticCalculatorCreate from './module/balistic-calculator/Create'
import ZeroPointCalculatorList from './module/zero-point-calculator/List'
import ZeroPointCalculatorCreate from './module/zero-point-calculator/Create'
import UserManagement from './module/user-management/Profile'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/balistic-calculator" element={<BalisticCalculatorList />} />
            <Route path="/balistic-calculator/create" element={<BalisticCalculatorCreate />} />
            <Route path="/zero-point-calculator" element={<ZeroPointCalculatorList />} />
            <Route path="/zero-point-calculator/create" element={<ZeroPointCalculatorCreate />} />
            <Route path="/user-management" element={<UserManagement />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
