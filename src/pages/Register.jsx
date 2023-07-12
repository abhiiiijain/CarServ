import React, { useState } from 'react'
import axios from "axios"
const Register = () => {
    // .............................................
    const [formdata, setFormdata] = useState({
        username: "",
        email: "",
        phone: "",
        subject: "",
        password: "",
        cpassword: "",
        message: "",
    })
// ............................................
const OnchangeData = (e) => {
    setFormdata({
        ...formdata,
        [e.target.name]: e.target.value
    })
}
// ................................................
const Onhandleform=(e)=>{
    e.preventDefault();
  axios({
    method:"post",
        url:"http://localhost:3001/userdata",
        data:formdata,
  }).then((res)=>{
    alert(res.data)
  })
  // console.log(formdata)
  }
// ...............................................
    return (
        <>
            {/* <!-- Page Header Start --> */}
            <div class="container-fluid page-header mb-5 p-0" style={{ backgroundImage: "url(/img/carousel-bg-1.jpg)" }}>
                <div class="container-fluid page-header-inner py-5">
                    <div class="container text-center">
                        <h1 class="display-3 text-white mb-3 animated slideInDown">Register</h1>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb justify-content-center text-uppercase">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item"><a href="#">Pages</a></li>
                                <li class="breadcrumb-item text-white active" aria-current="page">Registert</li>
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
                        <h6 class="text-primary text-uppercase">// Register Us //</h6>
                        <h1 class="mb-5">Register For More Options</h1>
                    </div>
                    <div class="row g-4">
                        <div class="col-md-12">
                            <div class="wow fadeInUp" data-wow-delay="0.2s">
                                <form onSubmit={Onhandleform} method="post">
                                    <div class="row g-3">
                                        <div class="col-md-6">
                                            <div class="form-floating">
                                                <input type="text" class="form-control" id="name" placeholder="Your Name" 
                                                name="username"
                                                value={formdata.username}
                                                onChange={OnchangeData} required/>
                                                <label for="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-floating">
                                                <input type="email" class="form-control" id="email" placeholder="Your Email" 
                                                 name="email"
                                                 value={formdata.email}
                                                 onChange={OnchangeData}/>
                                                <label for="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-floating">
                                                <input type="text" class="form-control" id="phone" placeholder="Phone Number" 
                                                name="phone"
                                                value={formdata.phone}
                                                onChange={OnchangeData}/>
                                                <label for="phone">Number</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-floating">
                                                <input type="text" class="form-control" id="subject" placeholder="Subject" 
                                                name="subject"
                                                value={formdata.subject}
                                                onChange={OnchangeData}/>
                                                <label for="subject">Subject</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-floating">
                                                <input type="password" class="form-control" id="password" placeholder="Password" 
                                                 name="password"
                                                 value={formdata.password}
                                                 onChange={OnchangeData}/>
                                                <label for="Password">Password</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-floating">
                                                <input type="password" class="form-control" id="password" placeholder="Confirm Password" 
                                                name="cpassword"
                                                value={formdata.cpassword}
                                                onChange={OnchangeData}/>
                                                <label for="password">Confirm Password</label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-floating">
                                                <textarea class="form-control" placeholder="Leave a message here" id="message" style={{ height: "100px" }}
                                                 name="message"
                                                 value={formdata.message}
                                                 onChange={OnchangeData}></textarea>
                                                <label for="message">Message</label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <button class="btn btn-primary w-100 py-3" type="submit">Register Now</button>
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

export default Register
