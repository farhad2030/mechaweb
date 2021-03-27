import React, {useEffect } from 'react'
import { Fade, Transform, FadeTransform } from 'react-animation-components'

import Aos from 'aos'
import '../../../node_modules/aos/dist/aos.css'

import './StaffList.css'

const StaffsList = (props) => {
   useEffect(() => {
      Aos.init({
         duration:500,
      });
      
   }, [])

   return (
      
  
      <div data-aos="zoom-out"  className="listBody" >

         <div className="profilePic col-4">
            <img src="https://picsum.photos/id/1/200/300" alt="profile plhoto" />
         </div>
         <div className="description col-8">
            <div className="name">
            {props.name}
                  </div>
            <div className="designation">
               {props.designation}
                  </div>
         </div>

      </div>
   )
}
export default StaffsList;