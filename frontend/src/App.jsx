
import './App.css'
import LoginPage from './pages/LoginPage'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import HomePage from './pages/HomePage'
import CreateProduct from './pages/CreateProduct'

function App() {
  

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage/>} />
      <Route path="/create-product" element={<CreateProduct />}/>
    </Routes>
   </BrowserRouter>
    
  )
}

export default App
