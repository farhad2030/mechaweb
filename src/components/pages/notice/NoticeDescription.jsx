import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Card from "../../layout/Card";

export const NoticeDescription = () => {
  let { noticeId } = useParams();
  // console.log(noticeId)

  const [noticeList, setNoticeList] = useState([]);
  const [notice, setNotice] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/notice").then((res) => {
      setNoticeList(res.data);
    });
  }, []);

  useEffect(() => {
    let a = [];
    noticeList.map((dat, i) => (dat.id == noticeId ? a.push(dat) : null));
    setNotice(a);
    //  console.log(notice);
  }, [noticeList,noticeId]);
  return (
    <div className="page container">
      <h1 className='mb-5'>Notice Description </h1>
      <div className="row">
        <div className="offset-lg-2 col-lg-8 col-md-12">
          {notice.map((dat, i) => (
            <Card
              key={dat.id}
              title={dat.title}
              text={dat.description}
              date={dat.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
