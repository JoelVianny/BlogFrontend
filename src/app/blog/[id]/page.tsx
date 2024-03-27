import Image from "next/image";
import  React from "react" ;


type Post = { 
  params :{
   id: number;
   photos: string;
 altText: string;
 dates: string;
 author:string ;
 title: string;
 description:  string;
  }
 }; 

const getData = async ( id: number) => {
  const res = await fetch(`http://localhost:8080/post/${id}` ,{
    next:{
      revalidate:0,
    }
  });
  const data = res.json();
  return data;
};



export default async function    BlogDetails( { params } : Post) {

  const posts = await getData(params.id);
  console.log(posts);

  return <div className="max-w-screen-xl mx-auto my-10 pt-14 sm:p-10 md:p-16 relative">
  <div
    className="bg-cover bg-center text-center overflow-hidden"
  
    title="Woman holding a mug"
  >
    <Image src={posts.photos} height={500} />
  </div>
  <div className="max-w-3xl mx-auto">
    <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
      <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
        <h1  className="text-gray-900 font-bold text-3xl mb-2">
          Revenge of the Never Trumpers
        </h1>
        <p className="text-gray-700 text-xs mt-2">
          Written By:
          <a
            href="#"
            className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
          >
            Ahmad Sultani
          </a>{" "}
          In
          <a
            href="#"
            className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
          >
            Election
          </a>
          ,
          <a
            href="#"
            className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
          >
            Politics
          </a>
        </p>
        <p className="text-base leading-8 my-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <h3 className="text-2xl font-bold my-5">#1. What is Lorem Ipsum?</h3>
        <p className="text-base leading-8 my-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </blockquote>
        <p className="text-base leading-8 my-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <a
          href="#"
          className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
        >
          #Election
        </a>
        ,
        <a
          href="#"
          className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
        >
          #people
        </a>
        ,
        <a
          href="#"
          className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
        >
          #Election2020
        </a>
        ,
        <a
          href="#"
          className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
        >
          #trump
        </a>
        ,
        <a
          href="#"
          className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
        >
          #Joe
        </a>
      </div>
    </div>
  </div>
</div>

  // <div className="max-w-7xl mx-auto  my-10 px-4 sm:px-6 lg:px-8">
  //   <div className="max-w-3xl mx-auto">
  //     {/* Blog post header */}
  //     <div className="py-8">
  //       <h1 className="text-3xl font-bold mb-2">{posts.altText}</h1>
  //       <p className="text-gray-500 text-sm">
  //         Published on <time dateTime="2022-04-05">  {posts.dates} | {posts.author}</time>
  //       </p>
  //     </div>
  //     {/* Featured image */}
  //     <img
  //       src={posts.photos}
  //       alt={posts.altText}
  //       className="w-full h-auto mb-8"
  //     />
  //     {/* Blog post content */}
    
  //     <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
  //       <p>
  //         {posts.description}
  //       </p>
        
  //     </div>
  //   </div>
  // </div>
}