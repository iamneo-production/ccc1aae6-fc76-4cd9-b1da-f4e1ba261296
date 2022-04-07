import './App.css';


function App() {
  return (
    <div className="App">
       <body class="full">
     {/* <img src='assets/images/cabbg.jpg'></img> */}
        <div class="container h-100 mt-4 ">
          <div class="row h-100 justify-content-center align-items-center">
              <form class="col-md-9 bg-white">
                  <div class="AppForm shadow-lg">
                      <div class="row">
                          <div class="col-md-6 d-flex justify-content-center align-items-center">
                              <div class="AppFormLeft">
                                  <h1 class="text-center">Login</h1>
                                  <div class="form-group position-relative mb-4">
                                      <input type="text" class="form-control border-top-1 border-right-0 border-left-0 rounded-0 shadow-none" id="username"
                                          placeholder="Username"></input>
                                          <i class="fa fa-user-o"></i>
                                  </div>
                                  <div class="form-group position-relative mb-4">
                                      <input type="password" class="form-control border-top-1 border-right-0 border-left-0 rounded-0 shadow-none" id="password"
                                          placeholder="Password"></input>
                                          <i class="fa fa-key"></i>
                                  </div>
                                  <div class="row  mt-4 mb-4">
                                      <div class="col-md-6">
                                          <div class="form-check">
                                              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                                              <label class="form-check-label" for="defaultCheck1">
                                                  Remember me
                                              </label>
                                          </div>
                                      </div>
                                      {/* <div class="col-md-6 text-right">
                                          <a href="">Forgot Password?</a>
                                      </div> */}
                                  </div>
{/* 
                                  <button class="btn btn-success btn-block shadow border-0 py-2 text-uppercase">
                                      Login
                                  </button> */}
                                    <a href="/admin" class="btn btn-success py-2 text-uppercase">Login</a>


                                  <p class="text-center mt-5">
                                      Don't have an account?
                                      <span>
                                      {/* <Link to="/register"></Link>   */}

                                      <a href="/register">Create your account</a>
                                      </span>
                                  </p>
                              </div>
                          </div>
                          <div class="col-md-6">
                              <div class="AppFormRight position-relative d-flex justify-content-center flex-column align-items-center text-center p-5 text-white">
                                  <h2 class="position-relative px-4 pb-3 mb-4">Welcome</h2>
                                  <p class="weight-50">Lorem ipsuing elit. Molomos totam est voluptatum i omos totam est voluptatum i ure sit consectetur ill</p>
                              </div>
                          </div>
                      </div>
                  </div>

              </form>
          </div>
      </div>
    </body>
      
    </div>
  );
}

export default App;
