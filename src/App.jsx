import { Outlet, Route, Routes,Navigate } from 'react-router-dom'
import './App.css'
import CommonLayout from './pages/common-layout/common-layout'
import HomePage from './pages/HomePage/HomePage'
import Training from './pages/Training/Training'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'
import TermsAndCondition from './pages/TermsAndCondtion/TermsAndCondition'
import RefundPolicy from './pages/RefundPolicy/RefundPolicy'
import AddToCart from './pages/AddToCart/AddToCart'
import Wishlist from './pages/Wishlist/Wishlist'
import BookingPage from './pages/BookingPage/BookingPage'
import Blog from './pages/Blog/Blog'
import Blog1 from './pages/Blog1/Blog1'
import Auth from './pages/pages/Auth'
import Accountbar from './pages/pages/MyAccount/Accountbar'
import Course from './pages/pages/MyAccount/Course'
import Purchasehistory from './pages/pages/MyAccount/Purchasehistory'
import Dashboard from './pages/pages/MyAccount/Dashboard'
import ViewSlot from './pages/pages/MyAccount/ViewSlot'
import RequireAuth from './component/RequireAuth'
import Checkout from './pages/Checkout/Checkout'
import SingleCourse from './pages/SingleCourse/SingleCourse'
import ProductDetail from './pages/ProudctDetail/ProductDetail'
import Appointments from './pages/pages/MyAccount/Appointment'
import FixedSlot from './pages/pages/MyAccount/FixedSchedule'


function App() {

  return (
    <>
    <div>
      <Routes>
        <Route path='/' element={<CommonLayout/>}>
            <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path='home' element={<HomePage/>}/>
        <Route path='training' element={<Training/>}/>
        <Route path='Booking' element={<BookingPage/>}/>
        <Route path='privacy' element={<PrivacyPolicy/>}/>
        <Route path='terms' element={<TermsAndCondition/>}/>
        <Route path='refund' element={<RefundPolicy/>}/>
        <Route path='cart' element={<AddToCart/>}/>
        <Route path='wish-list' element={<Wishlist/>}/>
        <Route path='blog' element={<Blog/>}/>
        <Route path='blog1' element={<Blog1/>}/>
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='single' element={<SingleCourse/>}/>
        <Route path='product' element={<ProductDetail/>}/>
        <Route path='auth' element={<Auth/>}/>
       <Route path="MyAccount" element={<RequireAuth><Accountbar /></RequireAuth>}>
      <Route index element={<Dashboard />} />
      <Route path="purchase-history" element={<Purchasehistory />} />
      <Route path="courses" element={<Course />} />
      <Route path="courses/:name" element={<ViewSlot />} />
      <Route path='courses/fixed/:name' element={<FixedSlot />} />
      <Route path="appointments" element={<Appointments />} />
    </Route>
        </Route>
      </Routes>
    </div>
    </>
  )
}

export default App
