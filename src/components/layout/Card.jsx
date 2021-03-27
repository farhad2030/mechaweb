import React, {useEffect} from 'react'
import Aos from 'aos'
import '../../../node_modules/aos/dist/aos.css'

//css 
import './Card.css'


const Card= (params) => {

   useEffect(() => {
      Aos.init({
         duration:500
      });
      
   }, [])

   return (
      <div>
         <div data-aos="zoom-in" className="cardList">
            <div class="cardBorder">
               <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               </div>
               <div className="cardBottom">
                  <a href="#" class="button">Show all</a>
               </div>

            </div>
         </div>

      </div>
)}
export default Card;

