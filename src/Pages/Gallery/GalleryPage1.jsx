import React from "react";
import { galleryImg } from "./GalleryFiles";
import { Link } from "react-router-dom";
import InstagramGallery from "./InstagramGallery";

function GalleryPage1() {
  const firstPageImgs = galleryImg.filter((item) => item.id <= 9);
  return (
    <>
      <InstagramGallery items={firstPageImgs} />

      <div className="flex justify-center gap-3 mt-32">
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to="/gallery/page-1"
          className="text-white inline-flex items-center justify-center text-center text-[18px] border border-solid border-[#dee2e6] w-[48px] h-[45px] font-medium rounded-md bg-[#FFD700] "
        >
          1
        </Link>
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to="/gallery/page-2"
          className="text-black inline-flex items-center justify-center text-center text-[18px] border border-solid border-[#dee2e6] w-[48px] h-[45px] font-medium rounded-md bg-white "
        >
          2
        </Link>
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to="/gallery/page-2"
          className="text-black inline-flex items-center justify-center text-center text-[18px] border border-solid border-[#dee2e6] w-[48px] h-[45px] font-medium rounded-md bg-white "
        >
          <i className="fa-solid fa-angles-right"></i>
        </Link>
      </div>
    </>
  );
}

export default GalleryPage1;
