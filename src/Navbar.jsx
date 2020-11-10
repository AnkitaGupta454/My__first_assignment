 import React from 'react';
 import NotificationsIcon from '@material-ui/icons/Notifications';
 import MessageIcon from '@material-ui/icons/Message';
 const Navbar=()=>{
     return(
     <>
     <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-12 mx-auto">
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav mx-auto  mb-2 mb-lg-0" >
      <a className="nav-link " href="#">Dashboard </a>
      <a className="nav-link active" href="#">Find_Experts
     <span className="sr-only">(current)</span></a>
      <a className="nav-link" href="#">Discussions</a>
      <div className="mt-1 ml-5">
      <NotificationsIcon/>
      <div className="ml-4">
      <MessageIcon/>
      </div>
      </div>
      </div>
      
  </div>
</nav>
</div>
</div>
</div>
     </>)
 }

 export default Navbar;