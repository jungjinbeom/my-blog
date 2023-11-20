import Link from "next/link";
import React from "react";

const BlogPost = () => {
  return (
    <Link href="/blog" passHref>
      <a className={`w-full my-7 hover:-translate-x-1.5`}>
        <div className="font-medium text-xs text-gray-400">2023.11.20 </div>
        <div className={`font-extrablod text-2xl mt-2`}>제목</div>
        <div className={`font-medium text-gray-600 text-xl mt-1`}>
          게시물 설명
        </div>
      </a>
    </Link>
  );
};

export default BlogPost;
