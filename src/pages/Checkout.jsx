import React,{useState} from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Checkout() {
  const location = useLocation();
 const navigate=useNavigate()
  // ...............................
  const [formdata,setFormdata]=useState({
    pname:location.state.pname,
    price:location.state.price,
    username:"",
    email:"",
    country:"",
    state:"",
    city:"",
    payment:"",
    address:"",
    zipcode:"",
})
// ...................................
const OnchangeData=(e)=>{
  setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
  })
}
// ..................................
const Onhandleform=(e)=>{
  e.preventDefault();
  console.log(formdata)
  axios({
      method:"post",
      url:"http://localhost:3001/carbooknow",
      data:formdata,
      headers: {
          "Contetnt-Type":"multipart/form-data",
      }
  }
  ).then((res)=>{
      alert(res.data)
      navigate("/")
  })
}
// ..................................
  return (
    <>
      <div className='container mt-5 py-5s'>
        <h1 className='border text-center py-3'>Payment Process</h1>
         <div className='row mt-5'>
            <div className='col-lg-6'>
            <img src={location.state.image} alt="" className='w-100'/>
            </div>
            <div className='col-lg-6 border px-4 py-4'>
              <h3>{location.state.pname}</h3>
              <h4>{location.state.price}</h4>
              <p>Get in touch for the best buying option from your authorized dealer</p>
              <form onSubmit={Onhandleform} method="post">
                 <div className='row'>
                   <div className='col-lg-6'>
                      <label htmlFor="">UserName:</label>
                      <input type="text" className='form-control'
                      name="username"
                      value={formdata.username}
                      onChange={OnchangeData}/>
                   </div>
                   <div className='col-lg-6'>
                    <label htmlFor="">Email:</label>
                      <input type="text" className='form-control'
                      name="email"
                      value={formdata.email}
                      onChange={OnchangeData}/>
                   </div>
                   <div className='col-lg-6'>
                    <label htmlFor="">Country:</label>
                      <input type="text" className='form-control'
                      name="country"
                      value={formdata.country}
                      onChange={OnchangeData}/>
                   </div>
                   <div className='col-lg-6'>
                    <label htmlFor="">State:</label>
                      <input type="text" className='form-control'
                      name="state"
                      value={formdata.state}
                      onChange={OnchangeData}/>
                   </div>
                   <div className='col-lg-6'>
                    <label htmlFor="">City:</label>
                      <input type="text" className='form-control'
                      name="city"
                      value={formdata.city}
                      onChange={OnchangeData}/>
                   </div>
                   <div className='col-lg-6'>
                    <label htmlFor="">Payment : </label>
                      <select  id="" className='form-control'
                      name="payment"
                      value={formdata.payment}
                      onChange={OnchangeData}>
                        <option value="Card">Card</option>
                        <option value="Cash On Devilery">Cash On Devilery</option>
                        <option value="Visha">Visha</option>
                      </select>
                   </div>
                   <div className='col-lg-12'>
                    <label htmlFor="">Address:</label>
                      <textarea  className='form-control'
                      name="address"
                      value={formdata.address}
                      onChange={OnchangeData}></textarea>
                   </div>
                   <div className='col-lg-6'>
                    <label htmlFor="">Zipe Code:</label>
                      <input type="text" className='form-control'
                      name="zipcode"
                      value={formdata.zipcode}
                      onChange={OnchangeData}/>
                   </div>
                   <div className='col-lg-6 py-3'>
                      <img src="/img/stripe.png" alt="" srcset="" className='w-100'/>
                   </div>
                   <div className='col-lg-6 mt-3 mb-3'>
                   <button type="submit" class="btn btn-primary py-3 px-5 animated slideInDown">Book Now<i class="fa fa-arrow-right ms-3"></i></button>
                   </div>
                 </div>
              </form>
            </div>
         </div>
      </div>
    </>
  )
}
