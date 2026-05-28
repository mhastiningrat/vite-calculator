import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './module/auth/Login'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
