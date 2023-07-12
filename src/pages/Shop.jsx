import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export default function Shop() {
    const navigate = useNavigate();
    const PaymentPage=(pname,img,price)=>{
        navigate("/checkout",{state:{
            pname:pname,
            image:img,
            price:price,
        }})
    }
  return (
    <>
      <div className='container mt-5 py-5'>
        <h1 className='border text-center py-2'>Book Your New Car</h1>
            <div className='row'>
                <div className='col-lg-6 border px-3 py-3'>
                    <div className='row'>
                        <div className='col-lg-6 px-3 py-3'>
                            <img src="/img/carousel-1.png" alt="" srcset="" className='w-100 px-2 py-2'/>
                        </div>
                        <div className='col-lg-6'>
                            <h4>BMW Z4</h4>
                            <p>Rs. 99.14 Lakh</p>
                            <p>Get in touch for the best buying option from your authorized dealer</p>
                            <a onClick={()=>PaymentPage(
                                "BMW Z4",
                                "/img/carousel-1.png",
                                "Rs. 99.14 Lakh",
                            )} class="btn btn-primary py-3 px-5 animated slideInDown">Book Now<i class="fa fa-arrow-right ms-3"></i></a>
                        </div>
                    </div>
                </div>
                {/* ................. */}
                <div className='col-lg-6 border px-3 py-3'>
                    <div className='row'>
                        <div className='col-lg-6 px-3 py-3'>
                            <img src="/img/carousel-2.png" alt="" srcset="" className='w-100 px-2 py-2'/>
                        </div>
                        <div className='col-lg-6'>
                            <h4>Maruti Fronx</h4>
                            <p>Rs. 8.20 - 14.36 Lakh</p>
                            <p>Get in touch for the best buying option from your authorized dealer</p>
                            <a onClick={()=>PaymentPage(
                                "Maruti Fronx",
                                "/img/carousel-2.png",
                                "Rs. 8.20 - 14.36 Lakh",
                            )} class="btn btn-primary py-3 px-5 animated slideInDown">Book Now<i class="fa fa-arrow-right ms-3"></i></a>
                        </div>
                    </div>
                </div>
                {/* ................ */}
                <div className='col-lg-6 border px-3 py-3'>
                    <div className='row'>
                        <div className='col-lg-6 px-3 py-3'>
                            <img src="/img/lexus.webp" alt="" srcset="" className='w-100 px-2 py-2'/>
                        </div>
                        <div className='col-lg-6'>
                            <h4>Lexus RX</h4>
                            <p>Rs. 1.06 - 1.31 Crore</p>
                            <p>Get in touch for the best buying option from your authorized dealer</p>
                            <a onClick={()=>PaymentPage(
                                "Lexus RX",
                                "/img/lexus.webp",
                                "Rs. 1.06 - 1.31 Crore",
                            )} class="btn btn-primary py-3 px-5 animated slideInDown">Book Now<i class="fa fa-arrow-right ms-3"></i></a>
                        </div>
                    </div>
                </div>
                {/* ............................. */}
                <div className='col-lg-6 border px-3 py-3'>
                    <div className='row'>
                        <div className='col-lg-6 px-3 py-3'>
                            <img src="/img/lamber.webp" alt="" srcset="" className='w-100 px-2 py-2'/>
                        </div>
                        <div className='col-lg-6'>
                            <h4>All New Lamborghini </h4>
                            <p>Rs. 4.81 Crore</p>
                            <p>Get in touch for the best buying option from your authorized dealer</p>
                            <a onClick={()=>PaymentPage(
                                "All New Lamborghini",
                                "/img/lamber.webp",
                                "Rs. 4.81 Crore",
                            )} class="btn btn-primary py-3 px-5 animated slideInDown">Book Now<i class="fa fa-arrow-right ms-3"></i></a>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </>
  )
}
