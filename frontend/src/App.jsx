
import './App.css'
import LoginPage from './pages/LoginPage'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import SignupPage from './pages/SignupPage'

function App() {
  

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage/>} />
    </Routes>
   </BrowserRouter>
    
  )
}

export default App
