import React, { useState, useEffect } from "react"
import axios from 'axios'
import { Link } from 'react-router-dom'
import {Helmet} from "react-helmet";
import List from '../../smallComponents/List'


const Questions = () => {
   const [questionList, setQuestionList] = useState([]);
   useEffect(() => {
      loadData();
   }, [])
   const loadData = async () => {
      const result = await axios.get("http://127.0.0.1:8000/MechApi/questions")
      setQuestionList(result.data);
   }
   return (
      <div className="page container">
           <Helmet>
                <meta charSet="utf-8" />
                <title>MEE SUST / QUESTIONS </title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
         <h1>Questions</h1>
         <div className="row">
            <div className="col-lg-4 offset-lg-4">

               {questionList.map((data, index) => (

                  <Link key={index} to={`/library/questions/${data.session_year}`}> <List  text={data.session_year}/></Link>

               ))}

               

            </div>
         </div>

      </div>

   )
}
export default Questions;