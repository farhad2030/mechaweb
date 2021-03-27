import React, { useEffect} from 'react'
import Aos from 'aos'
import '../../../node_modules/aos/dist/aos.css'



//css 
import './LibraryItem.css'

const LibraryItem = (props) => {
   useEffect(() => {
      Aos.init({ duration: 1000 ,
         
      })
   }, [])

   return (
      <div data-aos="zoom-in"  className="libraryList">
         <div className="listBody" >

            <div className="description col-8">
               <div className="name">
                  {props.name}
               </div>
            </div>
            <div className="infoPic  col-4">
               <img src={props.image} alt="profile photo" />
            </div>

         </div>
      </div>
   );
}
export default LibraryItem;
