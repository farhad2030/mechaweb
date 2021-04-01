import React from "react";

import "../../../node_modules/aos/dist/aos.css";

//icon
import GetAppIcon from "@material-ui/icons/GetApp";

//css
import "./BookList.css";
import { Link } from "react-router-dom";
const BookList = (props) => {
  return (
    <div data-aos="zoom-in" className="listBody">
      <div className="photo col-4">
        <img src={props.image} alt="profile plhoto" />
      </div>
      <div className="description col-8">
        <div className="name">{props.name}</div>
        <div className="writer">By {props.writer}</div>
        <div className="download">
        <a rel={'external'}
    target="_blank" href={props.link} >
            <span>
              <GetAppIcon />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
export default BookList;
