import  { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Navigation from './components/Navigation'
import C1 from "./components/C1"
import C2 from "./components/C2"
import C3 from "./components/C3"
import Home from './components/Home'

function App() {

  return (
    <>
    <Home/>
    <Router>
    <Navigation/>
      <Routes>
        {/* <Route path='/' Component={C1}/>
        <Route path='/C2' Component={C2}/>
        <Route path='/C3' Component={C3}/> */}

        <Route path='/' Component={C1}/>
        <Route path='/C2' Component={C2}/>
        <Route path='/C4' Component={C3}/>
        <Route path='/C3' element={<Navigate to ='/C4'/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
