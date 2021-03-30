import React from 'react'
//css
import './List.css'

const List=(props)=>{
   return(
      
         <div data-aos="zoom-in" className="listBody">
            <span className="listItem">{props.text}</span>
         </div>

   )
}
export default List;