import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
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

      <div className="facultyContainer">
        <div className="teachersContainer0">tech</div>
        <div className="staffsContainer0">staff</div>
      </div>
    </div>
  );
};

export default Faculty;
