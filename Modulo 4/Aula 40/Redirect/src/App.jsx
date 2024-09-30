// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectRoute'
import Home from './components/Home'
import Login from './components/Login'

function App() {

  return (
    <>
      <Router>
        <Routes>
            <Route to='/Login' element={<Login/>}/>
            <Route to='/Home' element={
              <ProtectedRoute isLoggedIn={true}>
                <Home/>
              </ProtectedRoute>
              }/>
        </Routes>
      </Router>
    </>
  )
}

export default App
