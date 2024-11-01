import React from "react";
import BannerImg from "../../assets/books.jpg";
export default function Banner() {
  return (
    <div className="flex flex-col lg:flex-row w-11/12 mx-auto  bg-[#1313130D] py-20 rounded-xl">
      <div className="flex-1 flex justify-center items-start gap-5 flex-col pl-20">
        <h1 className="font-semibold text-5xl ">
          Books to freshen up your bookshelf
        </h1>
        <button className="btn bg-[#23BE0A] text-white">View The List</button>
      </div>
      <div className="flex-1 w-full">
        <img className="rounded-xl" src={BannerImg} alt="" />
      </div>
    </div>
  );
}
