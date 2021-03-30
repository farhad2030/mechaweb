import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "../../layout/Card";

const Notice = () => {
  const [noticeList, setNoticeList] = useState([]);
  useEffect(() => {
    axios.get("  http://localhost:4000/notice").then((res) => {
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
              <Card
                id={val.id}
                cardBottom="cardBottom"
                text={`${val.description.slice(0,100)}  . . . .`}
                title={val.title}
                date={val.date}
                dir={"notice"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Notice;
