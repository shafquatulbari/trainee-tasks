// Step 1: Create a Book class to represent individual books
class Book {
  constructor(title, author, rating) {
    this.title = title;
    this.author = author;
    this.rating = rating;
  }
}

// Step 2: Create a class BookCollection that stores a list of books
class BookCollection {
  constructor() {
    this.books = []; // Array to store books
  }

  // Method to add a book to the collection
  addBook(book) {
    this.books.push(book);
  }

  // Step 3: Implement Symbol.iterator using a generator function
  *[Symbol.iterator]() {
    for (let book of this.books) {
      if (book.rating > 4) {
        yield book; // Yield only books with rating greater than 4
      }
    }
  }

  // Step 4: Create another method getTopRated to return the top 2 books based on their rating
  *getTopRated() {
    // Sort the books by rating in descending order
    const sortedBooks = [...this.books].sort((a, b) => b.rating - a.rating);

    // Yield the top 2 rated books
    for (let i = 0; i < 2 && i < sortedBooks.length; i++) {
      yield sortedBooks[i];
    }
  }

  // Optional: Method to display all books (for easy testing)
  displayBooks() {
    this.books.forEach((book) => {
      console.log(`${book.title} by ${book.author}, Rating: ${book.rating}`);
    });
  }
}

// Step 5: Create instances of Book and add them to the BookCollection
const myBookCollection = new BookCollection();

myBookCollection.addBook(new Book("The Hobbit", "J.R.R. Tolkien", 4.8));
myBookCollection.addBook(new Book("1984", "George Orwell", 4.9));
myBookCollection.addBook(
  new Book("The Catcher in the Rye", "J.D. Salinger", 3.9)
);
myBookCollection.addBook(new Book("To Kill a Mockingbird", "Harper Lee", 4.7));
myBookCollection.addBook(new Book("Moby Dick", "Herman Melville", 4.2));
myBookCollection.addBook(new Book("Pride and Prejudice", "Jane Austen", 4.4));
myBookCollection.addBook(
  new Book("The Great Gatsby", "F. Scott Fitzgerald", 4.1)
);

// Step 6: Test the iterator by iterating over books with rating > 4
console.log("Books with rating greater than 4:");
for (let book of myBookCollection) {
  console.log(`${book.title} by ${book.author}, Rating: ${book.rating}`);
}

// Step 7: Test the getTopRated method to get the top 2 rated books
console.log("\nTop 2 Rated Books:");
const topRatedBooks = myBookCollection.getTopRated();
for (let book of topRatedBooks) {
  console.log(`${book.title} by ${book.author}, Rating: ${book.rating}`);
}

// Step 8: Test additional methods like displayBooks (optional)
console.log("\nAll Books in the Collection:");
myBookCollection.displayBooks();
