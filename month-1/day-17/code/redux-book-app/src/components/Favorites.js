// Favorites.js
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Favorites = ({ favorites }) => (
  <div className="p-4">
    <h3 className="text-xl font-semibold mb-4">Favorite Books</h3>
    {favorites.length === 0 ? (
      <p className="text-gray-500">No favorites added yet.</p>
    ) : (
      <div className="space-y-4">
        {favorites.map((book) => (
          <div key={book.id} className="p-4 border rounded-lg shadow-md">
            <h4 className="text-lg font-semibold">{book.volumeInfo.title}</h4>
          </div>
        ))}
      </div>
    )}
  </div>
);

Favorites.propTypes = {
  favorites: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  favorites: state.book.favorites,
});

export default connect(mapStateToProps)(Favorites);
