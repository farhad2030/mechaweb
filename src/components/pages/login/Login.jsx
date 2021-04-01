import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="page container">

 
      
      <div className="row">
        <div className="col-lg-4 offset-lg-4 ">
          <div className="loginPage">
            <div className="welcome">WELCOME</div>
            <div id="login" className="login">
              <form action="index.html">
                <input type="text" name="email" placeholder="E-MAIL" />
                <input type="password" name="password" placeholder="PASSWORD" />
                <button type="submit" name="login" id="login">
                  LOG IN
                </button>
              </form>
              <div>
                <a href="#">Forgetten password ?</a>
              </div>
              {/* <div id="registerNow" onClick="moveRegister()"> */}
                Register Now !
              {/* </div> */}
            </div>

            <div id="register" className="register">
              <form action="index.html">
                <input type="text" name="email" placeholder="E-MAIL" />
                <input type="password" name="password" placeholder="PASSWORD" />
                <button type="submit" name="register" id="register">
                  REGISTER NOW
                </button>
              </form>
              <div>
                Already registered ?{" "}
                {/* <span id="loginNow" onClick=moveLogin()}> */}
                  Please Login
                {/* </span> */}
              </div>
            </div>
          </div>
        </div>
     
      </div>
   
    </div>
  );
};
export default Login;
