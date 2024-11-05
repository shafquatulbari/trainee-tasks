// BookDetail.js
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addFavorite } from "../actions/bookActions";

const BookDetail = ({ selectedBook, addFavorite }) => {
  if (!selectedBook)
    return (
      <div className="text-center p-4 text-gray-400">
        Select a book to see details
      </div>
    );

  return (
    <div className="p-6 border border-gray-700 rounded-lg shadow-md max-w-xl mx-auto my-6 bg-gray-800 text-white">
      <h2 className="text-3xl font-bold mb-4 text-red-500">
        {selectedBook.volumeInfo.title}
      </h2>
      <img
        src={selectedBook.volumeInfo.imageLinks?.thumbnail}
        alt="Book cover"
        className="mb-4 rounded"
      />
      <p className="text-gray-400 mb-4">
        {selectedBook.volumeInfo.description}
      </p>
      <div className="text-gray-400">
        <p>
          <strong>Authors:</strong>{" "}
          {selectedBook.volumeInfo.authors?.join(", ")}
        </p>
        <p>
          <strong>Published Date:</strong>{" "}
          {selectedBook.volumeInfo.publishedDate}
        </p>
        <p>
          <strong>Page Count:</strong> {selectedBook.volumeInfo.pageCount}
        </p>
        <p>
          <strong>Categories:</strong>{" "}
          {selectedBook.volumeInfo.categories?.join(", ")}
        </p>
        <p>
          <strong>Language:</strong> {selectedBook.volumeInfo.language}
        </p>
        <p>
          <strong>Rating:</strong> {selectedBook.volumeInfo.averageRating}
        </p>
        <p>
          <strong>Rating Count:</strong> {selectedBook.volumeInfo.ratingsCount}
        </p>
      </div>
      <div className="mt-4 space-x-2">
        <button
          onClick={() => addFavorite(selectedBook)}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition font-semibold"
        >
          Add to Favorites
        </button>
        <button
          onClick={() => window.history.back()}
          className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition font-semibold"
        >
          Go Back
        </button>
      </div>
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
