import React from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
export default function Book({ book }) {
  const {
    bookName,
    bookId,
    author,
    image,
    tags,
    category,
    rating,
    yearOfPublishing,
    totalPages,
  } = book;
  return (
    <Link to={`/book/${bookId}`}>
      <div className="card bg-base-100 shadow-xl p-6 border-2">
        <figure className="bg-[#F3F3F3] py-6">
          <img className="h-[138px]" src={image} alt={bookName} />
        </figure>
        <div className="card-body -ml-5">
          <div className="space-x-2">
            {tags.map((tag, i) => (
              <div key={i} className="badge badge-accent badge-outline">
                {tag}
              </div>
            ))}
          </div>
          <h2 className="card-title">{bookName}</h2>
          <p>By: {author}</p>
          <div className="border-b-2 border-dashed"></div>
          <div className="card-actions mt-3 justify-between ">
            <div>{category}</div>
            <div className="flex items-center">
              {rating},{yearOfPublishing}, {totalPages}
              <CiStar className="text-xl"></CiStar>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
