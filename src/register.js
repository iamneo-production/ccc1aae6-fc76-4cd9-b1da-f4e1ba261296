import logo from './logo.svg';
import './App.css';

function Register(){
  return (
    <div className="App">
     <body class="full">
        {/* <p>Register</p>
        <a href="/admin">Admin</a> */}
        <div class="container h-100 mt-4 ">
          <div class="row h-100 justify-content-center align-items-center">
              <form class="col-md-9 bg-white">
                  <div class="AppForm shadow-lg">
                      <div class="row">
                          <div class="col-md-6 d-flex justify-content-center align-items-center">
                              <div class="AppFormLeft mt-3">
                                  <h1 class="mt-2 text-center">Register</h1>
                                  <div class="form-group position-relative mb-4 mt-3">
                                      <input type="text" class="form-control border-top-1 border-right-0 border-left-0 rounded-0 shadow-none" id="username"
                                          placeholder="Username" required=""></input>
                                          <i class="fa fa-user-o"></i>
                                  </div>
                                  <div class="form-group position-relative mb-4">
                                      <input type="email" name="email" class="form-control border-top-1 border-right-0 border-left-0 rounded-0 shadow-none" id="username"
                                          placeholder="Email"></input>
                                          <i class="fa fa-user-o"></i>
                                  </div>
                                  <div class="form-group position-relative mb-4">
                                      <input type="password" class="form-control border-top-1 border-right-0 border-left-0 rounded-0 shadow-none" id="password"
                                          placeholder="Password"></input>
                                          <i class="fa fa-key"></i>
                                  </div>
                                  <div class="form-group position-relative mb-4">
                                      <input type="password" class="form-control border-top-1 border-right-0 border-left-0 rounded-0 shadow-none" id="password"
                                          placeholder="Address"></input>
                                          <i class="fa fa-key"></i>
                                  </div><div class="form-group position-relative mb-4"><span class="red">Upload Your Driving Licence</span>
                                      <input type="file" class="form-control border-top-1 border-right-0 border-left-0 rounded-0 shadow-none" id="upload"
                                          placeholder="upload"></input>
                                          <i class="fa fa-key"></i>
                                  </div>
                                  

                                  <button class="btn btn-success btn-block shadow border-0 py-2 text-uppercase">
                                      Register
                                  </button>

                                  <p class="text-center mt-5">
                                      Don't have an account?
                                      <span>
                                      {/* <Link to="/register"></Link>   */}

                                      <a href="/">Back to login </a>
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

export default Register;
