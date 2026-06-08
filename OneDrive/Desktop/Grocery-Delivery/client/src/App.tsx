import {Toaster} from 'react-hot-toast'
import { Routes, Route } from 'react-router-dom'
import AppLayout from './pages/AppLayout'
import Home from './pages/Home'
import Products from './pages/Product'
import ProductPage from './pages/ProductPage'
import SearchResults from './pages/SearchResults'
import FlashDeals from './pages/FlashDeals'
import Checkout from './pages/Checkout'
import MyOrders from './pages/MyOrder'
import OrderTracking from './pages/OrderTracking'
import Login from './pages/Login'
import Addresses from './pages/Address'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  return (
    <>
      <Toaster position="top-right" toastOptions={{duration: 3000, style: {
        background: "#1B3022", color: "#fff",borderRadius: "12px", fontSize: "14px"
      }}}/>
    
    <Routes>
      {/* Auth pages - No Navibar/Footer */}
      <Route path='/login' element={<Login />}/>
      {/* Main pages - With Navibar/Footer */}
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path='products' element={<Products />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path='search' element={<SearchResults />} />
        <Route path="deals" element={<FlashDeals />}/>
        <Route element={<ProtectedRoute />}>
         <Route path="checkout" element={<Checkout />}/>
         <Route path="orders" element={<MyOrders />}/>
         <Route path="orders/:id" element={<OrderTracking />}/>
        <Route path="addresses" element={<Addresses />}/>
        </Route>
</Route>



    </Routes>

    </>
  )
}

export default App
