// // // // // import React from "react";
// // // // // import Notificationimg from "../../public/Not.png";
// // // // // // Images{
// // // // // import plus from "../../public/plus.png";
// // // // // import minus from "../../public/minus.png";
// // // // // import time from "../../public/Clock.png";
// // // // // import eye from "../../public/Eye.png";
// // // // // import pen from "../../public/pen.png";
// // // // // import del from "../../public/delete.png";
// // // // // // }
// // // // // // Icons{
// // // // // import { ArrowLeft } from 'lucide-react';
// // // // // // }

// // // // // function Home() {
// // // // //   return <div >
// // // // //     <div>
// // // // //       {/* Home Header */}

// // // // //       <div className="bg-[#E5E7EB] w-full h-[85px]">
// // // // //         <div className="container mx-auto flex justify-between items-center pt-[24px]">
// // // // //           <div>
// // // // //             <p className="text-[#64748B] text-[11px] font-bold">Qaytganingiz Bilan!</p>
// // // // //             <h2 className="text-[#0E141B] text-[20px] font-bold">Bosh Sahifa</h2>
// // // // //           </div>
// // // // //           <div className="bg-[#E0F2FE] w-[36px] h-[36px] rounded-[50%]">
// // // // //             <img src={Notificationimg} alt="" />
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Home Card Top */}

// // // // //       <div className="container mx-auto bg-[#E5E7EB] max-w-[350px] w-full h-[170px] mt-[20px] border #D0DBE7 rounded-[12px] py-[13px] px-[15px]">
// // // // //         <div className="flex justify-between">
// // // // //           <div>
// // // // //             <p className="text-[12px] font-bold text-[#64748B]">Moliyaviy Ko’rsatgich</p>
// // // // //             <h2 className="text-[32px] font-bold text-[#0E141B]">20.650.000 so’m</h2>
// // // // //           </div>
// // // // //           <div>
// // // // //             <p className="text-[#078838] text-[11px]">+12</p>
// // // // //           </div>
// // // // //         </div>

// // // // //         <div className="mt-[12px]">
// // // // //           <div className="flex justify-between">
// // // // //             <p className="text-[11px] text-[#64748B]">Qarzlar summasi</p>
// // // // //             <p className="text-[11px] font-bold">12.450.000 so’m</p>
// // // // //           </div>
// // // // //           <div className="flex justify-between mt-[28px]">
// // // // //             <p className="text-[11px] text-[#64748B]">To’plangan Qarzlar summasi</p>
// // // // //             <p className="text-[11px] font-bold">8.200.000 so’m</p>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Loan Add Button */}

// // // // //       <div className="cotainer mx-auto">
// // // // //         <div className="mt-[25px]">
// // // // //           <center>
// // // // //             <button className="bg-[#197FE6] max-w-[350px] w-full h-[55px] py-[14px] px-[78px] rounded-[12px]"><a className="text-[#fff] text-[15px] font-bold" href="/List">+ Yangi Qarzdorni Yaratish </a></button>
// // // // //           </center>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* List Loaners */}

// // // // //       <section className="container mx-auto">

// // // // //         <div className="bg-[#ffffff] border-[#E5E7EB] border px-[9px] py-[8px] rounded-[12px] mt-[14px]">
// // // // //           <div className="flex justify-between items-center">
// // // // //             <div className="flex gap-[9px]">
// // // // //               <div>
// // // // //                 <span className="bg-[#DBEAFE] text-[11px] font-bold text-[#197FE6] px-[8px] py-[9px] rounded-full">SO</span>
// // // // //               </div>

// // // // //               <div>
// // // // //                 <h2 className="text-[#000000] text-[14px] font-bold">Sobirjon Otajanov</h2>
// // // // //                 <p className="text-[#64748B] text-[11px] font-normal">Comment</p>
// // // // //               </div>
// // // // //             </div>

// // // // //             <div>
// // // // //               <h2 className="text-[#197FE6] text-[14px] font-bold ml-[50px] mb-[15px">150.000 so’m</h2>
// // // // //             </div>
// // // // //           </div>

// // // // //           <div className="flex justify-between items-center ml-[24px]">
// // // // //             <div className="flex w-[150px] gap-[17px]">
// // // // //               <img src={plus} alt="" />
// // // // //               <img src={minus} alt="" />
// // // // //               <img src={time} alt="" />
// // // // //             </div>
// // // // //             <div className="bg-[#FFF7ED] py-[9px] px-[12px] rounded-full w-[150px] flex justify-between">
// // // // //               <img src={eye} alt="" />
// // // // //               <img src={pen} alt="" />
// // // // //               <img src={del} alt="" />
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //         <div className="bg-[#ffffff] border-[#E5E7EB] border px-[9px] py-[8px] rounded-[12px] mt-[14px]">
// // // // //           <div className="flex justify-between items-center">
// // // // //             <div className="flex gap-[9px]">
// // // // //               <div>
// // // // //                 <span className="bg-[#DBEAFE] text-[11px] font-bold text-[#197FE6] px-[8px] py-[9px] rounded-full">SO</span>
// // // // //               </div>

// // // // //               <div>
// // // // //                 <h2 className="text-[#000000] text-[14px] font-bold">Sobirjon Raximov</h2>
// // // // //                 <p className="text-[#64748B] text-[11px] font-normal">Comment</p>
// // // // //               </div>
// // // // //             </div>

// // // // //             <div>
// // // // //               <h2 className="text-[#197FE6] text-[14px] font-bold ml-[50px] mb-[15px">158.000 so’m</h2>
// // // // //             </div>
// // // // //           </div>

// // // // //           <div className="flex justify-between items-center ml-[24px]">
// // // // //             <div className="flex w-[150px] gap-[17px]">
// // // // //               <img src={plus} alt="" />
// // // // //               <img src={minus} alt="" />
// // // // //               <img src={time} alt="" />
// // // // //             </div>
// // // // //             <div className="bg-[#FFF7ED] py-[9px] px-[12px] rounded-full w-[150px] flex justify-between">
// // // // //               <img src={eye} alt="" />
// // // // //               <img src={pen} alt="" />
// // // // //               <img src={del} alt="" />
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //         <div className="bg-[#ffffff] border-[#E5E7EB] border px-[9px] py-[8px] rounded-[12px] mt-[14px]">
// // // // //           <div className="flex justify-between items-center">
// // // // //             <div className="flex gap-[9px]">
// // // // //               <div>
// // // // //                 <span className="bg-[#DBEAFE] text-[11px] font-bold text-[#197FE6] px-[8px] py-[9px] rounded-full">SO</span>
// // // // //               </div>

// // // // //               <div>
// // // // //                 <h2 className="text-[#000000] text-[14px] font-bold">Azizbek Atajanov</h2>
// // // // //                 <p className="text-[#64748B] text-[11px] font-normal">Comment</p>
// // // // //               </div>
// // // // //             </div>

// // // // //             <div>
// // // // //               <h2 className="text-[#197FE6] text-[14px] font-bold ml-[50px] mb-[15px">320.000 so’m</h2>
// // // // //             </div>
// // // // //           </div>

// // // // //           <div className="flex justify-between items-center ml-[24px]">
// // // // //             <div className="flex w-[150px] gap-[17px]">
// // // // //               <img src={plus} alt="" />
// // // // //               <img src={minus} alt="" />
// // // // //               <img src={time} alt="" />
// // // // //             </div>
// // // // //             <div className="bg-[#FFF7ED] py-[9px] px-[12px] rounded-full w-[150px] flex justify-between">
// // // // //               <img src={eye} alt="" />
// // // // //               <img src={pen} alt="" />
// // // // //               <img src={del} alt="" />
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //         <div className="bg-[#ffffff] border-[#E5E7EB] border px-[9px] py-[8px] rounded-[12px] mt-[14px]">
// // // // //           <div className="flex justify-between items-center">
// // // // //             <div className="flex gap-[9px]">
// // // // //               <div>
// // // // //                 <span className="bg-[#DBEAFE] text-[11px] font-bold text-[#197FE6] px-[8px] py-[9px] rounded-full">SO</span>
// // // // //               </div>

// // // // //               <div>
// // // // //                 <h2 className="text-[#000000] text-[14px] font-bold">Jumaniyoz Bekov</h2>
// // // // //                 <p className="text-[#64748B] text-[11px] font-normal">Comment</p>
// // // // //               </div>
// // // // //             </div>

// // // // //             <div>
// // // // //               <h2 className="text-[#197FE6] text-[14px] font-bold ml-[50px] mb-[15px">150.000 so’m</h2>
// // // // //             </div>
// // // // //           </div>

// // // // //           <div className="flex justify-between items-center ml-[24px]">
// // // // //             <div className="flex w-[150px] gap-[17px]">
// // // // //               <img src={plus} alt="" />
// // // // //               <img src={minus} alt="" />
// // // // //               <img src={time} alt="" />
// // // // //             </div>
// // // // //             <div className="bg-[#FFF7ED] py-[9px] px-[12px] rounded-full w-[150px] flex justify-between">
// // // // //               <img src={eye} alt="" />
// // // // //               <img src={pen} alt="" />
// // // // //               <img src={del} alt="" />
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //         <div className="bg-[#ffffff] border-[#E5E7EB] border px-[9px] py-[8px] rounded-[12px] mt-[14px]">
// // // // //           <div className="flex justify-between items-center">
// // // // //             <div className="flex gap-[9px]">
// // // // //               <div>
// // // // //                 <span className="bg-[#DBEAFE] text-[11px] font-bold text-[#197FE6] px-[8px] py-[9px] rounded-full">SO</span>
// // // // //               </div>

// // // // //               <div>
// // // // //                 <h2 className="text-[#000000] text-[14px] font-bold">Ozodbek Jasurov</h2>
// // // // //                 <p className="text-[#64748B] text-[11px] font-normal">Comment</p>
// // // // //               </div>
// // // // //             </div>

// // // // //             <div>
// // // // //               <h2 className="text-[#197FE6] text-[14px] font-bold ml-[50px] mb-[15px">158.000 so’m</h2>
// // // // //             </div>
// // // // //           </div>

// // // // //           <div className="flex justify-between items-center ml-[24px]">
// // // // //             <div className="flex w-[150px] gap-[17px]">
// // // // //               <img src={plus} alt="" />
// // // // //               <img src={minus} alt="" />
// // // // //               <img src={time} alt="" />
// // // // //             </div>
// // // // //             <div className="bg-[#FFF7ED] py-[9px] px-[12px] rounded-full w-[150px] flex justify-between">
// // // // //               <img src={eye} alt="" />
// // // // //               <img src={pen} alt="" />
// // // // //               <img src={del} alt="" />
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //         <div className="bg-[#ffffff] border-[#E5E7EB] border px-[9px] py-[8px] rounded-[12px] mt-[14px]">
// // // // //           <div className="flex justify-between items-center">
// // // // //             <div className="flex gap-[9px]">
// // // // //               <div>
// // // // //                 <span className="bg-[#DBEAFE] text-[11px] font-bold text-[#197FE6] px-[8px] py-[9px] rounded-full">SO</span>
// // // // //               </div>

// // // // //               <div>
// // // // //                 <h2 className="text-[#000000] text-[14px] font-bold">Giyosbek G’anibekov</h2>
// // // // //                 <p className="text-[#64748B] text-[11px] font-normal">Comment</p>
// // // // //               </div>
// // // // //             </div>

// // // // //             <div>
// // // // //               <h2 className="text-[#197FE6] text-[14px] font-bold ml-[50px] mb-[15px">150.000 so’m</h2>
// // // // //             </div>
// // // // //           </div>

// // // // //           <div className="flex justify-between items-center ml-[24px]">
// // // // //             <div className="flex w-[150px] gap-[17px]">
// // // // //               <img src={plus} alt="" />
// // // // //               <img src={minus} alt="" />
// // // // //               <img src={time} alt="" />
// // // // //             </div>
// // // // //             <div className="bg-[#FFF7ED] py-[9px] px-[12px] rounded-full w-[150px] flex justify-between">
// // // // //               <img src={eye} alt="" />
// // // // //               <img src={pen} alt="" />
// // // // //               <img src={del} alt="" />
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //         <div className="bg-[#ffffff] border-[#E5E7EB] border px-[9px] py-[8px] rounded-[12px] mt-[14px]">
// // // // //           <div className="flex justify-between items-center">
// // // // //             <div className="flex gap-[9px]">
// // // // //               <div>
// // // // //                 <span className="bg-[#DBEAFE] text-[11px] font-bold text-[#197FE6] px-[8px] py-[9px] rounded-full">SO</span>
// // // // //               </div>

// // // // //               <div>
// // // // //                 <h2 className="text-[#000000] text-[14px] font-bold">Sobirjon Otajanov</h2>
// // // // //                 <p className="text-[#64748B] text-[11px] font-normal">Comment</p>
// // // // //               </div>
// // // // //             </div>

// // // // //             <div>
// // // // //               <h2 className="text-[#197FE6] text-[14px] font-bold ml-[50px] mb-[15px">150.000 so’m</h2>
// // // // //             </div>
// // // // //           </div>

// // // // //           <div className="flex justify-between items-center ml-[24px]">
// // // // //             <div className="flex w-[150px] gap-[17px]">
// // // // //               <img src={plus} alt="" />
// // // // //               <img src={minus} alt="" />
// // // // //               <img src={time} alt="" />
// // // // //             </div>
// // // // //             <div className="bg-[#FFF7ED] py-[9px] px-[12px] rounded-full w-[150px] flex justify-between">
// // // // //               <img src={eye} alt="" />
// // // // //               <img src={pen} alt="" />
// // // // //               <img src={del} alt="" />
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>


// // // // //       </section>
// // // // //     </div>
// // // // //   </div>;
// // // // // }

// // // // // export default Home;
























// // // import React from "react";
// // // import { Link } from "react-router-dom";
// // // import analit from "../../public/analitic.png";
// // // import Notificationimg from "../../public/Not.png";

// // // function Home() {
// // //   return (
// // //     <div>

// // //       {/* Header */}
// // //       <div className="bg-[#E5E7EB] w-full h-[85px]">
// // //         <div className="container mx-auto px-4 flex justify-between items-center pt-[24px]">
// // //           <div>
// // //             <p className="text-[#64748B] text-[11px] font-bold">
// // //               Qaytganingiz Bilan!
// // //             </p>
// // //             <h2 className="text-[#0E141B] text-[18px] sm:text-[20px] font-bold">
// // //               Bosh Sahifa
// // //             </h2>
// // //           </div>
// // //           <div className="bg-[#E0F2FE] w-[36px] h-[36px] rounded-full flex items-center justify-center">
// // //             <img src={Notificationimg} alt="" />
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Financial Card */}
// // //       <div className="container mx-auto px-4">
// // //         <div className="bg-[#E5E7EB] w-full max-w-[350px] sm:max-w-[450px] md:max-w-[600px] mx-auto mt-[20px] border border-[#D0DBE7] rounded-[12px] py-[13px] px-[15px]">
// // //           <div className="flex justify-between">
// // //             <div>
// // //               <p className="text-[12px] font-bold text-[#64748B]">
// // //                 Moliyaviy Ko’rsatgich
// // //               </p>
// // //               <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#0E141B]">
// // //                 20.650.000 so’m
// // //               </h2>
// // //             </div>
// // //             <div>
// // //               <p className="text-[#078838] text-[11px]">+12</p>
// // //             </div>
// // //           </div>

// // //           <div className="mt-[12px]">
// // //             <div className="flex justify-between">
// // //               <p className="text-[11px] text-[#64748B]">
// // //                 Qarzlar summasi
// // //               </p>
// // //               <p className="text-[11px] font-bold">
// // //                 12.450.000 so’m
// // //               </p>
// // //             </div>
// // //             <div className="flex justify-between mt-[28px]">
// // //               <p className="text-[11px] text-[#64748B]">
// // //                 To’plangan Qarzlar summasi
// // //               </p>
// // //               <p className="text-[11px] font-bold">
// // //                 8.200.000 so’m
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>


// // //       {/* Responsive image */}
// // //       <img
// // //         src={analit}
// // //         alt=""
// // //         className="w-full max-w-full h-auto px-[15px] mt-[10px]"
// // //       />

// // //       {/* Add Loan Button */}
// // //       <div className="container mx-auto px-4 mt-[25px]">
// // //         <div className="max-w-[350px] sm:max-w-[450px] md:max-w-[600px] mx-auto">
// // //           <button className="bg-[#197FE6] w-full h-[55px] rounded-[12px]">
// // //             <a
// // //               className="text-[#fff] text-[15px] font-bold"
// // //               href="/Camera"
// // //             >
// // //               + Yangi Qarzdorni Yaratish
// // //             </a>
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Home;






















// // // src/Pages/Home.jsx
// // import React, { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";
// // import analit from "../../public/analitic.png";
// // import Notificationimg from "../../public/Not.png";
// // import { db } from "../firebase";
// // import { collection, onSnapshot, getDocs } from "firebase/firestore";

// // function Home() {
// //   const [activeType, setActiveType] = useState("Kirim"); // Kirim = reduce, Chiqim = add
// //   const [totalLoans, setTotalLoans] = useState(0);
// //   const [collectedLoans, setCollectedLoans] = useState(0);

// //   useEffect(() => {
// //     const unsubscribe = onSnapshot(collection(db, "loaners"), async (snapshot) => {
// //       const today = new Date();
// //       let totalLoanSum = 0;
// //       let collectedSum = 0;

// //       for (const docItem of snapshot.docs) {
// //         const loaner = docItem.data();
// //         const loanerId = docItem.id;
// //         totalLoanSum += loaner.amount || 0;

// //         // Fetch history for each loaner
// //         const historySnap = await getDocs(collection(db, "loaners", loanerId, "history"));
// //         historySnap.forEach(hDoc => {
// //           const payment = hDoc.data();
// //           const paymentAmount = payment.amount || 0;
// //           if (payment.type === "reduce") {
// //             collectedSum += paymentAmount;
// //           }
// //         });
// //       }

// //       setTotalLoans(totalLoanSum);
// //       setCollectedLoans(collectedSum);
// //     });

// //     return () => unsubscribe();
// //   }, []);

// //   return (
// //     <div>
// //       {/* Header */}
// //       <div className="bg-[#E5E7EB] w-full h-[85px]">
// //         <div className="container mx-auto px-4 flex justify-between items-center pt-[24px]">
// //           <div>
// //             <p className="text-[#64748B] text-[11px] font-bold">
// //               Qaytganingiz Bilan!
// //             </p>
// //             <h2 className="text-[#0E141B] text-[18px] sm:text-[20px] font-bold">
// //               Bosh Sahifa
// //             </h2>
// //           </div>
// //           <div className="bg-[#E0F2FE] w-[36px] h-[36px] rounded-full flex items-center justify-center">
// //             <img src={Notificationimg} alt="" />
// //           </div>
// //         </div>
// //       </div>

// //       {/* Financial Card with real-time analytics */}
// //       <div className="container mx-auto px-4">
// //         <div className="bg-[#E5E7EB] w-full max-w-[350px] sm:max-w-[450px] md:max-w-[600px] mx-auto mt-[20px] border border-[#D0DBE7] rounded-[12px] py-[13px] px-[15px]">
// //           <div className="flex justify-between">
// //             <div>
// //               <p className="text-[12px] font-bold text-[#64748B]">
// //                 Moliyaviy Ko’rsatgich
// //               </p>
// //               <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#0E141B]">
// //                 {activeType === "Kirim" ? collectedLoans.toLocaleString() : totalLoans.toLocaleString()} so’m
// //               </h2>
// //             </div>
// //             <div>
// //               <p className="text-[#078838] text-[11px]">+12</p>
// //             </div>
// //           </div>

// //           <div className="mt-[12px]">
// //             <div className="flex justify-between">
// //               <p className="text-[11px] text-[#64748B]">
// //                 Qarzlar summasi
// //               </p>
// //               <p className="text-[11px] font-bold">
// //                 {totalLoans.toLocaleString()} so’m
// //               </p>
// //             </div>
// //             <div className="flex justify-between mt-[28px]">
// //               <p className="text-[11px] text-[#64748B]">
// //                 To’plangan Qarzlar summasi
// //               </p>
// //               <p className="text-[11px] font-bold">
// //                 {collectedLoans.toLocaleString()} so’m
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Kirim / Chiqim Switch Buttons */}
// //       <div className="container mx-auto px-4 mt-[15px] flex justify-center gap-4 flex-wrap">
// //         {["Kirim", "Chiqim"].map(type => (
// //           <button
// //             key={type}
// //             onClick={() => setActiveType(type)}
// //             className={`px-[25px] py-[6px] rounded-[10px] font-bold ${activeType === type ? "bg-[#197FE6] text-white" : "bg-[#E5E7EB] text-[#6B7280]"
// //               }`}
// //           >
// //             {type}
// //           </button>
// //         ))}
// //       </div>

// //       {/* Responsive Image */}
// //       <img
// //         src={analit}
// //         alt=""
// //         className="w-full max-w-full h-auto px-[15px] mt-[10px]"
// //       />

// //       {/* Add Loan Button */}
// //       <div className="container mx-auto px-4 mt-[25px]">
// //         <div className="max-w-[350px] sm:max-w-[450px] md:max-w-[600px] mx-auto">
// //           <button className="bg-[#197FE6] w-full h-[55px] rounded-[12px]">
// //             <a className="text-[#fff] text-[15px] font-bold" href="/Camera">
// //               + Yangi Qarzdorni Yaratish
// //             </a>
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Home;






































// // src/Pages/Home.jsx
// import React, { useState, useEffect } from "react";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
// import { db } from "../firebase";
// import { collection, onSnapshot, getDocs } from "firebase/firestore";
// import analit from "../../public/analitic.png";
// import Notificationimg from "../../public/Not.png";

// function Home() {
//   const [activeType, setActiveType] = useState("Kirim"); // Kirim = reduce, Chiqim = add
//   const [chartData, setChartData] = useState([]);
//   const [totalLoans, setTotalLoans] = useState(0);
//   const [collectedLoans, setCollectedLoans] = useState(0);

//   useEffect(() => {
//     const unsubscribe = onSnapshot(collection(db, "loaners"), async (snapshot) => {
//       const today = new Date();
//       let allPayments = [];
//       let totalLoanSum = 0;
//       let collectedSum = 0;

//       for (const docItem of snapshot.docs) {
//         const loaner = docItem.data();
//         const loanerId = docItem.id;
//         totalLoanSum += loaner.amount || 0;

//         const historySnap = await getDocs(collection(db, "loaners", loanerId, "history"));
//         historySnap.forEach(hDoc => {
//           const payment = hDoc.data();
//           const paymentDate = payment.createdAt?.seconds
//             ? new Date(payment.createdAt.seconds * 1000)
//             : payment.createdAt ? new Date(payment.createdAt) : today;

//           allPayments.push({
//             id: hDoc.id,
//             loanerName: loaner.fullName || "No Name",
//             amount: payment.amount || 0,
//             type: payment.type, // "reduce" or "add"
//             date: paymentDate
//           });

//           if (payment.type === "reduce") collectedSum += payment.amount || 0;
//         });
//       }

//       setTotalLoans(totalLoanSum);
//       setCollectedLoans(collectedSum);

//       // Filter by activeType for chart
//       const filteredPayments = allPayments.filter(p =>
//         activeType === "Kirim" ? p.type === "reduce" : p.type === "add"
//       );

//       // Build chart data for last 7 days
//       const dataMap = {};
//       for (let i = 0; i < 7; i++) {
//         const d = new Date();
//         d.setDate(today.getDate() - i);
//         const key = d.toLocaleDateString("en-US", { weekday: "short" });
//         dataMap[key] = 0;
//       }

//       filteredPayments.forEach(p => {
//         const diffDays = Math.floor((today - p.date) / (1000 * 60 * 60 * 24));
//         if (diffDays < 7 && diffDays >= 0) {
//           const key = p.date.toLocaleDateString("en-US", { weekday: "short" });
//           dataMap[key] += p.amount;
//         }
//       });

//       const finalData = Object.keys(dataMap).map(key => ({ name: key, collected: dataMap[key] }));
//       setChartData(finalData);
//     });

//     return () => unsubscribe();
//   }, [activeType]);

//   return (
//     <div>
//       {/* Header */}
//       <div className="bg-[#E5E7EB] w-full h-[85px]">
//         <div className="container mx-auto px-4 flex justify-between items-center pt-[24px]">
//           <div>
//             <p className="text-[#64748B] text-[11px] font-bold">
//               Qaytganingiz Bilan!
//             </p>
//             <h2 className="text-[#0E141B] text-[18px] sm:text-[20px] font-bold">
//               Bosh Sahifa
//             </h2>
//           </div>
//           <div className="bg-[#E0F2FE] w-[36px] h-[36px] rounded-full flex items-center justify-center">
//             <img src={Notificationimg} alt="" />
//           </div>
//         </div>
//       </div>

//       {/* Financial Card */}
//       <div className="container mx-auto px-4">
//         <div className="bg-[#E5E7EB] w-full max-w-[350px] sm:max-w-[450px] md:max-w-[600px] mx-auto mt-[20px] border border-[#D0DBE7] rounded-[12px] py-[13px] px-[15px]">
//           <div className="flex justify-between">
//             <div>
//               <p className="text-[12px] font-bold text-[#64748B]">
//                 Moliyaviy Ko’rsatgich
//               </p>
//               <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#0E141B]">
//                 {activeType === "Kirim" ? collectedLoans.toLocaleString() : totalLoans.toLocaleString()} so’m
//               </h2>
//             </div>
//             <div>
//               <p className="text-[#078838] text-[11px]">+12</p>
//             </div>
//           </div>

//           <div className="mt-[12px]">
//             <div className="flex justify-between">
//               <p className="text-[11px] text-[#64748B]">
//                 Qarzlar summasi
//               </p>
//               <p className="text-[11px] font-bold">
//                 {totalLoans.toLocaleString()} so’m
//               </p>
//             </div>
//             <div className="flex justify-between mt-[28px]">
//               <p className="text-[11px] text-[#64748B]">
//                 To’plangan Qarzlar summasi
//               </p>
//               <p className="text-[11px] font-bold">
//                 {collectedLoans.toLocaleString()} so’m
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Kirim / Chiqim Switch Buttons */}
//       <div className="container mx-auto px-4 mt-[15px] flex justify-center gap-4 flex-wrap">
//         {["Kirim", "Chiqim"].map(type => (
//           <button
//             key={type}
//             onClick={() => setActiveType(type)}
//             className={`px-[25px] py-[6px] rounded-[10px] font-bold ${activeType === type ? "bg-[#197FE6] text-white" : "bg-[#E5E7EB] text-[#6B7280]"
//               }`}
//           >
//             {type}
//           </button>
//         ))}
//       </div>

//       {/* Real-time Chart */}
//       <div className="w-full h-[300px] mt-[20px] px-[15px]">
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip formatter={(value) => value.toLocaleString() + " so’m"} />
//             <Bar dataKey="collected" fill="#197FE6" radius={[6, 6, 0, 0]} />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Responsive Image
//       <img
//         src={analit}
//         alt=""
//         className="w-full max-w-full h-auto px-[15px] mt-[10px]"
//       /> */}

//       {/* Add Loan Button */}
//       <div className="container mx-auto px-4 mt-[25px]">
//         <div className="max-w-[350px] sm:max-w-[450px] md:max-w-[600px] mx-auto">
//           <button className="bg-[#197FE6] w-full h-[55px] rounded-[12px]">
//             <a className="text-[#fff] text-[15px] font-bold" href="/Camera">
//               + Yangi Qarzdorni Yaratish
//             </a>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

























import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { db } from "../firebase";
import { collection, onSnapshot, getDocs } from "firebase/firestore";
import analit from "../../public/analitic.png";
import Notificationimg from "../../public/Not.png";

function Home() {
  const [activeType, setActiveType] = useState("Kirim"); // Kirim = reduce, Chiqim = add
  const [chartData, setChartData] = useState([]);
  const [totalLoans, setTotalLoans] = useState(0);
  const [collectedLoans, setCollectedLoans] = useState(0);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "loaners"), async (snapshot) => {
      const today = new Date();
      let allPayments = [];
      let totalLoanSum = 0;
      let collectedSum = 0;

      // Load histories in parallel to speed up
      const histories = await Promise.all(
        snapshot.docs.map(docItem => getDocs(collection(db, "loaners", docItem.id, "history")))
      );

      snapshot.docs.forEach((docItem, index) => {
        const loaner = docItem.data();
        totalLoanSum += loaner.amount || 0;

        histories[index].forEach(hDoc => {
          const payment = hDoc.data();
          const paymentDate = payment.createdAt?.seconds
            ? new Date(payment.createdAt.seconds * 1000)
            : payment.createdAt ? new Date(payment.createdAt) : today;

          allPayments.push({
            id: hDoc.id,
            loanerName: loaner.fullName || "No Name",
            amount: payment.amount || 0,
            type: payment.type, // "reduce" or "add"
            date: paymentDate
          });

          if (payment.type === "reduce") collectedSum += payment.amount || 0;
        });
      });

      setTotalLoans(totalLoanSum);
      setCollectedLoans(collectedSum);

      // Filter by activeType for chart
      const filteredPayments = allPayments.filter(p =>
        activeType === "Kirim" ? p.type === "reduce" : p.type === "add"
      );

      // Build chart data for last 7 days
      const dataMap = {};
      for (let i = 0; i < 7; i++) {
        const d = new Date();
        d.setDate(today.getDate() - i);
        const key = d.toLocaleDateString("en-US", { weekday: "short" });
        dataMap[key] = 0;
      }

      filteredPayments.forEach(p => {
        const diffDays = Math.floor((today - p.date) / (1000 * 60 * 60 * 24));
        if (diffDays < 7 && diffDays >= 0) {
          const key = p.date.toLocaleDateString("en-US", { weekday: "short" });
          dataMap[key] += p.amount;
        }
      });

      const finalData = Object.keys(dataMap).map(key => ({ name: key, collected: dataMap[key] }));
      setChartData(finalData);
    });

    return () => unsubscribe();
  }, [activeType]);

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
                {activeType === "Kirim" ? collectedLoans.toLocaleString() : totalLoans.toLocaleString()} so’m
              </h2>

              {/* Progress Line */}
              <div className="w-full bg-[#D1D5DB] h-[6px] rounded mt-[8px] overflow-hidden">
                <div
                  className="bg-[#197FE6] h-[6px]"
                  style={{
                    width: `${totalLoans ? (collectedLoans / totalLoans) * 100 : 0}%`
                  }}
                ></div>
              </div>
            </div>
            <div>
              <p className="text-[#078838] text-[11px]">+12</p>
            </div>
          </div>

          <div className="mt-[12px]">
            <div className="flex justify-between">
              <p className="text-[11px] text-[#64748B]">Qarzlar summasi</p>
              <p className="text-[11px] font-bold">{totalLoans.toLocaleString()} so’m</p>
            </div>
            <div className="flex justify-between mt-[28px]">
              <p className="text-[11px] text-[#64748B]">To’plangan Qarzlar summasi</p>
              <p className="text-[11px] font-bold">{collectedLoans.toLocaleString()} so’m</p>
            </div>
          </div>
        </div>
      </div>

      {/* Kirim / Chiqim Switch Buttons */}
      <div className="container mx-auto px-4 mt-[15px] flex justify-center gap-4 flex-wrap">
        {["Kirim", "Chiqim"].map(type => (
          <button
            key={type}
            onClick={() => setActiveType(type)}
            className={`px-[25px] py-[6px] rounded-[10px] font-bold ${activeType === type ? "bg-[#197FE6] text-white" : "bg-[#E5E7EB] text-[#6B7280]"}`
            }
          >
            {type}
          </button>
        ))}
      </div>

      {/* Real-time Chart */}
      <div className="w-full h-[300px] mt-[20px] px-[15px]">
        <ResponsiveContainer width="100%" height="100%">
          {activeType === "Kirim" ? (
            <BarChart data={chartData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip formatter={(value) => value.toLocaleString() + " so’m"} />
              <Bar dataKey="collected" fill="#197FE6" radius={[6, 6, 6, 6]} />
            </BarChart>
          ) : (
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => value.toLocaleString() + " so’m"} />
              <Bar dataKey="collected" fill="#197FE6" radius={[6, 6, 0, 0]} />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>

      {/* Add Loan Button */}
      <div className="container mx-auto px-4 mt-[25px]">
        <div className="max-w-[350px] sm:max-w-[450px] md:max-w-[600px] mx-auto">
          <button className="bg-[#197FE6] w-full h-[55px] rounded-[12px]">
            <a className="text-[#fff] text-[15px] font-bold" href="/Camera">
              + Yangi Qarzdorni Yaratish
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;