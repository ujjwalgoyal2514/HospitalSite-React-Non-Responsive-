import React from 'react'
import { Link } from 'react-router-dom'
import logo from "./../Components/images/logo.png"
import { useNavigate } from 'react-router-dom'
function ContactUs() {
    const navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault();
    alert("form submitted")
    navigate('/Contact Soon')
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
<h1 className='heading'>Contact Us</h1>

      <div className='about__us'>Welcome to our hospital's contact page! We value your feedback and would love to hear from you. If you have any questions or concerns, please don't hesitate to contact us using the form below or by calling our main line. Our dedicated team is available 24/7 to assist you with any medical inquiries or appointment scheduling. We also welcome any suggestions or feedback on how we can improve our services and better serve our patients. Thank you for choosing our hospital as your healthcare provider, and we look forward to hearing from you soon.</div>
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
    <label htmlFor="" className='form__entery3'>Email Id:<span className='asterik'>*</span></label><br />
      <input type="email" class="form-control input__box"  required='true'/>
    </div>
    <div class="col">
    <label htmlFor="" className='form__entery1'>Mobile No:<span className='asterik'>*</span></label><br />
      <input type="number" class="form-control input__box" required='true'/>
    </div>
  </div>
  <p>To schedule an appointment <a href='/'>BOOK ONLINE</a> or call us at: + 123-456-7890</p>
  <button type="submit" class="btn btn-secondary submit__buton">Submit</button>
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

export default ContactUs
