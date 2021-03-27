import React, {} from 'react'

import Card from '../layout/Card'


const Event =()=>{
   return(
      <div className="page">
      <div className="container">

         <h1 className="mb-4">Event</h1>
         <div className="row">
            <div className="col-xl-3 col-md-4 col-12">
               <Card/>
            </div>
            <div className="col-xl-3 col-md-4 col-12">
               <Card/>
            </div>
            <div className="col-xl-3 col-md-4 col-12">
               <Card/>
            </div>
            <div className="col-xl-3 col-md-4 col-12">
               <Card/>
            </div>
         </div>
      </div>
   </div>

   )
};
export default Event;
