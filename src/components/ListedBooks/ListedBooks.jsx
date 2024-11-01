import React from "react";
import { getStoredRead, getStoredWishList } from "../../Utilities/LocalStorage";
import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";

export default function ListedBooks() {
  const listedReadIds = getStoredRead();
  const uniqueArrayRead = listedReadIds.filter(
    (item, index) => listedReadIds.indexOf(item) === index
  );

  const books = useLoaderData();
  const selectedBooks = books.filter((book) =>
    uniqueArrayRead.includes(book.bookId)
  );

  const listedWishIds = getStoredWishList();
  const uniqueArrayWish = listedWishIds.filter(
    (item, index) => listedWishIds.indexOf(item) === index
  );
  const selectedWishBooks = books.filter((book) =>
    uniqueArrayWish.includes(book.bookId)
  );

  return (
    <div className="w-11/12 mx-auto">
      <div className="bg-base-200 py-4 rounded-lg">
        <h2 className="font-bold text-center text-3xl">Books</h2>
      </div>

      <div role="tablist" className="tabs tabs-lifted mt-4">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Read Books"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedBooks.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Wish List"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedWishBooks.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
