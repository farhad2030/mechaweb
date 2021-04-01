import React, { useState } from 'react'
//icon
import SearchIcon from '@material-ui/icons/Search';

//css 
import './SearchBox.css';

const SearchBox = (props) => {
   const [isSearch, setIsSearch] = useState(false);

   const searchClick = () => {

      setIsSearch(!isSearch)
   }
   return (
      <div className="searchBox">
         {/* <input classsName="searchField" type="text" /> */}
         <div className={isSearch ? "searchField fieldExpand" : "searchField"}>
            <span className={isSearch ? "searchClick" : "search "}>
               <input type="text" placeholder={props.placeholder}/>
            </span>
            <span className="searchIcon" onClick={searchClick}>
               <SearchIcon />
            </span>
         </div>
       </div>
   ) 
}

export default SearchBox;
