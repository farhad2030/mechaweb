import React, { useState ,useEffect} from 'react'
import {Link} from 'react-router-dom'


import './Navbar.css'

const Navbar = () => {

   const [isNavbarOpen, setIsNavbarOpen] = useState(false);

   const navToggle = () => {
      setIsNavbarOpen(!isNavbarOpen)
   }
 
   return (
      <div>
         <nav>
            <div className="navContainer" >

               {/* for mobile nav functionality */}
               <div className="mobileNavIcon">



                  <div className='smallBackgroundCircle'>
                     <div className="leftRoundedShape"></div>
                     <div className="rightRoundedShap"></div>
                     <div className="smallCircle" onClick={navToggle}>
                        <div className={isNavbarOpen ? 'bigCircle' : 'circle'}></div>

                        <div className={isNavbarOpen ? 'lineTransform line' : 'line'} >
                           <div className="line1"></div>
                           <div className="line2"></div>
                           <div className="line3"></div>
                        </div>{/**------line end------ */}
                     </div> {/* end smallCircle */}
                  </div>
               </div>
               {/* end mobile nav functionality */}
               <ul className={isNavbarOpen ? '' : 'transformMobileMenuList'}>
                  <li onClick={navToggle}><Link to='/faculty'>Faculty</Link></li>
                  <li onClick={navToggle}><Link to='/notice'>Notice</Link></li>
                  <li onClick={navToggle}><Link to='/library'>Library</Link></li>
                  <li onClick={navToggle}><Link to='/event'>Event</Link></li>
                  <li onClick={navToggle}><Link to='/alumni'>Alumni</Link></li>
                  <li onClick={navToggle}><Link to='/login'>LOG IN</Link></li>
               </ul>

            </div>

            {/* for logo */}
            <div className={isNavbarOpen ? "MEEcontainer transformLogo" : "MEEcontainer "}>
               <Link to="/">
                  <div className="MEE">
                     <div className="mecha">MECHANICAL</div>
                     <div className="eng">ENGINEERING</div>
                  </div>
               </Link>
            </div>

            {/* bottom circle */}
            <div className={isNavbarOpen ? "bottomCircle bigBottomCircle" : "bottomCircle "}></div>
         </nav >
      </div >
   )
}
export default Navbar;



