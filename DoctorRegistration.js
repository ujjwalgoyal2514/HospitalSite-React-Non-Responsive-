import React from 'react'
import { Link } from 'react-router-dom'
import logo from './images/logo.png'
import './DoctorRegistration.css'
import {useNavigate } from 'react-router-dom'
function DoctorRegistration() {
  const navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault();
    alert("form submitted")
    navigate('/SuccessfullRegistration')
  }
  return (
    <div>
      <nav class="navbar navbar-expand nav__size  ">
  <div class="container-fluid" >
    <Link to='/'><img src={logo} alt="" className='nav__logo' /></Link>
    {/* <img src={logo} alt="" className='nav__logo' /> */}
    <Link to='/' className="navbar-brand nav__heading">PUBLIC HEALTH</Link>
    {/* <a class="navbar-brand nav__heading" href="/">PUBLIC HEALTH</a> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown ">
      <ul class="navbar-nav">
        <li class="nav-item">
         <Link to='/' className="nav-link  nav__space" aria-current="page">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/About"><a class="nav-link nav__components" href="/">About Us</a></Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link nav__components" to="/Facilities" >Facilities</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle nav__components" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Registration
          </a>
          <ul class="dropdown-menu">
            <li><Link to='/PatientRegistration' class="dropdown-item ">Patient Registration</Link></li>
            <li><Link to="/DoctorRegistration"class="dropdown-item ">Doctor Registration</Link></li>
            {/* <li><a class="dropdown-item" href="/">Something else here</a></li> */}
          </ul>
        </li>
        <li class="nav-item">
        <Link to='/Login' class="nav-link nav__components" >Login</Link>
        </li>
        <li class="nav-item">
        <Link to='/Contact' class="nav-link nav__components">Contact Us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      <h1 className='heading'>DOCTOR REGISTRATION</h1>
      <form className='doctor__form' onSubmit={handleSubmit}>
  <div class="row">
    <div class="col">
    <label htmlFor="" className='form__entery1'>First Name:<span className='asterik'>*</span></label><br />
      <input type="text" class="form-control input__box" required='true'/>
    </div>
    <div class="col">
    <label htmlFor="" className='form__entery1'>Last Name:<span className='asterik'>*</span></label><br />
      <input type="text" class="form-control input__box" required='true'/>
    </div>
  </div>
  <div class="row">
    <div class="col">
    <label htmlFor="" className='form__entery2'>Username:<span className='asterik'>*</span></label><br />
      <input type="text" class="form-control input__box" required='true'/>
    </div>
    <div class="col">
    <label htmlFor="" className='form__entery2'>Password:<span className='asterik'>*</span></label><br />
      <input type="password" class="form-control input__box" required='true'/>
    </div>
  </div>
  <div class="row">
    <div class="col">
    <label htmlFor="" className='form__entery3'>Email Id:<span className='asterik'>*</span></label><br />
      <input type="email" class="form-control input__box"  required='true'/>
    </div>
    <div class="col">
    <label htmlFor="" className='form__entery1'>Mobile No:<span className='asterik'>*</span></label><br />
      <input type="number" class="form-control input__box" required='true'/>
    </div>
  </div>
  <div class="row">
    <div class="col">
    <div class="form-group col-md-4">
  <label htmlFor="" className='form__entery4' >Specialist In:<span className='asterik'>*</span></label><br />
      <select id="inputState" class="form-control input__box2">
        <option selected >Please Select a Specialist</option>
        <option>Dermatologist</option>
        <option>Dietician</option>
        <option>Cardiologist</option>
      </select>
    </div>
    </div>
    <div class="col">
    <div class="form-group col-md-4">
  <label htmlFor=""className='form__entery5'>Gender:<span className='asterik'>*</span></label><br />
      <select id="inputState" class="form-control input__box2 ">
        <option selected>Please Select a Specialist</option>
        <option>Male</option>
        <option>Female</option>
      </select>
    </div>
    </div>
  </div>
      <div class="row">
    <div class="col">
     <div class="form-group col-md-4">
  <label htmlFor="" className='form__entery6' >State<span className='asterik'>*</span></label><br />
      <select id="inputState" class="form-control input__box2">
        <option selected>Please Select a State</option>
        <option>Arunachal Pradesh</option>
        <option>Uttar Pradesh</option>
        <option>Himachal Pradesh</option>
      </select>
    </div>
    </div>
    <div class="col">
    <label htmlFor="" className='form__entery7'>City:<span className='asterik'>*</span></label><br />
      <input type="text" class="form-control input__box"  required='true'/>
    </div>
  </div>
      <div class="row">
    <div class="col">
    <label htmlFor="" className='form__entery8'>Address:<span className='asterik'>*</span></label><br />
      {/* <input type="text" class="form-control" required='true'/> */}
      <textarea name="" id="" cols="60" rows="2" className='input__box'></textarea>
    </div>
    <div class="col">
    <label htmlFor="" className='form__entery7'>Code:<span className='asterik'>*</span></label><br />
      <input type="number" class="form-control input__box" required='true'/>
    </div>
  </div>
  <button type="submit" class="btn btn-secondary submit__buton">Submit</button>
  {/* <Link to='/SuccessfullRegistration'><button type="submit" class="btn btn-secondary submit__buton">Submit</button></Link> */}
</form>
<div className='Footer'>
  <div className='footer__address'>
    <p className='address__head'>ADDRESS</p><br />
<p className='address'>
500 Terry Francois Street,
</p>
<p className='address'>
San Francisco, CA 94158 
</p>
<p className='tel'>
Tel: 123-456-7890
</p>
  </div>
  <div className='footer__opening'>
    <p className='address__head'>OPENING HOURS</p><br />
<p className='timing'>
Monday - Saturday: 7:00am – 7:30pm</p><p className='timing2' > Sunday: 7:00am – 4:30pm</p>
  </div>
  <div className='footer__subscribe'>
    <p className='address__head'>SUBSCRIBE TO JOIN OUR MAILING LIST</p><br />
    <div class="input-group mb-6 mail">
  <input type="text" class="mail2" placeholder="Enter Your Email Here" aria-label="Recipient's username" aria-describedby="button-addon2"/>
<button class="btn btn-outline-secondary subscribe__buton" type="button" id="button-addon2">Subscribe Now</button>
</div>

  </div>
</div>
    </div>
  )
}

export default DoctorRegistration

