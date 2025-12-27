import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//Components
import Header from './components/header'

//Pages
import Home from './pages/Home'
import LoginPage from './pages/Login'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
