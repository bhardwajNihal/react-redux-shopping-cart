
import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './navbar'
import Home from './pages/home'
import Cart from './pages/cart/cart'
function App() {

  return <div>
    <Navbar/>

    <Routes>
      {/* for default redirecting to homepage on mount */}
    <Route path="/" element={<Navigate to="/home" />} />   
      <Route 
        path='/home'
        element = {<Home/>}
      />

      <Route 
        path='/cart'
        element = {<Cart/>}
      />

    </Routes>

  </div>
}

export default App
