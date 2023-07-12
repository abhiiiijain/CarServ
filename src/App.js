import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Booking from "./pages/Booking";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";
import AuthProvider from "./Context/AuthContext";

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
    <Header/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="contact/" element = {<Contact/>}/>
        <Route path="about/" element = {<About/>}/>
        <Route path="service/" element = {<Services/>}/>
        <Route path="booking/" element = {<Booking/>}/>
        <Route path="login/" element = {<Login/>}/>
        <Route path="register/" element = {<Register/>}/>
        <Route path="shop/" element = {<Shop/>}/>
        <Route path="checkout/" element = {<Checkout/>}/>
        <Route path="*" element = {<Home/>}/>
      </Routes>
      <Footer/>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
