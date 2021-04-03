import React, { useState, useEffect } from "react";
import axios from "axios";

import BookList from "../../layout/BookList";

//Seach box css
import "../../layout/SearchBox.css";
//icon
import SearchIcon from "@material-ui/icons/Search";

//css
import "./Books.css";

const Books = () => {
  //load bookslist from server
  const [booksList, setBooksList] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/MechApi/books/?format=json").then((res) => {
      console.log(res.data)
      setBooksList(res.data);
    });
  }, [setBooksList]);

  //for search box
  const [isSearch, setIsSearch] = useState(false);
  //for search filter
  const [searchText, setSearchText] = useState("");

  const searchClick = () => {
    setIsSearch(!isSearch);
  };

  return (
    <div className="page container">
      <div className="row">
        <div className="col-lg-8">
          <h1>Books {searchText}</h1>
        </div>
        <div className="col-lg-4">
          <div className="searchBox">
            <div
              className={isSearch ? "searchField fieldExpand" : "searchField"}
            >
              <span className={isSearch ? "searchClick" : "search "}>
                <input
                  type="text"
                  placeholder="Search a book ..."
                  onChange={(event) => {
                    setSearchText(event.target.value);
                  }}
                />
              </span>
              <span className="searchIcon" onClick={searchClick}>
                <SearchIcon />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {booksList.map((data) => (
          <div key={data.id} className="col-lg-3 col-md-4">
            <BookList
              link={data.url}
              name={data.title}
              writer={data.authorName}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Books;
