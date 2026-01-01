import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//Components
import Header from './components/header'

//Pages
import Home from './pages/Home'
import LoginPage from './pages/Login'
import InitialPage from './pages/InitialPage'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='initial-page' element={<InitialPage/>} />
          
        </Routes>
      </Router>
    </>
  )
}

export default App
