import React, { useState, useEffect } from "react";
import axios from "axios";
import {Helmet} from "react-helmet"
//css
import "./Faculty.css";

//compoment
import StaffList from "../../layout/StaffList";

const Faculty = () => {
  //for teachers data
  const [teachersList, setTeachersList] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/MechApi/teachers/?format=json")
      .then((res) => {
        setTeachersList(res.data);
      });
  }, [setTeachersList]);

  //for staffs data
  const [staffsList, SetStaffsList] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/MechApi/staffs/?format=json")
      .then((res) => {
        SetStaffsList(res.data);
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
    <div className="page faculty">
        <Helmet>
                <meta charSet="utf-8" />
                <title>MEE SUST / FACULTY </title>
               
            </Helmet>
      <div className="container facultyHeading">
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

      <div className="container-fluid facultyList">
        <div className="container-fluid">
          <div className="row">
            <div
              className={
                isTeacher
                  ? "teachersContainer col-lg-12 "
                  : "col-lg-12  notTeacher"
              }
            >
              <div className="row">
                {teachersList.map((data, i) => (
                  <div key={data.id} className="col-lg-4 col-md-6">
                    {/* <Grow> */}
                    <StaffList
                      name={data.name}
                      designation={data.designation}
                      email={data.email}
                      imageLink={data.photoURL}
                    />
                    {/* </Grow> */}
                  </div>
                ))}
              </div>
            </div>
            <div
              className={
                isTeacher ? "notStaff col-lg-12 " : "col-lg-12  staffsContainer"
              }
            >
              <div className="row">
                {staffsList.map((data, i) => (
                  <div key={data.id} className="col-lg-4  col-md-6">
                    {/* <Grow> */}
                    <StaffList
                      name={data.name}
                      designation={data.designation}
                      email={data.email}
                      imageLink={data.photoURL}
                    />
                    {/* </Grow> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
