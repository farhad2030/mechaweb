import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


import BookList from '../layout/BookList'

import SearchBox from '../layout/SearchBox'


//css
import './Books.css'

const Books = () => {
   const imagelink = "https://picsum.photos/200/400"

   const [booksList, setBooksList] = useState([]);

   useEffect(() => {
      loadData();
   }, [setBooksList])

   const loadData = async () => {
      const result = await axios.get("http://localhost:4000/books");
      setBooksList(result.data);
   }





   return (
      <div className="page container">

         <div className="row">
            <div className="col-lg-8">
               {/* <h1>Books {users[0].name}</h1> */}
               <h1>Books </h1>
            </div>
            <div className="col-lg-4">
               <SearchBox />
            </div>
         </div>

         <div className="row">

            {booksList.map((data, index) => (
               <div className="col-lg-4 col-md-4">
                  <BookList image={data.image_link} link={data.download_link} name={data.name} writer={data.writer} />
               </div>
            ))}




         </div>

      </div>
   )
}
export default Books;