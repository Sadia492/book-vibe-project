import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addReadToLs, addWishToLs } from "../../Utilities/LocalStorage";

export default function BookDetails() {
  // const [books, setBooks] = useState([]);
  const { bookId } = useParams();
  console.log(bookId);
  const books = useLoaderData();

  // useEffect(() => {
  //   fetch("../booksData.json")
  //     .then((res) => res.json())
  //     .then((data) => setBooks(data));
  // }, []);

  const book = books.find((book) => book.bookId == bookId);

  const handleRead = (id) => {
    addReadToLs(id);
  };

  const handleWish = (id) => {
    addWishToLs(id);
  };

  return (
    <div className="hero w-11/12 mx-auto">
      {book ? (
        <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex-1 w-full h-full bg-base-200 flex justify-center items-center rounded-xl py-12">
            <img
              src={book.image}
              alt={book.bookName}
              className="w-[325px] rounded-lg shadow-2xl"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-5xl font-bold">{book.bookName}</h1>
            <p className="py-6">By: {book.author}</p>
            <div className="divider"></div>
            <p>{book.category}</p>
            <div className="divider"></div>
            <p>
              <span className="font-bold text-xl">Review:</span> {book.review}
            </p>
            <div>
              <div className="space-x-2 py-6">
                <span className="font-bold text-xl">Tag:</span>
                {book.tags.map((tag, i) => (
                  <div key={i} className="badge badge-accent badge-outline">
                    #{tag}
                  </div>
                ))}
              </div>
              <p className="font-bold">
                <span className="text-gray-400 font-normal mr-8">
                  Number of Pages:
                </span>
                {book.totalPages}
              </p>
              <p className="font-bold">
                <span className="text-gray-400 font-normal mr-24">
                  Publisher:
                </span>
                {book.publisher}
              </p>
              <p className="font-bold">
                <span className="text-gray-400 font-normal mr-8">
                  Year of Publishing:
                </span>
                {book.yearOfPublishing}
              </p>
              <p className="font-bold">
                <span className="text-gray-400 font-normal mr-28">Rating:</span>
                {book.rating}
              </p>
            </div>
            <div className="mt-4 space-x-2">
              <button
                onClick={() => handleRead(book.bookId)}
                className="btn btn-outline"
              >
                Read
              </button>
              <button
                onClick={() => handleWish(book.bookId)}
                className="btn bg-[#50B1C9] text-white"
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading book details...</p>
      )}
    </div>
  );
}
