// BookList.js
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { selectBook } from "../actions/bookActions";

const BookList = ({ books, selectBook }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
    {books.map((book) => (
      <div
        key={book.id}
        onClick={() => selectBook(book)}
        className="p-4 border rounded-lg shadow hover:shadow-lg transition cursor-pointer"
      >
        <h3 className="text-lg font-semibold">{book.volumeInfo.title}</h3>
        <p className="text-gray-600">{book.volumeInfo.authors?.join(", ")}</p>
        <img
          src={book.volumeInfo.imageLinks?.thumbnail}
          alt={book.volumeInfo.title}
          className="mt-2"
        />
      </div>
    ))}
  </div>
);

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  selectBook: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.book.books,
});

export default connect(mapStateToProps, { selectBook })(BookList);
