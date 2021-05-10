import React, { useState, useEffect, useCallback} from 'react';

// import useDebounce from "hooks/useDebounce";

export default function SearchBar(props){
  const [value, setValue] = useState("")
  // const userInput = useDebounce(value, 400);

  const onSearch = useCallback(props.onSearch, [value]);

  useEffect(() => {
    onSearch(value);
  }, [value, onSearch])

  return(
  <>
    <form autoComplete="off" onSubmit={event => event.preventDefault()}>
      <input
        data-testid="trail-name-input"
        className="search-input"
        name="search_bar"
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Where do you wanna search?"
      />
    </form>
  </>
  )
};