import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

import List from "../../smallComponents/List";

export const QuestionsList = () => {
  let id = useParams();
  const [list, setList] = useState([]);
  let [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/MechApi/questions").then((res) => {
      setQuestionList(res.data);
    });
  }, [setQuestionList]);

  useEffect(() => {
    let a = [];
    questionList.map((val, i) =>
      val.session_year === id.semester
        ? val.questions.map((data) =>
            //setList([...list,data]):null
            data.year === id.year ? a.push(data) : null
          )
        : null
    );
    setList(a);
  }, [questionList,id.semester,id.year]);

  return (
    <div className="page container">
      <h1>Questions List</h1>
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          {list.map((data, i) => (
            <Link key={i}to={data.link}>
              <List text={data.title} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
