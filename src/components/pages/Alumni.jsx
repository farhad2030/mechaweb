import React, {  } from 'react'

import StaffList from '../layout/StaffList'


const Alumni =()=>{
   return(
      <div className="page">
      <div className="container">
         <h1 className="mb-4">Alumni</h1>
         <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
               <StaffList name="Name 1" designation="designation" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
               <StaffList name="Name 1" designation="designation" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
               <StaffList name="Name 1" designation="designation" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
               <StaffList name="Name 1" designation="designation" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
               <StaffList name="Name 1" designation="designation" />
            </div>
          
         </div>
      </div>
   </div>
   )
};
export default Alumni;
