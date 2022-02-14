import React from 'react';

import {Link} from 'react-router-dom'
//import logo from './images/logo.jpg'

function Navbar() {
  return (
    <div>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
   
  <a class="navbar-brand" href="/">ibook</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav  ml-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/about">About</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/service">Service</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/contact">Contact Us</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/signin">Sign In</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/register">Register</Link>
      </li>
    </ul>
    
  </div>
</nav>

     
    </div>
  );
}

export default Navbar;