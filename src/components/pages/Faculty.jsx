import React, { useState, useEffect } from 'react'

//css
import './Faculty.css'

//compoment
import StaffList from '../layout/StaffList'

const Faculty = () => {

   const [isTeacher, setIsTeacher] = useState(true);


   let teacherDrag = () => {
      setIsTeacher(isTeacher ? isTeacher : !isTeacher)
   }
   let staffDrag = () => {
      setIsTeacher(isTeacher ? !isTeacher : isTeacher)
   }

   // useEffect(() => {
   //    Aos.init({duration:200});
   // },[]);

   return (
      <div className="page">
         <div className="container facultyContainer ">
           
            <div className="row facultyHeading ">
               <div className="row heading">
                  <div className="col-6 ">
                     <span className={isTeacher ? "empasisStyle" : ''} onClick={teacherDrag} >TEACHERS</span>
                  </div>
                  <div className="col-6">
                     <span className={isTeacher ? "" : 'empasisStyle'} onClick={staffDrag}> STAFFS</span>
                  </div>
               </div>
            </div>


            <div className="container-fluid">
               <div className={isTeacher ? 'yesTeacher row teachersContainer' : 'notTeacher row teachersContainer'}>
                  <h1 className="mb-3">TEACHERS</h1>
                  <div className="col-lg-4">
                     <StaffList name="Teacher`s name" designation="designation" />
                  </div>
                  <div className="col-lg-4">
                     <StaffList name="Teacher`s name" designation="designation" />
                  </div>
               </div>  
            </div>

            <div className="container-fluid">
               <div className={isTeacher ? "row notStaff  staffsContainer" : "row yesStaff staffsContainer"}>
                  <h1 className="mt-5 mb-3">STAFFS</h1>

                  <div className="col-lg-4">
                     <StaffList name="Staff's name 1" designation="Designation" />
                  </div>
                  <div className="col-lg-4">
                     <StaffList name="Staff's name 2" designation="Designation" />
                  </div>
                  <div className="col-lg-4">
                     <StaffList name="Staff's name 3" designation="Designation" />
                  </div>
                  <div className="col-lg-4">
                     <StaffList name="Staff's name 4" designation="Designation" />
                  </div>
                
              
               </div>
            </div>

         </div>

      </div>

   )
};

export default Faculty;

