import logo from './users/5.jpg';
import './App.css';

function Admin(){
  return (
    <div className="App">
      <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" 
      data-sidebartype="full" data-sidebar-position="absolute" data-header-position="absolute"
       data-boxed-layout="full">


         <header class="topbar" data-navbarbg="skin5">
            <nav class="navbar top-navbar navbar-expand-md navbar-dark">
               <div class="navbar-collapse collapse mb-5" id="navbarSupportedContent" data-navbarbg="skin5">
                  <ul class="navbar-nav float-start me-auto">
                     <li class="nav-item d-none d-lg-block">
                        <a class="nav-link sidebartoggler waves-effect waves-light" data-sidebartype="mini-sidebar">
                           <i class="mdi mdi-menu font-24"></i>
                           </a>
                     </li><br></br>
                     <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           <span class="d-none d-md-block text-uppercase"><b>Rentx-Car</b></span>
                        </a>
                     </li>
                  </ul>
                  <ul class="navbar-nav float-end">
                     

                   <li class="nav-item dropdown">
                        <a>
                           
                       
                        <img src={logo} alt="user" class="rounded-circle" width="39"></img>
                        {/* <a class="text-white" href=""
                              ><i class="fa fa-power-off me-1 ms-1"></i> Logout</a> */}
                        </a>

                       
                     </li>

                  </ul>
               </div>
            </nav>
         </header>

      <aside class="left-sidebar" data-sidebarbg="skin5">
            <div class="scroll-sidebar">
               <nav class="sidebar-nav">
                  <ul id="sidebarnav" class="pt-4">
                     <li class="sidebar-item">
                        <a class="sidebar-link waves-effect waves-dark sidebar-link" href="admin" aria-expanded="false"><i class="mdi mdi-view-dashboard"></i
                           ><span class="hide-menu">Dashboard</span></a>
                     </li>
                     <li class="sidebar-item">
                        <a class="sidebar-link waves-effect waves-dark sidebar-link" href="addcar" aria-expanded="false"><i class="mdi mdi-border-inside"></i>
                           <span class="hide-menu">Add Car</span></a>
                     </li>
                     <li class="sidebar-item">
                        <a class="sidebar-link waves-effect waves-dark sidebar-link" href="carlist" aria-expanded="false"><i class="mdi mdi-blur-linear"></i>
                           <span class="hide-menu">Car Booking</span></a>
                     </li>
                     <li class="sidebar-item">
                        <a class="sidebar-link waves-effect waves-dark sidebar-link" href="user" aria-expanded="false"><i class="mdi mdi-border-inside"></i>
                           <span class="hide-menu">User Add</span></a>
                     </li>
                     <li class="sidebar-item">
                        <a class="sidebar-link waves-effect waves-dark sidebar-link" href="userlist" aria-expanded="false"><i class="mdi mdi-border-inside"></i>
                           <span class="hide-menu">User List</span></a>

                     </li>
                     
                   
                     
                     <li class="sidebar-item">
                        <a class="sidebar-link waves-effect waves-dark sidebar-link" href="bookinglist" aria-expanded="false"><i class="mdi mdi-blur-linear"></i>
                           <span class="hide-menu">Previous Booking </span></a>
                        
                     </li>
                   
                  </ul>
               </nav>
            </div>
         </aside>

         <div class="page-wrapper">
            <div class="page-breadcrumb">
               <div class="row">
                  <div class="col-12 d-flex no-block align-items-center">
                     <h4 class="page-title">Dashboard</h4>
                     <div class="ms-auto text-end">
                        <nav aria-label="breadcrumb">
                        </nav>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-lg-12 mt-5">
               <div class="card">
                  <div class="card-body">
                     <h4 class="card-title text-center"><b>Wellcome To The Car Booking Panel</b></h4>
                  </div>
               </div>
            </div>
         </div>

         
          

      </div>
    </div>
  );
}

export default Admin;
