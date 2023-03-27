
import './App.css';
import { Route, Routes } from "react-router-dom";
import {Home} from "./pages/Home";
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import { Shop } from './pages/Shop';
import {About} from './pages/About';
import { ContactUs } from './pages/ContactUs';
import {Cart} from './pages/Cart';
import Address from './pages/Address';
import Payment from './pages/Payment';
import OrderPlaced from './pages/OrderPlaced';
import Woman from './pages/Woman';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/address" element={<Address />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/OrderPlaced" element={<OrderPlaced />} />
        <Route path="/woman" element={<Woman />} />
      </Routes>
    </>
  );
}

export default App;
