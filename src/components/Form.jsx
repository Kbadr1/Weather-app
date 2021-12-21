import React from "react";

const Form = ({ getSearchResults, searchTerm, updateSearch }) => {
  return (
    <form onSubmit={getSearchResults}>
      <input
        type="text"
        placeholder="Your City"
        value={searchTerm}
        onChange={updateSearch}
      />
      <button type="submit">Check</button>
    </form>
  );
};

export default Form;
