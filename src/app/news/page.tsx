// import React from 'react'

// const News = () => {
//   return (
//     <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
//   <div className="grid grid-cols-1 sm:grid-cols-12 gap-10">
//     <div className="sm:col-span-6 lg:col-span-5">
//       <a href="#">
//         <div
//           className="h-56 bg-cover text-center overflow-hidden"
//           style={{
//             backgroundImage: 'url("https://tailwindcss.com/img/card-left.jpg")'
//           }}
//           title="Woman holding a mug"
//         ></div>
//       </a>
//       <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
//         <div className="lg:pl-16">
//           <a
//             href="#"
//             className="text-xs text-indigo-600 uppercase font-medium mb-3 flex items-center hover:text-gray-900 transition duration-500 ease-in-out"
//           >
//             Fashion
//           </a>
//           <a
//             href="#"
//             className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 transition duration-500 ease-in-out"
//           >
//             The perfect summer sweater that you can wear!{" "}
//           </a>
//           <p className="text-gray-700 text-xs mt-2">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//             Voluptatibus quia, nulla! Maiores et perferendis eaque,
//             exercitationem praesentium nihil.
//           </p>
//         </div>
//       </div>
//     </div>
//     <div className="sm:col-span-6 lg:col-span-4">
//       <div className="flex items-start mb-3 pb-3">
//         <a href="#" className="inline-block mr-3">
//           <div
//             className="w-20 h-20 bg-cover bg-center"
//             style={{
//               backgroundImage:
//                 "url(https://media.gettyimages.com/photos/cristiano-ronaldo-of-juventus-fc-looks-dejected-during-the-uefa-of-picture-id1227967060?k=6&m=1227967060&s=612x612&w=0&h=cMSMlRyI6YAzcE_C2KgHGRLeVojHYoUhIvhwPBYv8f4=)"
//             }}
//           ></div>
//         </a>
//         <div className="text-sm">
//           <p className="text-gray-600 text-xs">Aug 18</p>
//           <a
//             href="#"
//             className="text-gray-900 font-medium hover:text-indigo-600 leading-none"
//           >
//             Cristiano Ronaldo of Juventus FC looks dejected during the...
//           </a>
//         </div>
//       </div>
//       <div className="flex items-start mb-3 pb-3">
//         <a href="#" className="inline-block mr-3">
//           <div
//             className="w-20 h-20 bg-cover bg-center"
//             style={{
//               backgroundImage:
//                 "url(https://media.gettyimages.com/photos/lionel-messi-and-marcandre-ter-stegen-of-fc-barcelona-waits-in-the-picture-id1266763488?k=6&m=1266763488&s=612x612&w=0&h=8vxz9HfQVfrff5N7d1lBVxtLamRQGK3J3lyHkUuuIiw=)"
//             }}
//           ></div>
//         </a>
//         <div className="text-sm w-2/3">
//           <p className="text-gray-600 text-xs">Jan 18</p>
//           <a
//             href="#"
//             className="text-gray-900 font-medium hover:text-indigo-600 leading-none"
//           >
//             Barcelona v Bayern Munich{" "}
//           </a>
//         </div>
//       </div>
//       <div className="flex items-start mb-3 pb-3">
//         <a href="#" className="inline-block mr-3">
//           <div
//             className="w-20 h-20 bg-cover bg-center"
//             style={{
//               backgroundImage:
//                 "url(https://media.gettyimages.com/photos/cristiano-ronaldo-of-juventus-fc-looks-dejected-during-the-uefa-of-picture-id1227967060?k=6&m=1227967060&s=612x612&w=0&h=cMSMlRyI6YAzcE_C2KgHGRLeVojHYoUhIvhwPBYv8f4=)"
//             }}
//           ></div>
//         </a>
//         <div className="text-sm">
//           <p className="text-gray-600 text-xs">Aug 18</p>
//           <a
//             href="#"
//             className="text-gray-900 font-medium hover:text-indigo-600 leading-none"
//           >
//             Cristiano Ronaldo of Juventus FC looks dejected during the...
//           </a>
//         </div>
//       </div>
//       <div className="flex items-start">
//         <a href="#" className="inline-block mr-3">
//           <div
//             className="w-20 h-20 bg-cover bg-center"
//             style={{
//               backgroundImage:
//                 "url(https://media.gettyimages.com/photos/lionel-messi-of-fc-barcelona-looks-dejected-following-his-teams-in-picture-id1266341828?k=6&m=1266341828&s=612x612&w=0&h=FZi-bSrIlOEE01780h79GsbBYPqZo2l3aaCxoktWADY=)"
//             }}
//           ></div>
//         </a>
//         <div className="text-sm w-2/3">
//           <p className="text-gray-600 text-xs">July 23</p>
//           <a
//             href="#"
//             className="text-gray-900 font-medium hover:text-indigo-600 leading-none"
//           >
//             Barcelona v Bayern Munich - UEFA Champions League{" "}
//           </a>
//         </div>
//       </div>
//     </div>
//     <div className="sm:col-span-12 lg:col-span-3">
//       <a href="#">
//         <div
//           className="h-56 bg-cover text-center overflow-hidden"
//           style={{
//             backgroundImage: 'url("https://tailwindcss.com/img/card-left.jpg")'
//           }}
//           title="Woman holding a mug"
//         ></div>
//       </a>
//       <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
//         <div className="">
//           <a
//             href="#"
//             className="text-xs text-indigo-600 uppercase font-medium flex items-center hover:text-gray-900 transition duration-500 ease-in-out"
//           >
//             Fashion
//           </a>
//           <a
//             href="#"
//             className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 transition duration-500 ease-in-out"
//           >
//             The perfect summer sweater that you can wear!{" "}
//           </a>
//           <p className="text-gray-700 text-xs mt-2">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

//   )
// }

// export default News

import React from "react";
function News() {
    return (
        <>
            <div className="container mx-auto px-4 pt-10">
                <h1 className="text-5xl text-center f-m-w text-indigo-700 font-bold pt-0">Our Blogs</h1>
                <div className="pt-14 xl:px-0 px-4">
                    <div className="w-full lg:flex">
                        <div className="lg:w-1/2">
                            <img src="https://cdn.tuk.dev/assets/components/111220/blg-17/blog1.png" className="w-full" />
                            <div className="mt-8 lg:mb-0 mb-8">
                                <h1 className="f-m-m text-2xl font-semibold leading-7">Beautiful Italy, Travel Blog</h1>
                                <p className="text-base f-m-m leading-loose mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <div className="mt-6">
                                    <a href>
                                        <p className="text-indigo-700 underline text-base font-semibold f-m-m">Read More</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 lg:ml-8">
                            <div className="lg:flex items-start mb-8">
                                <img src="https://cdn.tuk.dev/assets/components/111220/blg-17/blog2.png" className="w-full" />
                                <div className="lg:ml-6">
                                    <h1 className="f-m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8">A Broken Backpack</h1>
                                    <p className="text-base f-m-m leading-loose mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <div className="mt-4">
                                        <a href>
                                            <p className="text-indigo-700 underline text-base font-semibold f-m-m">Read More</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:flex items-start mb-8">
                                <img src="https://cdn.tuk.dev/assets/components/111220/blg-17/blog3.png" className="w-full" />
                                <div className="lg:ml-6">
                                    <h1 className="f-m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8">My life’s a Movie</h1>
                                    <p className="text-base f-m-m leading-loose mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <div className="mt-4">
                                        <a href>
                                            <p className="text-indigo-700 underline text-base font-semibold f-m-m">Read More</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:flex items-start mb-8">
                                <img src="https://cdn.tuk.dev/assets/components/111220/blg-17/blog4.png" className="w-full" />
                                <div className="lg:ml-6">
                                    <h1 className="f-m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8">Lilii’s Travel Plans</h1>
                                    <p className="text-base f-m-m leading-loose mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <div className="mt-4">
                                        <a href>
                                            <p className="text-indigo-700 underline text-base font-semibold f-m-m">Read More</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center my-16 w-full">
                    <button className=" hover:bg-gray-200 border border-indigo-700 border-2 lg:text-2xl md:text-lg text-sm rounded f-m-m font-semibold text-indigo-700 focus:outline-none lg:px-12 px-6 lg:py-6 py-3 xl:leading-4">Browse More</button>
                </div>
                <div />
            </div>
        </>
    );
}

export default News;
