import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const navToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <div>

      {/* for login fullwidth */}
       <div className={open?"fullWidth":""}>
      <nav> 
        <div className="navContainer">
          {/* for mobile nav functionality */}
          <div className="mobileNavIcon">
            <div className="smallBackgroundCircle">
              <div className="leftRoundedShape"></div>
              <div className="rightRoundedShap"></div>
              <div className="smallCircle" onClick={navToggle}>
                <div className={isNavbarOpen ? "bigCircle" : "circle"}></div>

                <div className={isNavbarOpen ? "lineTransform line" : "line"}>
                  <div className="line1"></div>
                  <div className="line2"></div>
                  <div className="line3"></div>
                </div>
                {/**------line end------ */}
              </div>{" "}
              {/* end smallCircle */}
            </div>
          </div>
          {/* end mobile nav functionality */}
          <ul className={isNavbarOpen ? "" : "transformMobileMenuList"}>
            <li onClick={navToggle}>
              <Link to="/faculty">Faculty</Link>
            </li>
            <li onClick={navToggle}>
              <Link to="/notice">Notice</Link>
            </li>
            <li onClick={navToggle}>
              <Link to="/library">Library</Link>
            </li>
            <li onClick={navToggle}>
              <Link to="/event">Event</Link>
            </li>
            <li onClick={navToggle}>
              <Link to="/alumni">Alumni</Link>
            </li>
            <li
              data-toggle="modal"
              data-target="#exampleModalCenter"
              onClick={navToggle}
            >
              <Link to="" onClick={handleClickOpen}>LOG IN</Link>
            </li>
          </ul>
        </div>

        {/* for logo */}
        <div
          className={
            isNavbarOpen ? "MEEcontainer transformLogo" : "MEEcontainer "
          }
        >
          <Link to="/">
            <div className="MEE">
              <div className="mecha">MECHANICAL</div>
              <div className="eng">ENGINEERING</div>
            </div>
          </Link>
        </div>

        {/* bottom circle */}
        <div
          className={
            isNavbarOpen ? "bottomCircle bigBottomCircle" : "bottomCircle "
          }
        ></div>

    


      </nav>


 
 
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        className="paperFullWidth"
        disableBackdropClick={true}
      >
        <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
              
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
                <Link to="/">Forgetten password ?</Link>
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
   
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary">
            Agree
          </Button>
        </DialogActions>
    
      </Dialog>

    </div>
    </div>
  );
};
export default Navbar;
