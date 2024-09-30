import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LanguageTranslator from './components/LanguageTranslator'
import MovieSearch from './components/MovieSearch'
import QRCodeGenerator from './components/QRCodeGenerator'
import IPAddressFinder from './components/IPAddressFinder'
import LoginScreen from './components/LoginScreen'
import Nav from './components/Nav'
import ProtectedRoute from './components/ProtectedRoute'
import { useState } from 'react'

function App() {
  const [flag, setFlag] = useState(false)
  function log() {
    setFlag(true)
  }

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<LoginScreen LoggedIn={log} />} />
          <Route path='/IPAddressFinder' element={
            <ProtectedRoute flag={flag}>
              <IPAddressFinder />
            </ProtectedRoute>} />
          <Route path='/QRCodeGenerator' element={<ProtectedRoute flag={flag}>
            <QRCodeGenerator />
          </ProtectedRoute>} />
          <Route path='/MovieSearch' element={
            <ProtectedRoute flag={flag}>
              <MovieSearch />
            </ProtectedRoute>} />
          <Route path='/LanguageTranslator' element={<ProtectedRoute flag={flag}>
            <LanguageTranslator />
          </ProtectedRoute>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
