import React, { useState, useEffect } from "react";
import axios from "axios";
import {Helmet} from "react-helmet";

import './notice.css'

const Notice = () => {
  const [noticeList, setNoticeList] = useState([]);
  useEffect(() => {
    axios.get(" http://127.0.0.1:8000/MechApi/notices/?format=json").then((res) => {
      setNoticeList(res.data);
    });

  }, [setNoticeList]);

  return (
    <div className="page">
        <Helmet>
                <meta charSet="utf-8" />
                <title>MEE SUST / NOTICE </title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="container">
        <h1 className="mb-4">Notice</h1>
        <div className="row">
          {noticeList.map((val, i) => (
            <div key={val.id} className="  col-xl-3 col-md-4 col-12 p-3 notice">
             <p>{val.title}</p>
             <p className="">date</p>
             <div className="noticeImage">
              
             <a target="blank" href={val.imageURL}> <img src={val.imageURL} alt=""/>  <p> <span>Show all</span></p></a>  
             </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Notice;
