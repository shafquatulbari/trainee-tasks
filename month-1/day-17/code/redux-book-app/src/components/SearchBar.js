// SearchBar.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchBooks } from "../actions/bookActions";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch(); // Get the dispatch function from the Redux store

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchBooks(query)); // Dispatch the fetchBooks action with the query
  };

  return (
    <form onSubmit={handleSearch} className="flex justify-center p-4">
      <input
        type="text"
        placeholder="Search for books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-2/3 p-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
