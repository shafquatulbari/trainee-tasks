// bookReducer.js
import {
  SET_BOOKS,
  SET_SELECTED_BOOK,
  ADD_FAVORITE,
} from "../actions/bookActions";

const initialState = {
  books: [],
  selectedBook: null,
  favorites: [],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return { ...state, books: action.payload };
    case SET_SELECTED_BOOK:
      return { ...state, selectedBook: action.payload };
    case ADD_FAVORITE:
      return { ...state, favorites: [...state.favorites, action.payload] };
    default:
      return state;
  }
};

export default bookReducer;
