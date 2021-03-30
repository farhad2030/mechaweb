import React,{useState,useEffect} from "react";
import axios from 'axios'
import StaffList from "../layout/StaffList";

const Alumni = () => {
  //for  Alumni list
  const [alumniList, setAlumniList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/teachers").then((res) => {
      setAlumniList(res.data);
    });
  }, [setAlumniList]);
  return (
    <div className="page">
      <div className="container">
        <h1 className="mb-4">Alumni</h1>
        <div className="row">
        {alumniList.map((data,i) => (
              <div key={data.id} className="col-lg-4">
                <StaffList name={data.name} designation={data.designations} email={data.email} imageLink={data.imageLink}/>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Alumni;
