import React,{useEffect,useState} from "react";
import axios from'axios'
import Card from "../../layout/Card";

import {Helmet} from "react-helmet";

const Event = () => {
  const [eventList, setEventList] = useState([]);
  useEffect(() => {
    axios.get("  http://localhost:4000/notice").then((res) => {
      setEventList(res.data);
    });
  }, [setEventList]);
  return (
    <div className="page">
          <Helmet>
                <meta charSet="utf-8" />
                <title>MEE SUST / EVENT </title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="container">
        <h1 className="mb-4">Event</h1>
        <div className="row">
          {eventList.map((val, i) => (
            <div key={val.id}className="col-xl-3 col-md-4 col-12">
              <Card
              dir={"event"}
                id={val.id}
                cardBottom="cardBottom"
                text={`${val.description.slice(1,100) }. . . . `}
                title={val.title}
                date={val.date}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Event;
