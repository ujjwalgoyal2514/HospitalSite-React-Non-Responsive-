import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
import logo from "./../Components/images/logo.png"
import { FaRegHospital } from 'react-icons/fa'
import { ImLab } from 'react-icons/im';
import { BiCheckShield } from 'react-icons/bi';
 import {CgSandClock} from 'react-icons/cg'
 import {BsCalendar2Check} from 'react-icons/bs'
function About() {
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
      <h1 className='heading'>About Us</h1>
      <div className='about__us'>Welcome to Public Health, a leading healthcare provider committed to delivering high-quality, compassionate care to our patients. Our mission is to improve the health and wellbeing of the communities we serve by providing advanced medical treatments, state-of-the-art technology, and exceptional patient experiences. With a team of highly skilled healthcare professionals, we offer a comprehensive range of services including emergency care, surgery, cardiology, oncology, and more. At Public Health, we believe in treating each patient with respect, dignity, and empathy, and are dedicated to making a positive impact on the lives of those we serve.
      
      <div class="icon-bar">
  <a href="/" class="facebook"><i class="fa fa-facebook"></i></a> 
  <a href="/" class="twitter"><i class="fa fa-twitter"></i></a> 
  <a href="/" class="google"><i class="fa fa-google"></i></a> 
  <a href="/" class="linkedin"><i class="fa fa-linkedin"></i></a>
  <a href="/" class="youtube"><i class="fa fa-youtube"></i></a> 
</div>
</div>
    <div > 
        <div className="lab"><ImLab className='lab__icon'/>
    <p className='lab__textfirst'>On site</p><p className='lab__textsecond'>laboratory</p></div>
    <div className="lab"><FaRegHospital className='lab__icon' />
    <p className='lab__textfirst'>Open 7 days</p><p className='lab__textsecond'> week</p></div> 
    <div className="lab"><BiCheckShield className='lab__icon' />
    <p className='lab__textfirst'>Accepting all major</p><p className='lab__textsecond'> insurance plans</p></div>
    <div className="lab"><CgSandClock className='lab__icon'/><p className='lab__textfirst'>Short waiting</p> <p className='lab__textsecond'>times</p></div>
    <div className="lab"><BsCalendar2Check className='lab__icon' /><p className='lab__textfirst'>No appointment </p> <p className='lab__textsecond'>needed</p></div>
    </div>
   <a href="#heading2"> <button type="button" class="btn btn-primary learn__buton">Learn More</button></a>
   <p id='heading2'>OUR TEAM</p>
   <div className="wrap">
   <div class="card team__card" style={{width:"18rem"}}>
  <img src="https://www.discoverwalks.com/blog/wp-content/uploads/2022/03/640px-siddhartha_mukherjee_34273733145.jpg" class="card-img-top team__image" alt="..."/>
  <div class="card-body">
    <p class="card-text"><b>Dr. Siddhartha Mukherjee–Biologist.</b>Siddhartha is a physician, biologist, and author. </p>
  </div>
</div>
<div class="card team__card" style={{width:"18rem"}}>
  <img src="data:image/jpeg;base64,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" class="card-img-top team__image" alt="..."/>
  <div class="card-body">
    <p class="card-text"><b>Dr. Naresh Trehan – cardiothoracic surgeon</b>.He serves as the chairman, managing director, and chief cardiac surgeon of Medanta.</p>
  </div>
</div>
<div class="card team__card" style={{width:"18rem"}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx56BNRkJXECVRJd28_T_qcr1_INRgqSOLYw&usqp=CAU" alt="..." className='team__image'/>
  <div class="card-body">
    <p class="card-text"><b>Dr. Sudhansu Bhattacharyya – Cardiac surgeon</b>He currently practices at Sir HN Reliance Foundation hospital and research centre in Mumbai.</p>
  </div>
</div>
   </div>
   <div className="wrap">
   <div class="card team__card" style={{width:"18rem"}}>
  <img src="https://www.vaidam.com/sites/default/files/dr_y_k_mishra.jpg" class="card-img-top team__image" alt="..."/>
  <div class="card-body">
    <p class="card-text"><b>Dr Y K Mishra-</b>one of the renowned & most experienced <b>cardiac surgeons </b>in India.
With an experience of over 32 years</p>
  </div>
</div>
<div class="card team__card" style={{width:"18rem"}}>
  <img src="https://www.vaidam.com/sites/default/files/dr-sandeep-vaishya-brain-tumours-neurology-neurosurgery-1.jpg" class="card-img-top team__image" alt="..."/>
  <div class="card-body">
    <p class="card-text"><b>Dr. Sandeep Vaishya-</b>one of the top <b>Neurosurgeons</b> in India.
He has 22+ years of experience in the field & has been associated with some of the best hospitals in India.</p>
  </div>
</div>
<div class="card team__card" style={{width:"18rem"}}>
  <img src="https://www.vaidam.com/sites/default/files/dr-rajeev-verma-orthopedics.jpg" class="card-img-top team__image" alt="..."/>
  <div class="card-body">
    <p class="card-text"><b>Dr. Rajeev Verma-</b> well known<b>Orthopedic and Joint Replacement Surgeon</b> , practicing for the past 15 years</p>
  </div>
</div>
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

export default About
