import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setUser } from './app/user.js'
import { setGroup } from './app/group.js'
import { setTheme } from './app/theme.js'

//Components
import Header from './components/header'

//Pages
import Home from './pages/Home'
import LoginPage from './pages/Login'
import InitialPage from './pages/InitialPage'

function App() {
  const dispatch = useDispatch()
  const isDark = useSelector((state: any) => state.theme.isDark)
  if (isDark !== (localStorage.getItem('stock-pocket-theme') === 'dark')) dispatch(setTheme({ isDark: localStorage.getItem('stock-pocket-theme') === 'dark' }))

  const cachedUser = localStorage.getItem('stock-pocket-user')
  const cachedGroup = localStorage.getItem('stock-pocket-group')

  if (cachedUser) {
    dispatch(setUser(JSON.parse(cachedUser)))
  }

  if (cachedGroup) {
    dispatch(setGroup(JSON.parse(cachedGroup)))
  }

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
