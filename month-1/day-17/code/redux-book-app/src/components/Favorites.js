// Favorites.js
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { selectBook } from "../actions/bookActions";

const Favorites = ({ favorites, selectBook }) => (
  <div className="p-4">
    <h3 className="text-2xl font-semibold mb-4 text-red-500">Favorite Books</h3>
    {favorites.length === 0 ? (
      <p className="text-gray-500">No favorites added yet.</p>
    ) : (
      <div className="space-y-4">
        {favorites.map((book) => (
          <div
            key={book.id}
            onClick={() => selectBook(book)}
            className="p-4 border border-gray-700 rounded-lg shadow-md cursor-pointer hover:bg-gray-700 transition bg-gray-800 text-white"
          >
            <h4 className="text-lg font-semibold text-red-400">
              {book.volumeInfo.title}
            </h4>
            <p className="text-gray-400">
              {book.volumeInfo.authors?.join(", ")}
            </p>
            <img
              src={book.volumeInfo.imageLinks?.thumbnail}
              alt={book.volumeInfo.title}
              className="mt-2"
            />
          </div>
        ))}
      </div>
    )}
  </div>
);

Favorites.propTypes = {
  favorites: PropTypes.array.isRequired,
  selectBook: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  favorites: state.book.favorites,
});

export default connect(mapStateToProps, { selectBook })(Favorites);
