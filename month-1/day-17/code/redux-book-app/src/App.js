// App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import BookDetail from "./components/BookDetail";
import Favorites from "./components/Favorites";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="bg-gray-900 min-h-screen p-4 text-white font-sans">
        <h1 className="text-4xl font-extrabold text-red-500 mb-6 text-center">
          Book Finder
        </h1>
        <SearchBar />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <BookList />
          <div className="lg:col-span-2">
            <BookDetail />
            <Favorites />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
