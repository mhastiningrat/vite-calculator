import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './module/auth/Login'
import Dashboard from './module/dashboard/Dasboard'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
