import React, { useState } from 'react';
import axios from 'axios';
import Button from '../button'


export default function SearchBar(props){

  const [name, setName] = useState(props.name || "")

  return(
  <main >
  <section >
    <form 
    autoComplete="off"
    onSubmit={event => event.preventDefault()}
    >
      <input
        className="appointment__create-input text--semi-bold"
        name="search_bar"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter Trail Name"
        /*
          This must be a controlled component
        */
       data-testid="trail-name-input"
      />
    </form>
  </section>
</main>
  )
};