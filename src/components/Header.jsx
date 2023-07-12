import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
const Header = () => {
    const { Logout } = useContext(AuthContext)
    return (
        <>
            {/* <!-- Topbar Start --> */}
            <div class="container-fluid bg-light p-0">
                <div class="row gx-0 d-none d-lg-flex">
                    <div class="col-lg-7 px-5 text-start">
                        <div class="h-100 d-inline-flex align-items-center py-3 me-4">
                            <small class="fa fa-map-marker-alt text-primary me-2"></small>
                            <small>123 Street, New York, USA</small>
                        </div>
                        <div class="h-100 d-inline-flex align-items-center py-3">
                            <small class="far fa-clock text-primary me-2"></small>
                            <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
                        </div>
                    </div>
                    <div class="col-lg-5 px-5 text-end">
                        <div class="h-100 d-inline-flex align-items-center py-3 me-4">
                            <small class="fa fa-phone-alt text-primary me-2"></small>
                            <small>+012 345 6789</small>
                        </div>
                        <div class="h-100 d-inline-flex align-items-center">
                            <a class="btn btn-sm-square bg-white text-primary me-1" href=""><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-sm-square bg-white text-primary me-1" href=""><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-sm-square bg-white text-primary me-1" href=""><i class="fab fa-linkedin-in"></i></a>
                            <a class="btn btn-sm-square bg-white text-primary me-0" href=""><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Topbar End --> */}

            {/* <!-- Navbar Start --> */}
            <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
                <a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <h2 class="m-0 text-primary"><i class="fa fa-car me-3"></i>CarServ</h2>
                </a>
                <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto p-4 p-lg-0">
                        <Link to="/" class="nav-item nav-link active">Home</Link>
                        <Link to="/about/" class="nav-item nav-link">About</Link>
                        <Link to="/service/" class="nav-item nav-link">Services</Link>
                        <Link to="/shop/" class="nav-item nav-link">Our-Shop</Link>
                        {sessionStorage.getItem("token") ?
                            <>
                                <li><Link onClick={Logout} class="nav-item nav-link">Logout</Link></li>
                                <li><Link to="/" class="nav-item nav-link">myaccount</Link></li>
                            </>
                            :
                            <>
                                <li><Link to="/login/" class="nav-item nav-link">Login</Link></li>
                                <li><Link to="/register/" class="nav-item nav-link">Register</Link></li>
                            </>
                        }
                        <Link to="/contact/" class="nav-item nav-link">Contact</Link>
                    </div>
                    <Link to="/contact/" class="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Get A Quote<i class="fa fa-arrow-right ms-3"></i></Link>
                </div>
            </nav>
            {/* <!-- Navbar End --> */}
        </>
    )
}

export default Header
