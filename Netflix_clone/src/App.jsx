import LoginSection from './components/LoginSection'
import Home from './components/Home'
import Pages from './components/Pages'
import { /*useNavigate,*/ BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { useState } from 'react'
import './App.css'

function App() {
  // const navigate = useNavigate()
  // const [ info, setInfo] = useState(null)


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LoginSection />}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Page' element={<Pages/>}/>
        </Routes>
      </Router>
      {/* <Header /> */}
    </>
  )
}
export default App
