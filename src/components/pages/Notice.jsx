import React, { } from 'react'

import Card from '../layout/Card'

const Notice=()=>{
   return (
      <div className="page">
         <div className="container">
            <h1 className="mb-4">Notice</h1>
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
}
export default Notice;