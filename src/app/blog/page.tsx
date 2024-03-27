import Link from "next/link";
import React from "react";

const getData = async () => {
  const res = await fetch("http://localhost:8080/post" , {
    next :{
      revalidate :0,
    }
  });
  const data = res.json();
  return data;
};

type Post = { 
  id: number;
  photos: string;
altText: string;
dates: string;
author:string ;
title: string;
description:  string;

};

export default async function BlogPage() {
  const posts = await getData();

  console.log(posts);

  return (
    <div className="max-w-screen-xl flex flex-wrap  justify-between  mx-auto my-12 px-10 ">
      <div className="  text-center my-8">
        <h2 className="text-3xl font-extrabold text-[#333]  relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-pink-400 after:rounded-full">
          LATEST BLOGS
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-md:max-w-lg mx-auto">
        { 
        posts.map((post : Post) => (
          <Link key={post.id} href={`/blog/${post.id}`} as={`/blog/${post.id}`}>
            <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
              <img
                src={post.photos}
                alt={post.altText}
                className="w-full h-96 object-cover"
              />
              <div className="p-6 absolute bottom-0 left-0 right-0 bg-white opacity-90">
                <span className="text-sm block text-gray-600 mb-2">
                  {post.dates} | {post.author}
                </span>
                <h3 className="text-xl font-bold text-[#333]">
                  {post.title}
                </h3>
                <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                  <p className="text-gray-600 text-sm">{post.description}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
