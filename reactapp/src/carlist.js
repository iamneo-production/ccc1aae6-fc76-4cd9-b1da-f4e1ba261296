import logo from './users/5.jpg';
import './App.css';
import './user.css';


function Carlist(){
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
                     {/* <li class="nav-item dropdown">
                        <a
                           class="nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic">
                            <img src={logo} alt="user" class="rounded-circle" width="31" alt="user" ></img>
                            
                        </a>
                        <ul
                           class="dropdown-menu dropdown-menu-end user-dd animated"
                           aria-labelledby="navbarDropdown"
                           >
                           <a class="dropdown-item"
                              ><i class="mdi mdi-account me-1 ms-1"></i> My Profile</a>
                           <div class="dropdown-divider"></div>
                           <a class="dropdown-item" href="javascript:void(0)"
                              ><i class="fa fa-power-off me-1 ms-1"></i> Logout</a
                              >
                           <div class="dropdown-divider"></div>
                           <div class="ps-4 p-10">
                              <a
                                 href="javascript:void(0)"
                                 class="btn btn-sm btn-success btn-rounded text-white">
                                 View Profile</a>
                           </div>
                        </ul>
                     </li> */}


                   <li class="nav-item dropdown">
                        <a
                           class="
                           nav-link
                           dropdown-toggle
                           text-muted
                           waves-effect waves-dark
                           pro-pic
                           "
                           href="#"
                           id="navbarDropdown"
                           role="button"
                           data-bs-toggle="dropdown"
                           aria-expanded="false"
                           >
                        {/* <img
                           src="assets/images/users/1.jpg"
                           alt="user"
                           class="rounded-circle"
                           width="31"
                           /> */}
                        <img src={logo} alt="user" class="rounded-circle" width="39"></img>


                        </a>
                        <ul
                           class="dropdown-menu dropdown-menu-end user-dd animated"
                           aria-labelledby="navbarDropdown"
                           >
                           <a class="dropdown-item"
                              ><i class="mdi mdi-account me-1 ms-1"></i> My Profile</a>
                           <div class="dropdown-divider"></div>
                           <a class="dropdown-item" href="javascript:void(0)"
                              ><i class="fa fa-power-off me-1 ms-1"></i> Logout</a>
                              
                           <div class="dropdown-divider"></div>
                           <div class="ps-4 p-10">
                              <a
                                 href="javascript:void(0)"
                                 class="btn btn-sm btn-success btn-rounded text-white"
                                 >View Profile</a>
                                 
                           </div>
                        </ul>
                     </li>

                     {/* <div class="dropdown">
                     <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                     </button>
                     <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <li><button class="dropdown-item" type="button">Action</button></li>
                        <li><button class="dropdown-item" type="button">Another action</button></li>
                        <li><button class="dropdown-item" type="button">Something else here</button></li>
                     </ul>
                     </div> */}
                  </ul>
               </div>
            </nav>
         </header>


      <aside class="left-sidebar" data-sidebarbg="skin5">
            <div class="scroll-sidebar">
               <nav class="sidebar-nav">
                  <ul id="sidebarnav" class="pt-4">
                     <li class="sidebar-item">
                        <a class="sidebar-link waves-effect waves-dark sidebar-link" href="#" aria-expanded="false"><i class="mdi mdi-view-dashboard"></i
                           ><span class="hide-menu">Dashboard</span></a>
                     </li>
                     <li class="sidebar-item">
                        <a class="sidebar-link waves-effect waves-dark sidebar-link" href="Addcar" aria-expanded="false"><i class="mdi mdi-border-inside"></i>
                           <span class="hide-menu">Add Car</span></a>


                     </li>
                     <li class="sidebar-item">
                        <a class="sidebar-link waves-effect waves-dark sidebar-link" href="" aria-expanded="false"><i class="mdi mdi-blur-linear"></i>
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
                        <a class="sidebar-link waves-effect waves-dark sidebar-link" href="" aria-expanded="false"><i class="mdi mdi-blur-linear"></i>
                           <span class="hide-menu">Previous Booking </span></a>
                        
                     </li>
                    
                  </ul>
               </nav>
            </div>
         </aside>


        
        <div class="container pad mt-5">
           <h2 class="text-center">Car List </h2>


            <div class="card">
                <h5 class="card-header bg-dark text-white">1 . Car Model : Tata Punch</h5>
                <div class="card-body">
                    <h5 class="card-title">price : One Day 2500 /-</h5>
                    <p class="card-text"><b>Phone Number : </b> 123456899 &nbsp; || &nbsp;<b> Address :</b> No -45A, old Post Office street,
                    kondalamapatty, salem - 10</p>
                    <a href="#" class="btn btn-primary">Booking</a>
                </div>
            </div>
            <div class="card">
                <h5 class="card-header bg-dark text-white">2 . Car Model : Tata Alterz</h5>
                <div class="card-body">
                    <h5 class="card-title">price : One Day 3500 /-</h5>
                    <p class="card-text"><b>Phone Number : </b> 123456899 &nbsp; || &nbsp;<b> Address :</b> No -45A, old Post Office street,
                    kondalamapatty, salem - 10</p>
                    <a href="#" class="btn btn-primary">Booking</a>
                </div>
            </div>
            
        </div>
         
          

      </div>
    </div>
  );
}


export default Carlist;
