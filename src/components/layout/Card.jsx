import React from 'react'

import {Link} from 'react-router-dom'


//css 
import './Card.css'


const Card= (props) => {



   return (
      <div>
         <div data-aos="zoom-in" className="cardList">
            <div className="cardBorder">
               <div className="card-body">
                  <h5 className="card-title">{props.title}</h5>
                  <span>{props.date}</span>
                  <p className="card-text">{props.text}</p>
               </div>
               <div className= {`bottomHide  ${props.cardBottom}`}>
                  <Link to={`/${props.dir}/${props.id}`}className="button">Show all</Link>
               </div>

            </div>
         </div>

      </div>
)}
export default Card;

