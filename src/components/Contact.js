import React from 'react';



function Contact() {
  return (
    <div className="">
       <div className="row mt-3 p-2">
           <div className="col-sm-8 col-lg-3 box-contact">
               <h4>Phone</h4>
               8145542317
           </div>
           <div className="col-sm-8 col-lg-3 box-contact">
               <h4>Email</h4>
               1@2.com
           </div>
           <div className="col-sm-8 col-lg-3 box-contact">
               <h4>address</h4>
               Birbhum, West Bengal
           </div>
       </div>
       <div className="reg-form">
        <h1>Get in touch</h1>
<form class="mb-3">
  
  
  <input type="email" name="email" class="form-control mb-1" id="exampleFormControlInput2" placeholder="Enter your email"/>
  
  <input type="password" name="password" class="form-control mb-1" id="exampleFormControlInput5" placeholder="Choose password"/>
  <input type="number" name="phone" class="form-control mb-1" id="exampleFormControlInput3" placeholder="Enter your phone number"/>
  <textarea name="message" class="form-control mb-3" placeholder="message"></textarea>
   <button type="submit" className="btn btn-success"> Send Message</button>
</form>

    </div>
    </div>
  );
}

export default Contact;