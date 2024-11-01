import React, { useEffect, useState } from "react";
import { getStoredRead, getStoredWishList } from "../../Utilities/LocalStorage";
import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";
import { IoIosArrowDropdown } from "react-icons/io";

export default function ListedBooks() {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [sort, setSort] = useState("");
  const books = useLoaderData();
  useEffect(() => {
    const listedReadIds = getStoredRead();
    const uniqueArrayRead = listedReadIds.filter(
      (item, index) => listedReadIds.indexOf(item) === index
    );

    const selectedBooks = books.filter((book) =>
      uniqueArrayRead.includes(book.bookId)
    );

    setReadList(selectedBooks);
  }, []);

  useEffect(() => {
    const listedWishIds = getStoredWishList();
    const uniqueArrayWish = listedWishIds.filter(
      (item, index) => listedWishIds.indexOf(item) === index
    );
    const selectedWishBooks = books.filter((book) =>
      uniqueArrayWish.includes(book.bookId)
    );
    setWishList(selectedWishBooks);
  }, []);

  const handleSort = (sortType) => {
    setSort(sortType);

    if (sortType === "Number of pages") {
      const sortedSelectedReadBooksPage = [...readList].sort(
        (a, b) => parseInt(a.totalPages) - parseInt(b.totalPages)
      );
      const sortedSelectedWishBooksPage = [...wishList].sort(
        (a, b) => parseInt(a.totalPages) - parseInt(b.totalPages)
      );
      setReadList(sortedSelectedReadBooksPage);
      setWishList(sortedSelectedWishBooksPage);
    } else if (sortType === "Ratings") {
      const sortedSelectedReadBooksRating = [...readList].sort(
        (a, b) => parseFloat(a.rating) - parseFloat(b.rating)
      );
      const sortedSelectedWishBooksRating = [...wishList].sort(
        (a, b) => parseFloat(a.rating) - parseFloat(b.rating)
      );
      setReadList(sortedSelectedReadBooksRating);
      setWishList(sortedSelectedWishBooksRating);
    } else if (sortType === "Publisher year") {
      const sortedSelectedReadBooksYear = [...readList].sort(
        (a, b) => parseInt(a.yearOfPublishing) - parseInt(b.yearOfPublishing)
      );
      const sortedSelectedWishBooksYear = [...wishList].sort(
        (a, b) => parseInt(a.yearOfPublishing) - parseInt(b.yearOfPublishing)
      );
      setReadList(sortedSelectedReadBooksYear);
      setWishList(sortedSelectedWishBooksYear);
    }
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="bg-base-200 py-4 rounded-lg">
        <h2 className="font-bold text-center text-3xl">Books</h2>
      </div>
      <div className="text-center">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-green-600 text-white m-1 "
          >
            {sort ? `Sort by ${sort}` : "Sort by"}
            <IoIosArrowDropdown className="text-2xl"></IoIosArrowDropdown>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li onClick={() => handleSort("Ratings")}>
              <a>Ratings</a>
            </li>
            <li onClick={() => handleSort("Number of pages")}>
              <a>Number of pages</a>
            </li>
            <li onClick={() => handleSort("Publisher year")}>
              <a>Publisher year</a>
            </li>
          </ul>
        </div>
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
            {readList.map((book) => (
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
            {wishList.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
