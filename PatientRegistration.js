import React from 'react'
import { Link } from 'react-router-dom'
import logo from './images/logo.png'
import {useNavigate } from 'react-router-dom'
import './PatientRegistration.css'
function PatientRegistration() {
  const navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault();
    alert("form submitted")
    navigate('/SuccessfullRegistered')
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
        <Link to='/' class="nav-link nav__space" aria-current="page" >Home</Link>
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
<h1 className='heading'>New Patient Registration</h1>
<form className='doctor__form' onSubmit={handleSubmit}>
  <p className='patient__name'>Patient Information</p>
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
  {/* <div class="row">
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
  </div> */}
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
    <label htmlFor="" className='registration__text'>Registration Date & Time:<span className='asterik'>*</span></label><br />
      <input type="datetime-local" class="form-control input__box" required='true'/>
    </div>
    <div class="col">
    <label htmlFor="" className='date__of'>Date Of Birth:<span className='asterik'>*</span></label><br />
      <input type="date" class="form-control input__box" required='true'/>
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
  <p className='patient__name'>Emergency Contact</p>
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
    <label htmlFor="" className='form__entery3'>Email Id:<span className='asterik'>*</span></label><br />
      <input type="email" class="form-control input__box"  required='true'/>
    </div>
    <div class="col">
    <label htmlFor="" className='form__entery1'>Mobile No:<span className='asterik'>*</span></label><br />
      <input type="number" class="form-control input__box" required='true'/>
    </div>
  </div>
  <button type="submit" class="btn btn-secondary submit__buton">Submit</button>
  {/* <Link to='/SuccessfullRegistration'><button type="submit" class="btn btn-secondary submit__buton">Submit</button></Link> */}
</form>
    </div>
  )
}

export default PatientRegistration
