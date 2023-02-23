// import vera from './vera.jpg';
// import twitter from './twitter.png';
// import './App.css';
// import { BsFillBookmarkFill } from "react-icons/bs";
// import { BsFillHeartFill } from "react-icons/bs";
// import { BsPerson } from "react-icons/bs";
// import { BsReception0 } from "react-icons/bs";
// import { BsTwitter } from "react-icons/bs";
// import { BiHomeCircle } from "react-icons/bi";
// import { BiMessageDetail } from "react-icons/bi";
// import { BsList } from "react-icons/bs";
// import { BiSearch } from "react-icons/bi";
// import { BsListUl } from "react-icons/bs";
// import { BiLocationPlus } from "react-icons/bi";
// import user from './user.jpg';
// import planet from './Planet.png'
// import images from './images.jpg'
// import { useState } from 'react';
// const Hero = () => {
 
//     return (<>
//         {/* 
//       <BsFillHeartFill />
      
      
      
  
      
      
//       <BiSearch />
      
//       */}
//         <section className="bg-black h-auto border-r-2 w-[45%] ml-96 sm:block hidden ">
//             <div className="text-white font-serif px-3 font-bold text-[20px] leading-5 "> Home</div>
//             <div className='flex justify-evenly  my-5 border-b-2 py-5'>
//                 <div className='text-white font-serif px-3 font-bold text-[20px] leading-5 border-b-blue-500  '>for you</div>
//                 <div className='text-gray-500 font-serif px-3 font-bold text-[16px] leading-5 '>Following</div>
              
//             </div>
//             <div className="flex">
//                 <div><img src={vera} alt="" className='w-12 rounded-full' /></div>
//                 <div className='text-gray-500 font-serif px-3 font-bold text-[30px] leading-5 '>What's happening?</div></div>
//             <div className="flex  justify-between border-b-2">
//                 <div className='flex my-10 '>
//                     <div><BsListUl className='text-blue-500 mx-5' /></div>
//                     <div><BiLocationPlus className='text-blue-500' /> </div>
//                     <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                     <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                     <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                     <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                 </div>
//                 <div className=' px-3 my-5'> <button className='text-white bg-blue-500 rounded-full px-10 py-3 font-serif font-bold text-[20px]'>
//                     Tweet
//                 </button></div>

//             </div>
//             <div className='flex my-5 border-b-2'><img src={user} alt="" className='w-20 h-20 rounded-full' /> <div>
//                 <div className='text-white font-serif px-3 font-bold text-[20px] leading-5 '>digitalinheels.algo <span className='text-gray-500'>@OnyekaEkwemozor .5h </span></div>
//                 <div className='text-white my-2 font-serif px-3 font-bold text-[16px] leading-5 '>You've not learnt service until you can serve when it's not convienient</div>
//                 <div className='flex my-3 justify-evenly '>
//                     <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                     <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                     <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                     <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                     <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                     <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                 </div>
//             </div>
//                 <div className='text-white font-serif px-3 font-bold text-[32px] leading-5 mx-5'>...</div>
//             </div>
//             <div className='flex my-5 border-b-2'><img src={planet} alt="" className='w-20 h-20 bg-white rounded-full' /> <div>
//                 <div className='text-white font-serif px-3 font-bold text-[20px] leading-5 '>Walneta.eth <span className='text-gray-500'>@Tester .5h </span></div>
//                 <div className='text-white my-2 font-serif px-3 font-bold text-[16px] leading-5 '>Any free eth for sale? shill me some please</div>
//                 <div className='flex my-5 justify-evenly '>
//                     <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                     <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                     <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                     <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                     <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                     <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                 </div>
//             </div>
//                 <div className='text-white font-serif px-3 font-bold text-[32px] leading-5 ml-56'>...</div>
//             </div>
//             <div className="flex border-b-2 mb-0 ">
//                 <div className=''><img src={planet} alt="" className='w-20  bg-white rounded-full ' /></div>
//                 <div className='ml-3'>
//                     <div className='text-white font-serif px-3 font-bold text-[20px] leading-5'>
//                         Walneta.eth <span className='text-gray-500'>@Tester .5h </span>
//                     </div>
//                     <div className='text-white my-2 font-serif px-3 font-bold text-[16px] leading-5 '>Any free eth for sale? shill me some please</div>
//                     <div className=' mt-5 '><img src={planet} alt="" className='ml-1  ' /></div>


//                     <div className=''>

//                         <div className='flex my-5 justify-evenly '>
//                             <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                             <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                             <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                             <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                             <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                             <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                         </div>

//                     </div>
//                 </div>
//                 <div className='text-white font-serif px-3 font-bold text-[32px] leading-5 ml-56'>...</div>
//             </div>
//         </section>
//         <section>
//             <section className='bg-black h-auto sm:hidden block'>
//                 <div className="flex">
//                     <div><img src={vera} alt="" className='w-12 rounded-full' /></div>
//                     <div><img src={twitter} alt="" className=' rounded-full w-10 pt-3 mx-32 text-blue-600' /></div>
//                 </div>
//                 <div className='flex justify-between  my-5 w-[100%] absolute sticky top-0 py-5 border-b-2 border-gray-500 bg-black z-10 '>
//                     <div className='text-white font-serif px-3 font-bold text-[20px] leading-5   '>for you</div>
//                     <div className='text-gray-500 font-serif px-3 font-bold text-[16px] leading-5 '>Following</div>

//                 </div>
//                 <div className='flex my-7 border-b-2 mt-20'><img src={user} alt="" className='w-16 h-16 rounded-full' /> <div>
//                     <div className='text-white font-serif px-3 font-bold text-[15px] leading-5 '>digitalinheels.algo <span className='text-gray-500'>@OnyekaEkwemozor .5h </span></div>
//                     <div className='text-white my-2 font-serif px-3 font-bold text-[16px] leading-5 '>You've not learnt service until you can serve when it's not convienient</div>
//                     <div className='flex my-3 justify-evenly '>
//                         <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                         <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                         <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                         <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                         <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                         <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                     </div>
//                 </div>
//                     <div className='text-white font-serif px-3 font-bold text-[32px] leading-5 mx-5'>...</div>
//                 </div>
//                 <div className='flex my-7 border-b-2 '><img src={user} alt="" className='w-16 h-16 rounded-full' /> <div>
//                     <div className='text-white font-serif px-3 font-bold text-[15px] leading-5 '>digitalinheels.algo <span className='text-gray-500'>@OnyekaEkwemozor .5h </span></div>
//                     <div className='text-white my-2 font-serif px-3 font-bold text-[16px] leading-5 '>You've not learnt service until you can serve when it's not convienient</div>
//                     <div className='flex my-3 justify-evenly '>
//                         <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                         <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                         <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                         <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                         <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                         <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                     </div>
//                 </div>
//                     <div className='text-white font-serif px-3 font-bold text-[32px] leading-5 mx-5'>...</div>
//                 </div>
//                 <div className='flex my-7 border-b-2 '><img src={user} alt="" className='w-16 h-16 rounded-full' /> <div>
//                     <div className='text-white font-serif px-3 font-bold text-[15px] leading-5 '>digitalinheels.algo <span className='text-gray-500'>@OnyekaEkwemozor .5h </span></div>
//                     <div className='text-white my-2 font-serif px-3 font-bold text-[16px] leading-5 '>You've not learnt service until you can serve when it's not convienient</div>
//                     <div className='flex my-3 justify-evenly '>
//                         <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                         <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                         <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                         <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                         <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                         <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                     </div>
//                 </div>
//                     <div className='text-white font-serif px-3 font-bold text-[32px] leading-5 mx-5'>...</div>
//                 </div>
//                 <div className='flex my-7 border-b-2 '><img src={user} alt="" className='w-16 h-16 rounded-full' /> <div>
//                     <div className='text-white font-serif px-3 font-bold text-[15px] leading-5 '>digitalinheels.algo <span className='text-gray-500'>@OnyekaEkwemozor .5h </span></div>
//                     <div className='text-white my-2 font-serif px-3 font-bold text-[16px] leading-5 '>You've not learnt service until you can serve when it's not convienient</div>
//                     <div className='flex my-3 justify-evenly '>
//                         <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                         <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                         <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                         <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                         <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                         <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                     </div>
//                 </div>
//                     <div className='text-white font-serif px-3 font-bold text-[32px] leading-5 mx-5'>...</div>
//                 </div>
//                 <div className='flex my-7 border-b-2 '><img src={user} alt="" className='w-16 h-16 rounded-full' /> <div>
//                     <div className='text-white font-serif px-3 font-bold text-[15px] leading-5 '>digitalinheels.algo <span className='text-gray-500'>@OnyekaEkwemozor .5h </span></div>
//                     <div className='text-white my-2 font-serif px-3 font-bold text-[16px] leading-5 '>You've not learnt service until you can serve when it's not convienient</div>
//                     <div className='flex my-3 justify-evenly '>
//                         <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                         <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                         <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                         <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                         <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                         <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                     </div>
//                 </div>
//                     <div className='text-white font-serif px-3 font-bold text-[32px] leading-5 mx-5'>...</div>
//                 </div>
//                 <div className='absolute bottom-0 sticky'><div className='flex my-3 justify-evenly '>
//                     <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                     <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                     <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                     <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                     <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                     <div><img src={twitter} alt="" className='w-5 mx-4' /></div>
//                 </div></div>
//             </section>
//         </section>
//     </>
//     );
// }

// export default Hero;