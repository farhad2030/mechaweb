import React, { useState, useEffect } from "react";
import axios from "axios";
//css
import "./Faculty.css";

//compoment
import StaffList from "../../layout/StaffList";

const Faculty = () => {

   //for teachers data
  const [teachersList, setTeachersList] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:4000/teachers").then((res) => {
      setTeachersList(res.data)
    });
  }, [setTeachersList]);


  //for staffs data
  const [staffsList, SetStaffsList] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:4000/teachers").then((res) => {
      SetStaffsList(res.data)
    });
  }, [SetStaffsList]);





  //for className add
  let [isTeacher, setIsTeacher] = useState(true);

  let teacherDrag = () => {
    setIsTeacher(isTeacher ? isTeacher : !isTeacher);
  };
  let staffDrag = () => {
    setIsTeacher(isTeacher ? !isTeacher : isTeacher);
  };

  return (
    <div className="page">
      <div className="container facultyContainer ">
        <div className="row facultyHeading ">
          <div className="row heading">
            <div className="col-6 ">
              <span
                className={isTeacher ? "empasisStyle" : ""}
                onClick={teacherDrag}
              >
                TEACHERS
              </span>
            </div>
            <div className="col-6">
              <span
                className={isTeacher ? "" : "empasisStyle"}
                onClick={staffDrag}
              >
                {" "}
                STAFFS
              </span>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div
            className={
              isTeacher
                ? "yesTeacher row teachersContainer"
                : "notTeacher row teachersContainer"
            }
          >
            <h1 className="mb-3">TEACHERS</h1>

            {teachersList.map((data,i) => (
              <div key={data.id} className="col-lg-4">
                <StaffList name={data.name} designation={data.designations} email={data.email} imageLink={data.imageLink}/>
              </div>
            ))}
          </div>
        </div>

        <div className="container-fluid">
          <div
            className={
              isTeacher
                ? "row notStaff  staffsContainer"
                : "row yesStaff staffsContainer"
            }
          >
            <h1 className="mt-5 mb-3">STAFFS</h1>
         

            {staffsList.map((data,i) => (
              <div key={data.id} className="col-lg-4">
                <StaffList name={data.name} designation={data.designations} email={data.email} imageLink={data.imageLink}/>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
