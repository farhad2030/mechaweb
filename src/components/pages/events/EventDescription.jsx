import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Card from "../../layout/Card";

export const EventDescrption = () => {
  let { eventId } = useParams();

  const [eventList, setEventList] = useState([]);
  const [event, setEvent] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/notice").then((res) => {
      setEventList(res.data);
    });
  }, [setEventList]);

  useEffect(() => {
    let a = [];
    eventList.map((dat, i) => (String(dat.id)=== eventId ? a.push(dat) : null));
    setEvent(a);
    // console.log(event);
  }, [eventList,eventId]);
  // console.log(eventId);
  return (
    <div className="page container">
      <h1 className="mb-5">event Description </h1>
      <div className="row">
        <div className="offset-lg-2 col-lg-8 col-md-12">
          {event.map((dat, i) => (
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
