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
      <div className="bg-gray-100 min-h-screen p-4">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
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
