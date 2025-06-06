import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import ForgotPassword from "./pages/forgotpass";
import ConfirmPassword from "./pages/ConfirmPassword"; 
import Errorpage from "./pages/errorpage";
//Admin imports
import AdminHome from "./pages/admin/admin_home";
import Menu from "./pages/admin/menu";
import Menuu from "./pages/admin/menuu";
import Orders from "./pages/admin/orders"; 
import Feedback from "./pages/admin/feedbacks"; 
import Aprofile from "./pages/admin/adminprofile";
import AReservation from "./pages/admin/adminreservation"


//Customer imports
import CustomerHome from "./pages/customer/customerhome";
import CMenu from "./pages/customer/menu"; 
import Ccart from "./pages/customer/customercart";
import Corders from "./pages/customer/myorders";
import Mcategories from "./pages/customer/Mcategories";
import Profile from "./pages/customer/profile";
import Reservation from "./pages/customer/Reservation";
import Aboutpage from "./pages/customer/aboutpage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Errorpage />} />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />      
        <Route path="/signin" element={<Signin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ConfirmPassword />} />

        {/* Admin routes */}
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/home" element={<AdminHome />} />
        <Route path="/admin/Mcategories" element={<Menu />} />
        <Route path="/admin/menu" element={<Menuu />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/profile" element={<Aprofile />} />
        <Route path="/admin/feedbacks" element={<Feedback />} />
        <Route path="/admin/adminreservation" element={<AReservation />} />


        <Route path="/customer" element={<CustomerHome />} />
        <Route path="/customer/home" element={<CustomerHome />} />
        <Route path="/customer/Mcategories" element={<Mcategories />} />
        <Route path="/customer/menu" element={<CMenu />} />
        <Route path="/customer/cart" element={<Ccart />} />
        <Route path="/customer/myorders" element={<Corders />} />
        <Route path="/customer/profile" element={<Profile />} />
        <Route path="/customer/Reservation" element={<Reservation />} />
        <Route path="/customer/about" element={<Aboutpage/>}/>

      </Routes>
    </Router>
  );
}
export default App;
