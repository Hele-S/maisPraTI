import LoginSection from './components/LoginSection'
import Home from './components/Home'
// import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <>
      
      <Router>
        <Routes>
          <Route path='/' element={<LoginSection />}/>
          <Route path='/Home' element={<Home />}/>
        </Routes>
      </Router>
      {/* <Header /> */}
    </>
  )
}
export default App
