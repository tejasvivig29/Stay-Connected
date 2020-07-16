import React from 'react';

const Navbar = () => {
    return(
        <nav>
    <div className="nav-wrapper" >
      <a href="#" className="brand-logo left">Logo</a>
      <ul id="nav-mobile" class="right">
        <li><a href="sass.html">Login</a></li>
        <li><a href="badges.html">Signup</a></li>
        <li><a href="collapsible.html">Profile</a></li>
      </ul>
    </div>
  </nav>
    )
}

export default Navbar;