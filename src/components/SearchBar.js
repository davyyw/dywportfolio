import { useNavigate } from "react-router-dom"
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

function SearchBar() {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState("");

    function searchBar(e){
      if (inputValue !== "") {
        navigate(`/search/${inputValue}`);
      }
    }

    function searchBarOnKeydown(e){
      if(e.key != 'Enter'){
        setInputValue(e.target.value.trim());
      }
      if(e.key == 'Enter'){
        if (inputValue !== "") {
          console.log(inputValue);
          navigate(`/search/${inputValue}`);
        }else if(e.target.value !== ""){
          navigate(`/search/${e.target.value.trim()}`);
        }
      }
    }
    return (
      <div className="searchbar-container">
      <InputBase
        placeholder="Search"
        inputProps={{ 'aria-label': 'search movies' }}
        onKeyDown={searchBarOnKeydown}
      />
      <IconButton type="submit" aria-label="search"  onClick={searchBar}>
        <SearchIcon />
      </IconButton>        
      </div>
    )
}

export default SearchBar;