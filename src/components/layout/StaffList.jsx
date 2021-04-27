import React from "react";

import "./StaffList.css";

const StaffsList = (props) => {
  return (
    <div data-aos="zoom-out" className="listBody">
      <div className="profilePic col-4">
        <img src={props.imageLink} alt="profile" />
      </div>
      <div className="description col-8">
        <div className="name">{props.name}</div>
        <div className="designation">{props.designation}</div>
        <div className="email">{props.email}</div>
        <div className="linkinid">{props.linkedinId}</div>
        <div className="session">{props.session}</div>
        <div className="reg">{props.reg}</div>
      </div>
    </div>
  );
};
export default StaffsList;
