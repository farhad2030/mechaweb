import React,{useState,useEffect} from "react";
import axios from 'axios'
import StaffList from "../layout/StaffList";
import {Helmet} from "react-helmet";
const Alumni = () => {
  //for  Alumni list
  const [alumniList, setAlumniList] = useState([]);

  useEffect(() => {
    axios
    .get("http://127.0.0.1:8000/MechApi/teachers/?format=json")

    .then((res) => {
      setAlumniList(res.data);
    }); 
  }, [setAlumniList]);
  console.log(alumniList)
  return (
    
    <div className="page">
         <Helmet>
                <meta charSet="utf-8" />
                <title>MEE SUST / ALUMNI </title>
            </Helmet>
      <div className="container">
        <h1 className="mb-4">Alumni</h1>
        <div className="row">
        {alumniList.map((data,i) => (
              <div key={data.id} className="col-lg-6">
                <StaffList name={data.name} designation={data.designation} email={`Email :${data.email}`} imageLink={data.photoURL} linkedinId={`LinkIn : ${data.linkedInId}`}
                reg={`Reg : ${data.designation}`}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Alumni;
