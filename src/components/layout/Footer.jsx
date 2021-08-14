import React from 'react';
import { Link } from "react-router-dom";


function Footer() {
   return (
      <div>
         <div className=" footer row p-4 text-center ">
            <div className="col-lg-2 offset-lg-1 my-auto">
              <b> MEAS-LOGO</b>
            </div>
            <div className="col-lg-4  my-auto">
            Mechanical Engineering Association of SUST
            <br/>A-building , SUST
            <br/>Email:meesust@gmail.com
            <br/>Phone:0171-1111-111
            </div>
            <div className="col-lg-2  my-auto ">

            <Link className="p-2" to="/faculty">Faculty</Link>
            <Link className="p-2" to="/notice">Notice</Link>
            <Link className="p-2" to="/library">Library</Link>
            <Link className="p-2" to="/event">Event</Link>  
            <Link className="p-2" to="/alumni">Alumni</Link>
            <Link className="p-2" to="/login">LOGIN</Link>
            </div>
         </div>
      </div>
   )
}

export default Footer
