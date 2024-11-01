import React, { useEffect, useState } from "react";
import Book from "../Book/Book";

export default function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("./booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="w-4/5 mx-auto">
      <h2 className="text-center my-8 font-bold text-3xl">Books</h2>
      <div className=" grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
}
