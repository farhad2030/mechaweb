import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link,useParams } from "react-router-dom";

import List from "../../smallComponents/List";

const Session = () => {
  
  let { semester } = useParams();

  const [year, setYear] = useState([]);
  const [uniqueYear, setuniqueYear] = useState([]);
  const [questionList, setQuestionList] = useState([]);


  // console.log(semester);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/MechApi/questions").then((res) => {
      setQuestionList(res.data);
    });
  }, [setQuestionList]);

  useEffect(() => {
    let a = [];
    questionList.map((val, i) =>
      val.session_year === semester
        ?val.questions.map((data)=>a.push(data.year))
        :null
    )
    setYear(a)
    
   }, [questionList,semester]);
   useEffect(() => {
      setuniqueYear(Array.from(new Set(year)))

   }, [year])
  //  console.log(year)
  //  console.log(uniqueYear)
   
  return (
     
    <div className="page container">
      <h1>Session List </h1>

      <div className="row">
        <div className="col-lg-4 offset-lg-4">
          {uniqueYear.map((val, index) => (
           <Link key={index} to={`/library/questions/${semester}/${val}`}> <List  text={val} /></Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Session;
