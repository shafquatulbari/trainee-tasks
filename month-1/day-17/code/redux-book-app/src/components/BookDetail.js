// BookDetail.js
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addFavorite } from "../actions/bookActions";

const BookDetail = ({ selectedBook, addFavorite }) => {
  if (!selectedBook)
    return <div className="text-center p-4">Select a book to see details</div>;

  return (
    <div className="p-6 border rounded-lg shadow-md max-w-xl mx-auto my-6 bg-white">
      <h2 className="text-2xl font-bold mb-4">
        {selectedBook.volumeInfo.title}
      </h2>
      <img
        src={selectedBook.volumeInfo.imageLinks.thumbnail}
        alt="Book cover"
      />
      <p className="text-gray-700 mb-4">
        {selectedBook.volumeInfo.description}
      </p>
      <p className="text-gray-600">
        <strong>Authors:</strong> {selectedBook.volumeInfo.authors.join(", ")}
      </p>
      <p className="text-gray-600">
        <strong>Published Date:</strong> {selectedBook.volumeInfo.publishedDate}
      </p>
      <p className="text-gray-600">
        <strong>Page Count:</strong> {selectedBook.volumeInfo.pageCount}
      </p>
      <p className="text-gray-600">
        <strong>Categories:</strong>{" "}
        {selectedBook.volumeInfo.categories.join(", ")}
      </p>
      <p className="text-gray-600">
        <strong>Language:</strong> {selectedBook.volumeInfo.language}
      </p>
      <p className="text-gray-600">
        <strong>Rating:</strong> {selectedBook.volumeInfo.averageRating}
      </p>
      <p className="text-gray-600">
        <strong>Rating Count:</strong> {selectedBook.volumeInfo.ratingsCount}
      </p>
      <button
        onClick={() => addFavorite(selectedBook)}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
      >
        Add to Favorites
      </button>
    </div>
  );
};

BookDetail.propTypes = {
  selectedBook: PropTypes.object,
  addFavorite: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  selectedBook: state.book.selectedBook,
});

export default connect(mapStateToProps, { addFavorite })(BookDetail);
