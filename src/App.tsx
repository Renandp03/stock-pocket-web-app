import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

//Components
import Header from './components/header'

//Pages
import Home from './pages/Home'
import LoginPage from './pages/Login'
import InitialPage from './pages/InitialPage'

function App() {
  const isDark = useSelector((state: any) => state.theme.isDark)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

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
