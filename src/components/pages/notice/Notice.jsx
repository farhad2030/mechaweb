import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "../../layout/Card";

const Notice = () => {
  const [noticeList, setNoticeList] = useState([]);
  useEffect(() => {
    axios.get(" http://127.0.0.1:8000/MechApi/notices/?format=json").then((res) => {
      setNoticeList(res.data);
    });

  }, [setNoticeList]);

  return (
    <div className="page">
      <div className="container">
        <h1 className="mb-4">Notice</h1>
        <div className="row">
          {noticeList.map((val, i) => (
            <div key={val.id} className="col-xl-3 col-md-4 col-12">
             <p>{val.title}</p>
              <img src={val.imageURL} alt=""/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Notice;
