// bookActions.js
import { searchBooks } from "../api";

export const SET_BOOKS = "SET_BOOKS";
export const SET_SELECTED_BOOK = "SET_SELECTED_BOOK";
export const ADD_FAVORITE = "ADD_FAVORITE";

export const fetchBooks = (query) => async (dispatch) => {
  try {
    const response = await searchBooks(query);
    dispatch({ type: SET_BOOKS, payload: response.data.items });
  } catch (error) {
    console.error("Error fetching books:", error);
  }
};

export const selectBook = (book) => ({
  type: SET_SELECTED_BOOK,
  payload: book,
});

export const addFavorite = (book) => ({
  type: ADD_FAVORITE,
  payload: book,
});
