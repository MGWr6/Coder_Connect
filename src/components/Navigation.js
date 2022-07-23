// import { useState, useEffect, useContext } from 'react'
// import { useNavigate } from 'react-router-dom';
function Navigation() {
<main>
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button class="navbar-brand" type="button">Coder Connect</button>
    </div>
    <ul class="nav navbar-nav">
      <li><button type="button">Home</button></li>
      <li><button type="button">another page</button></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a href=""><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
      <li><a href=""><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul>
  </div>
</nav>
</main>
}

export default Navigation;










    // const navigate = useNavigate();

    // let loginActions = (
    //     <>
    //         <li style={{ float: 'right' }}>
    //             <a href="#" onClick={() => navigate("/")}>
    //                 Sign Up
    //             </a>
    //         </li>
    //         <li style={{ float: 'right' }}>
    //             <a href="#" onClick={() => navigate("/")}>
    //                 Login
    //             </a>
    //         </li>
    //     </>
    // )



    // return (
    //   <nav>
    //     <a>Home</a>
    //     <a>Placeholder</a>
    //     <a>Placeholder</a>
    //   </nav>) 