import React from 'react'





//css 
import './LibraryItem.css'

const LibraryItem = (props) => {
 

   return (
      <div data-aos="zoom-in" className="libraryList">
         <div className="listBody" >

            <div className="description col-8">
               <div className="name">
                  {props.name}
               </div>
            </div>
            <div className="infoPic  col-4">
               <img src={props.image} alt="profile" />
            </div>

         </div>
      </div>
   );
}
export default LibraryItem;
