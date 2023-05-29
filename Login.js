import React from 'react'
import { Link } from 'react-router-dom'
import logo from './images/logo.png'
import './Login.css'
function Login() {
  return (
    <div className='login__page'>
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
<div className='login__form'>
<form>
  <div class="form-group">
    <label for="exampleInputEmail1"><b>Username:</b></label>
    <input type="text" class="form-control Login__input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username"/>
    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1"><b>Password:</b></label>
    <input type="password" class="form-control  Login__input" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input  Login__input" id="exampleCheck1"/>
    <label class="form-check-label remember__text" for="exampleCheck1">Remember Me</label>
  </div>
  <button type="submit" class="btn btn-primary Login__buton">Login</button>
</form>
</div>
    </div>
  )
}

export default Login
