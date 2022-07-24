// import { useState, useEffect, useContext } from 'react'
// import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
function Navigation() {
<main>
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button class="navbar-brand" type="button">Coder Connect</button>
    </div>
    <ul class="nav navbar-nav">
      <li><Link to = '/home' >Home</Link></li>
      <li><Link to='/'>About</Link></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><Link to='/signup'><span class="glyphicon glyphicon-user"></span> Sign up</Link></li>
      <li><Link to='/login'><span class="glyphicon glyphicon-user"></span> Log in</Link></li>
    </ul>
  </div>
</nav>
</main>
}

export default Navigation;





