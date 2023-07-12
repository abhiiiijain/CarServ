import React from 'react'
import {useState,useContext} from 'react'
import { AuthContext } from '../Context/AuthContext';
const Login = () => {
    const {UserLogin}=useContext(AuthContext)

    const [formdata,setFormdata]=useState({
      email:"",
      password:"",
    })
  // .......................
  const OnchangeData=(e)=>{
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }
  // ,,,,,,,,,,,,,,,,,,,,,,,,,
  const Onhandleform=(e)=>{
    e.preventDefault();
  console.log(formdata)
    UserLogin(formdata)
  }
  return (
    <>
     {/* <!-- Page Header Start --> */}
    <div class="container-fluid page-header mb-5 p-0" style={{backgroundImage: "url(/img/carousel-bg-1.jpg)"}}>
        <div class="container-fluid page-header-inner py-5">
            <div class="container text-center">
                <h1 class="display-3 text-white mb-3 animated slideInDown">Login Now</h1>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb justify-content-center text-uppercase">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Pages</a></li>
                        <li class="breadcrumb-item text-white active" aria-current="page">Contact</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
    {/* <!-- Page Header End --> */}


    {/* <!-- Contact Start --> */}
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 class="text-primary text-uppercase">// Login Us //</h6>
                <h1 class="mb-5">Login For More Options</h1>
            </div>
            <div class="row g-4">
                <div class="col-md-12">
                    <div class="wow fadeInUp" data-wow-delay="0.2s">
                        <form onSubmit={Onhandleform} method="post">
                            <div class="row g-3">
                                <div class="col-md-12">
                                    <div class="form-floating">
                                        <input type="email" class="form-control" id="email" placeholder="Your Email"
                                        name="email"
                                        value={formdata.email}
                                        onChange={OnchangeData}/>
                                        <label for="email">Your Email</label>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-floating">
                                        <input type="password" class="form-control" id="password" placeholder="Your Password"
                                        name='password'
                                        value={formdata.password}
                                        onChange={OnchangeData}/>
                                        <label for="password">Your Password</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-primary w-100 py-3" type="submit">Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Contact End --> */}

    </>
  )
}

export default Login
