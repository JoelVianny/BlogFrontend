// import React from 'react'
// import Link from 'next/link'

// const Section = () => {
//   return (
    
//     <div className="bg-white  p-4 mt-8">
//     <div className="max-w-6xl  my-12 max-md:max-w-lg mx-auto">
//       <div>
//         <h2 className="text-3xl font-extrabold text-[#333] inline-block">
//           LATEST BLOGS
//         </h2>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
//         <div className="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-105 transition-all duration-300">
//           <img
//             src="https://readymadeui.com/Imagination.webp"
//             alt="Blog Post 1"
//             className="lg:w-2/5 min-h-[250px] h-full object-cover"
//           />
//           <div className="p-6 lg:w-3/5">
//             <h3 className="text-xl font-bold text-[#333]">
//               A Guide to Igniting Your Imagination
//             </h3>
//             <span className="text-sm block text-gray-400 mt-2">
//               10 FEB 2023 | BY JOHN DOE
//             </span>
//             <p className="text-sm mt-4">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
//               accumsan, nunc et tempus blandit.
//             </p>
//             <Link
//               href="/"
//               className="mt-4 inline-block text-blue-600 text-sm hover:underline"
//             >
//               Read More
//             </Link>
//           </div>
//         </div>
//         <div className="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-105 transition-all duration-300">
//           <img
//             src="https://readymadeui.com/hacks-watch.webp"
//             alt="Blog Post 2"
//             className="lg:w-2/5 min-h-[250px] h-full object-cover"
//           />
//           <div className="p-6 lg:w-3/5">
//             <h3 className="text-xl font-bold text-[#333]">
//               Hacks to Supercharge Your Day
//             </h3>
//             <span className="text-sm block text-gray-400 mt-2">
//               7 JUN 2023 | BY MARK ADAIR
//             </span>
//             <p className="text-sm mt-4">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
//               accumsan, nunc et tempus blandit.
//             </p>
//             <Link
//               href="/"
//               className="mt-4 inline-block text-blue-600 text-sm hover:underline"
//             >
//               Read More
//             </Link>
//           </div>
//         </div>
//         <div className="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-105 transition-all duration-300">
//           <img
//             src="https://readymadeui.com/prediction.webp"
//             alt="Blog Post 2"
//             className="lg:w-2/5 min-h-[250px] h-full object-cover"
//           />
//           <div className="p-6 lg:w-3/5">
//             <h3 className="text-xl font-bold text-[#333]">
//               Trends and Predictions
//             </h3>
//             <span className="text-sm block text-gray-400 mt-2">
//               5 OCT 2023 | BY SIMON KONECKI
//             </span>
//             <p className="text-sm mt-4">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
//               accumsan, nunc et tempus blandit.
//             </p>
//             <Link
//               href="/"
//               className="mt-4 inline-block text-blue-600 text-sm hover:underline"
//             >
//               Read More
//             </Link>
//           </div>
//         </div>
//         <div className="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-105 transition-all duration-300">
//           <img
//             src="https://readymadeui.com/team-image.webp"
//             alt="Blog Post 2"
//             className="lg:w-2/5 min-h-[250px] h-full object-cover"
//           />
//           <div className="p-6 lg:w-3/5">
//             <h3 className="text-xl font-bold text-[#333]">
//               Innovators Changing the Game
//             </h3>
//             <span className="text-sm block text-gray-400 mt-2">
//               10 DEC 2023 | BY SIMON KONECKI
//             </span>
//             <p className="text-sm mt-4">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
//               accumsan, nunc et tempus blandit.
//             </p>
//             <Link
//               href="/"
//               className="mt-4 inline-block text-blue-600 text-sm hover:underline"
//             >
//               Read More
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
  
//   )
// }

// export default Section


import React from "react";

const Section = () => {
    return (
        <div className="2xl:mx-auto 2xl:container 2xl:px-20 xl:px-12 sm:px-6 px-4 py-16">
            <h1 className="lg:text-4xl text-3xl font-semibold leading-9 text-gray-800">Join Our Blog Community</h1>
            <p className="md:w-1/2 text-base leading-normal mt-4 sm:pr-10 text-gray-600">If you're looking for random paragraphs, you've come to the right place.</p>
            <div className="md:flex items-start justify-between mt-12">
                <div className="md:w-1/2 lg:w-full">
                    <div>
                        <div className="relative">
                            <img src="https://i.ibb.co/HxkBZQM/img-1.png" alt="stairs" />
                            <div className="bg-white absolute top-0 left-0">
                                <p className="text-base leading-4 py-3 px-5 text-gray-800">News</p>
                            </div>
                        </div>
                        <p className="text-base font-light leading-4 text-gray-800 mt-6">Michael Jackson</p>
                        <h1 className="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-gray-800">Moving up the corporate ladder?</h1>
                        <p className="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                        <button className="flex items-center justify-between w-72 mt-6 bg-gray-800 p-4 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
                            <p className="text-base font-medium leading-4 text-white">Read more</p>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.33203 8H12.6654" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10 10.6667L12.6667 8" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10 5.33344L12.6667 8.0001" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-9">
                        <div className="relative">
                            <img src="https://i.ibb.co/8mP5tmS/img-2.png" alt="flower pot" />
                            <div className="bg-white absolute top-0 left-0">
                                <p className="text-base leading-4 py-3 px-5 text-gray-800">News</p>
                            </div>
                        </div>
                        <p className="text-base font-light leading-4 text-gray-800 mt-6">Michael Jackson</p>
                        <h1 className="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-gray-800">Expert advice on wood works</h1>
                        <p className="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                        <button className="flex items-center justify-between w-72 mt-6 bg-gray-800 p-4 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
                            <p className="text-base font-medium leading-4 text-white">Read more</p>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.33203 8H12.6654" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10 10.6667L12.6667 8" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10 5.33344L12.6667 8.0001" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="md:w-1/2 md:ml-6 md:mt-0 mt-9 lg:w-full">
                    <div>
                        <div className="relative">
                            <img src="https://i.ibb.co/DKg5zHT/img-3.png" alt="stairs" />
                            <div className="bg-white absolute top-0 left-0">
                                <p className="text-base leading-4 py-3 px-5 text-gray-800">News</p>
                            </div>
                        </div>
                        <p className="text-base font-light leading-4 text-gray-800 mt-6">James McFerson</p>
                        <h1 className="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-gray-800">How a serene environment affects productivity</h1>
                        <p className="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                        <button className="flex items-center justify-between w-72 mt-6 bg-gray-800 p-4 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
                            <p className="text-base font-medium leading-4 text-white">Read more</p>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.33203 8H12.6654" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10 10.6667L12.6667 8" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10 5.33344L12.6667 8.0001" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-9">
                        <div className="relative">
                            <img src="https://i.ibb.co/dPBXFwY/img-4.png" alt="stairs" />
                            <div className="bg-white absolute top-0 left-0">
                                <p className="text-base leading-4 py-3 px-5 text-gray-800">News</p>
                            </div>
                        </div>
                        <p className="text-base font-light leading-4 text-gray-800 mt-6">James McFerson</p>
                        <h1 className="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-gray-800">How to grow as a team through a balance of collaboration and individualism</h1>
                        <p className="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                        <button className="flex items-center justify-between w-72 mt-6 bg-gray-800 p-4 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
                            <p className="text-base font-medium leading-4 text-white">Read more</p>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.33203 8H12.6654" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10 10.6667L12.6667 8" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10 5.33344L12.6667 8.0001" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;
