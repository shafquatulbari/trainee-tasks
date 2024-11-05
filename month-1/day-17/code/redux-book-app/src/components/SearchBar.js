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
        className="w-2/3 p-2 rounded-l-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-800 text-white"
      />
      <button
        type="submit"
        className="p-2 bg-red-600 text-white rounded-r-lg hover:bg-red-700 transition font-semibold"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
