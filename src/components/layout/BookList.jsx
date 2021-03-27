import React, {useState,useEffect } from 'react'
import axios from 'axios'
import Aos from 'aos'
import '../../../node_modules/aos/dist/aos.css'

//icon
import GetAppIcon from '@material-ui/icons/GetApp';

//data
import data from '../../bookslist.json'

//css
import './BookList.css'
import { Link } from 'react-router-dom';
const BookList = (props) => {
   console.log(props.link)
   useEffect(() => {
      Aos.init({
         duration: 1000,
      })

   }, [])

   // const [list,setList] = useState([]);

   // useEffect(() => {
   //    loadusers();
   // }, []);

   // const loadusers = async () => {
   //    const result = await axios.get("http://localhost:4000/books");
    
   //    setList(result);
   // }

   return (
      <div data-aos="zoom-in"className="listBody">



         <div className="photo col-4">
            <img src={props.image} alt="profile plhoto" />
         </div>
         <div  className="description col-8">
           <div className="name">
               {props.name}
            </div>
            <div className="writer">
               By {props.writer}
            </div>
            <div className="download">
               <Link to={props.link}><span><GetAppIcon /></span></Link>
            </div>
         </div>

      </div>
   )
}
export default BookList;