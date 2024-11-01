import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

export default function BookDetails() {
  const book = useLoaderData();
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    yearOfPublishing,
    tags,
    category,
    publisher,
  } = book;

  return (
    <div className="hero  w-11/12 mx-auto">
      <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex-1 w-full h-full bg-base-200 flex justify-center items-center rounded-xl py-12">
          <img src={image} className="w-[325px] rounded-lg shadow-2xl" />
        </div>
        <div className="flex-1">
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <p className="py-6">By: {author}</p>
          <div className="divider"></div>
          <p>{category}</p>
          <div className="divider"></div>
          <p>
            <span className="font-bold text-xl">Review:</span> {review}
          </p>
          <div>
            <div className="space-x-2 py-6">
              <span className="font-bold text-xl">Tag:</span>
              {tags.map((tag, i) => (
                <div key={i} className="badge badge-accent badge-outline">
                  #{tag}
                </div>
              ))}
            </div>
            <p className="font-bold">
              <span className="text-gray-400 font-normal mr-8">
                Number of Pages:
              </span>
              {totalPages}
            </p>
            <p className="font-bold">
              <span className="text-gray-400 font-normal mr-24">
                Publisher:
              </span>
              {publisher}
            </p>
            <p className="font-bold">
              <span className="text-gray-400 font-normal mr-8">
                Year of Publishing:
              </span>
              {yearOfPublishing}
            </p>
            <p className="font-bold">
              <span className="text-gray-400 font-normal mr-28">Rating:</span>
              {rating}
            </p>
          </div>
          <div className="mt-4 space-x-2">
            <button className="btn btn-outline">Read</button>
            <button className="btn bg-[#50B1C9] text-white">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
}
