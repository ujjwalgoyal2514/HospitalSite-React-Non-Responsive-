import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import logo from "./../Components/images/logo.png"
function Home() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg nav_size">
  <div class="container-fluid">
    <Link class="navbar-brand" href="/"><img src={logo} alt='HospitalLogo' width='70px' className='nav__logo'></img><span className='nav__heading'>PUBLIC HEALTH</span></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          {/* <a class="nav-link active" aria-current="page" href="/">Home</a> */}
          <Link to='/' class="nav-link active " aria-current="page" >Home</Link>
        </li>
        <li class="nav-item">
        <Link to="/About" className="nav-link">About Us</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link " to="/Facilities" >Facilities</Link>
        </li>
       
        <li class="nav-item dropdown">
          <Link to=''class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Registration
          </Link>
          <ul class="dropdown-menu">
            <li><Link to='/PatientRegistration' class="dropdown-item ">Patient Registration</Link></li>
            <li><Link to="/DoctorRegistration"class="dropdown-item ">Doctor Registration</Link></li>
          </ul>
        </li>
        <li class="nav-item">
        <Link to='/Login' class="nav-link" >Login</Link>
        </li>
        <li class="nav-item">
        <Link to='/Contact' class="nav-link">Contact Us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div className='home'>
<div class="icon-bar">
  <a href="/" class="facebook"><i class="fa fa-facebook"></i></a> 
  <a href="/" class="twitter"><i class="fa fa-twitter"></i></a> 
  <a href="/" class="google"><i class="fa fa-google"></i></a> 
  <a href="/" class="linkedin"><i class="fa fa-linkedin"></i></a>
  <a href="/" class="youtube"><i class="fa fa-youtube"></i></a> 
</div>
  <p id='walk'>
  WALK-IN</p>
  <p className='medical_care'>
  MEDICAL CARE
  </p>
  {/* <div className='home__text2'>FOR  ADULTS  &  CHILDREN</div> <br/> */}
  {/* <div className='Timings'>Monday - Saturday: 7:00am – 7:30pm <br />
Sunday: 7:00am – 4:30pm</div>  */}
<Link to="/"><button type="button" class="btn btn-primary buton">Book Now</button></Link>
  </div>

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

export default Home
