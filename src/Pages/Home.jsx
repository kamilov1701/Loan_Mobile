// import React from "react";
// import Notificationimg from "../../public/Not.png";
// // Images{
// import plus from "../../public/plus.png";
// import minus from "../../public/minus.png";
// import time from "../../public/Clock.png";
// import eye from "../../public/Eye.png";
// import pen from "../../public/pen.png";
// import del from "../../public/delete.png";
// // }
// // Icons{
// import { ArrowLeft } from 'lucide-react';
// // }

// function Home() {
//   return <div >
//     <div>
//       {/* Home Header */}

//       <div className="bg-[#E5E7EB] w-full h-[85px]">
//         <div className="container mx-auto flex justify-between items-center pt-[24px]">
//           <div>
//             <p className="text-[#64748B] text-[11px] font-bold">Qaytganingiz Bilan!</p>
//             <h2 className="text-[#0E141B] text-[20px] font-bold">Bosh Sahifa</h2>
//           </div>
//           <div className="bg-[#E0F2FE] w-[36px] h-[36px] rounded-[50%]">
//             <img src={Notificationimg} alt="" />
//           </div>
//         </div>
//       </div>

//       {/* Home Card Top */}

//       <div className="container mx-auto bg-[#E5E7EB] max-w-[350px] w-full h-[170px] mt-[20px] border #D0DBE7 rounded-[12px] py-[13px] px-[15px]">
//         <div className="flex justify-between">
//           <div>
//             <p className="text-[12px] font-bold text-[#64748B]">Moliyaviy Ko’rsatgich</p>
//             <h2 className="text-[32px] font-bold text-[#0E141B]">20.650.000 so’m</h2>
//           </div>
//           <div>
//             <p className="text-[#078838] text-[11px]">+12</p>
//           </div>
//         </div>

//         <div className="mt-[12px]">
//           <div className="flex justify-between">
//             <p className="text-[11px] text-[#64748B]">Qarzlar summasi</p>
//             <p className="text-[11px] font-bold">12.450.000 so’m</p>
//           </div>
//           <div className="flex justify-between mt-[28px]">
//             <p className="text-[11px] text-[#64748B]">To’plangan Qarzlar summasi</p>
//             <p className="text-[11px] font-bold">8.200.000 so’m</p>
//           </div>
//         </div>
//       </div>

//       {/* Loan Add Button */}

//       <div className="cotainer mx-auto">
//         <div className="mt-[25px]">
//           <center>
//             <button className="bg-[#197FE6] max-w-[350px] w-full h-[55px] py-[14px] px-[78px] rounded-[12px]"><a className="text-[#fff] text-[15px] font-bold" href="/List">+ Yangi Qarzdorni Yaratish </a></button>
//           </center>
//         </div>
//       </div>

//       {/* List Loaners */}

//       <section className="container mx-auto">

//         <div className="bg-[#ffffff] border-[#E5E7EB] border px-[9px] py-[8px] rounded-[12px] mt-[14px]">
//           <div className="flex justify-between items-center">
//             <div className="flex gap-[9px]">
//               <div>
//                 <span className="bg-[#DBEAFE] text-[11px] font-bold text-[#197FE6] px-[8px] py-[9px] rounded-full">SO</span>
//               </div>

//               <div>
//                 <h2 className="text-[#000000] text-[14px] font-bold">Sobirjon Otajanov</h2>
//                 <p className="text-[#64748B] text-[11px] font-normal">Comment</p>
//               </div>
//             </div>

//             <div>
//               <h2 className="text-[#197FE6] text-[14px] font-bold ml-[50px] mb-[15px">150.000 so’m</h2>
//             </div>
//           </div>

//           <div className="flex justify-between items-center ml-[24px]">
//             <div className="flex w-[150px] gap-[17px]">
//               <img src={plus} alt="" />
//               <img src={minus} alt="" />
//               <img src={time} alt="" />
//             </div>
//             <div className="bg-[#FFF7ED] py-[9px] px-[12px] rounded-full w-[150px] flex justify-between">
//               <img src={eye} alt="" />
//               <img src={pen} alt="" />
//               <img src={del} alt="" />
//             </div>
//           </div>
//         </div>
//         <div className="bg-[#ffffff] border-[#E5E7EB] border px-[9px] py-[8px] rounded-[12px] mt-[14px]">
//           <div className="flex justify-between items-center">
//             <div className="flex gap-[9px]">
//               <div>
//                 <span className="bg-[#DBEAFE] text-[11px] font-bold text-[#197FE6] px-[8px] py-[9px] rounded-full">SO</span>
//               </div>

//               <div>
//                 <h2 className="text-[#000000] text-[14px] font-bold">Sobirjon Raximov</h2>
//                 <p className="text-[#64748B] text-[11px] font-normal">Comment</p>
//               </div>
//             </div>

//             <div>
//               <h2 className="text-[#197FE6] text-[14px] font-bold ml-[50px] mb-[15px">158.000 so’m</h2>
//             </div>
//           </div>

//           <div className="flex justify-between items-center ml-[24px]">
//             <div className="flex w-[150px] gap-[17px]">
//               <img src={plus} alt="" />
//               <img src={minus} alt="" />
//               <img src={time} alt="" />
//             </div>
//             <div className="bg-[#FFF7ED] py-[9px] px-[12px] rounded-full w-[150px] flex justify-between">
//               <img src={eye} alt="" />
//               <img src={pen} alt="" />
//               <img src={del} alt="" />
//             </div>
//           </div>
//         </div>
//         <div className="bg-[#ffffff] border-[#E5E7EB] border px-[9px] py-[8px] rounded-[12px] mt-[14px]">
//           <div className="flex justify-between items-center">
//             <div className="flex gap-[9px]">
//               <div>
//                 <span className="bg-[#DBEAFE] text-[11px] font-bold text-[#197FE6] px-[8px] py-[9px] rounded-full">SO</span>
//               </div>

//               <div>
//                 <h2 className="text-[#000000] text-[14px] font-bold">Azizbek Atajanov</h2>
//                 <p className="text-[#64748B] text-[11px] font-normal">Comment</p>
//               </div>
//             </div>

//             <div>
//               <h2 className="text-[#197FE6] text-[14px] font-bold ml-[50px] mb-[15px">320.000 so’m</h2>
//             </div>
//           </div>

//           <div className="flex justify-between items-center ml-[24px]">
//             <div className="flex w-[150px] gap-[17px]">
//               <img src={plus} alt="" />
//               <img src={minus} alt="" />
//               <img src={time} alt="" />
//             </div>
//             <div className="bg-[#FFF7ED] py-[9px] px-[12px] rounded-full w-[150px] flex justify-between">
//               <img src={eye} alt="" />
//               <img src={pen} alt="" />
//               <img src={del} alt="" />
//             </div>
//           </div>
//         </div>
//         <div className="bg-[#ffffff] border-[#E5E7EB] border px-[9px] py-[8px] rounded-[12px] mt-[14px]">
//           <div className="flex justify-between items-center">
//             <div className="flex gap-[9px]">
//               <div>
//                 <span className="bg-[#DBEAFE] text-[11px] font-bold text-[#197FE6] px-[8px] py-[9px] rounded-full">SO</span>
//               </div>

//               <div>
//                 <h2 className="text-[#000000] text-[14px] font-bold">Jumaniyoz Bekov</h2>
//                 <p className="text-[#64748B] text-[11px] font-normal">Comment</p>
//               </div>
//             </div>

//             <div>
//               <h2 className="text-[#197FE6] text-[14px] font-bold ml-[50px] mb-[15px">150.000 so’m</h2>
//             </div>
//           </div>

//           <div className="flex justify-between items-center ml-[24px]">
//             <div className="flex w-[150px] gap-[17px]">
//               <img src={plus} alt="" />
//               <img src={minus} alt="" />
//               <img src={time} alt="" />
//             </div>
//             <div className="bg-[#FFF7ED] py-[9px] px-[12px] rounded-full w-[150px] flex justify-between">
//               <img src={eye} alt="" />
//               <img src={pen} alt="" />
//               <img src={del} alt="" />
//             </div>
//           </div>
//         </div>
//         <div className="bg-[#ffffff] border-[#E5E7EB] border px-[9px] py-[8px] rounded-[12px] mt-[14px]">
//           <div className="flex justify-between items-center">
//             <div className="flex gap-[9px]">
//               <div>
//                 <span className="bg-[#DBEAFE] text-[11px] font-bold text-[#197FE6] px-[8px] py-[9px] rounded-full">SO</span>
//               </div>

//               <div>
//                 <h2 className="text-[#000000] text-[14px] font-bold">Ozodbek Jasurov</h2>
//                 <p className="text-[#64748B] text-[11px] font-normal">Comment</p>
//               </div>
//             </div>

//             <div>
//               <h2 className="text-[#197FE6] text-[14px] font-bold ml-[50px] mb-[15px">158.000 so’m</h2>
//             </div>
//           </div>

//           <div className="flex justify-between items-center ml-[24px]">
//             <div className="flex w-[150px] gap-[17px]">
//               <img src={plus} alt="" />
//               <img src={minus} alt="" />
//               <img src={time} alt="" />
//             </div>
//             <div className="bg-[#FFF7ED] py-[9px] px-[12px] rounded-full w-[150px] flex justify-between">
//               <img src={eye} alt="" />
//               <img src={pen} alt="" />
//               <img src={del} alt="" />
//             </div>
//           </div>
//         </div>
//         <div className="bg-[#ffffff] border-[#E5E7EB] border px-[9px] py-[8px] rounded-[12px] mt-[14px]">
//           <div className="flex justify-between items-center">
//             <div className="flex gap-[9px]">
//               <div>
//                 <span className="bg-[#DBEAFE] text-[11px] font-bold text-[#197FE6] px-[8px] py-[9px] rounded-full">SO</span>
//               </div>

//               <div>
//                 <h2 className="text-[#000000] text-[14px] font-bold">Giyosbek G’anibekov</h2>
//                 <p className="text-[#64748B] text-[11px] font-normal">Comment</p>
//               </div>
//             </div>

//             <div>
//               <h2 className="text-[#197FE6] text-[14px] font-bold ml-[50px] mb-[15px">150.000 so’m</h2>
//             </div>
//           </div>

//           <div className="flex justify-between items-center ml-[24px]">
//             <div className="flex w-[150px] gap-[17px]">
//               <img src={plus} alt="" />
//               <img src={minus} alt="" />
//               <img src={time} alt="" />
//             </div>
//             <div className="bg-[#FFF7ED] py-[9px] px-[12px] rounded-full w-[150px] flex justify-between">
//               <img src={eye} alt="" />
//               <img src={pen} alt="" />
//               <img src={del} alt="" />
//             </div>
//           </div>
//         </div>
//         <div className="bg-[#ffffff] border-[#E5E7EB] border px-[9px] py-[8px] rounded-[12px] mt-[14px]">
//           <div className="flex justify-between items-center">
//             <div className="flex gap-[9px]">
//               <div>
//                 <span className="bg-[#DBEAFE] text-[11px] font-bold text-[#197FE6] px-[8px] py-[9px] rounded-full">SO</span>
//               </div>

//               <div>
//                 <h2 className="text-[#000000] text-[14px] font-bold">Sobirjon Otajanov</h2>
//                 <p className="text-[#64748B] text-[11px] font-normal">Comment</p>
//               </div>
//             </div>

//             <div>
//               <h2 className="text-[#197FE6] text-[14px] font-bold ml-[50px] mb-[15px">150.000 so’m</h2>
//             </div>
//           </div>

//           <div className="flex justify-between items-center ml-[24px]">
//             <div className="flex w-[150px] gap-[17px]">
//               <img src={plus} alt="" />
//               <img src={minus} alt="" />
//               <img src={time} alt="" />
//             </div>
//             <div className="bg-[#FFF7ED] py-[9px] px-[12px] rounded-full w-[150px] flex justify-between">
//               <img src={eye} alt="" />
//               <img src={pen} alt="" />
//               <img src={del} alt="" />
//             </div>
//           </div>
//         </div>


//       </section>
//     </div>
//   </div>;
// }

// export default Home;
























import React from "react";
import { Link } from "react-router-dom";
import analit from "../../public/analitic.png";
import Notificationimg from "../../public/Not.png";

function Home() {
  return (
    <div>

      {/* Header */}
      <div className="bg-[#E5E7EB] w-full h-[85px]">
        <div className="container mx-auto px-4 flex justify-between items-center pt-[24px]">
          <div>
            <p className="text-[#64748B] text-[11px] font-bold">
              Qaytganingiz Bilan!
            </p>
            <h2 className="text-[#0E141B] text-[18px] sm:text-[20px] font-bold">
              Bosh Sahifa
            </h2>
          </div>
          <div className="bg-[#E0F2FE] w-[36px] h-[36px] rounded-full flex items-center justify-center">
            <img src={Notificationimg} alt="" />
          </div>
        </div>
      </div>

      {/* Financial Card */}
      <div className="container mx-auto px-4">
        <div className="bg-[#E5E7EB] w-full max-w-[350px] sm:max-w-[450px] md:max-w-[600px] mx-auto mt-[20px] border border-[#D0DBE7] rounded-[12px] py-[13px] px-[15px]">
          <div className="flex justify-between">
            <div>
              <p className="text-[12px] font-bold text-[#64748B]">
                Moliyaviy Ko’rsatgich
              </p>
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#0E141B]">
                20.650.000 so’m
              </h2>
            </div>
            <div>
              <p className="text-[#078838] text-[11px]">+12</p>
            </div>
          </div>

          <div className="mt-[12px]">
            <div className="flex justify-between">
              <p className="text-[11px] text-[#64748B]">
                Qarzlar summasi
              </p>
              <p className="text-[11px] font-bold">
                12.450.000 so’m
              </p>
            </div>
            <div className="flex justify-between mt-[28px]">
              <p className="text-[11px] text-[#64748B]">
                To’plangan Qarzlar summasi
              </p>
              <p className="text-[11px] font-bold">
                8.200.000 so’m
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Responsive image */}
      <img
        src={analit}
        alt=""
        className="w-full max-w-full h-auto px-[15px] mt-[10px]"
      />

      {/* Add Loan Button */}
      <div className="container mx-auto px-4 mt-[25px]">
        <div className="max-w-[350px] sm:max-w-[450px] md:max-w-[600px] mx-auto">
          <button className="bg-[#197FE6] w-full h-[55px] rounded-[12px]">
            <a
              className="text-[#fff] text-[15px] font-bold"
              href="/List"
            >
              + Yangi Qarzdorni Yaratish
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;