import React from 'react'
import { Link } from 'react-router-dom'
function ContactTransfer() {
  return (
    <div>
      <p className='successful'>You Will be Contacted Soon By Our Executive</p>
        <Link to='/'><button type="button" class="btn btn-secondary continue__buton">Continue to the Home Page</button></Link>
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

export default ContactTransfer
