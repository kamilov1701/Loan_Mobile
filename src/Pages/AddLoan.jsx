// // // import React from "react";
// // // import { ArrowLeft } from "lucide-react";
// // // import { Link } from "react-router-dom";



// // // // Images{
// // // import money from "../../public/money.png"
// // // import card from "../../public/plastic.png"
// // // // }

// // // function AddLoan() {
// // //     return <div className="text-center">
// // //         <div className="flex gap-[85px] py-[24px] items-center px-[20px] bg-[#FFFFFF] border boder-[#E5E7EB]">
// // //                  <Link to="/"><ArrowLeft className="cursor-pointer" /></Link>
// // //                 <h2 className="font-bold text-xl text-center">Qarz Qo'shish</h2>
// // //             </div>

// // //         <section className="px-[20px]">

// // //             <h3 className="text-[13px] font-bold text-[#64748B] mt-[22px]">Qarzdor: <span className="text-[#0F172A]">Sobirjon Otajanov</span></h3>

// // //             <h2 className="text-[22px] font-bold mt-[5px] mb-[20px] text-[#0F172A]">Qarz summasi: 150.000 so’m </h2>

// // //             <nav className="mt-[12px]">
// // //                 <ul className="bg-[#E5E7EB] px-[15px] py-[4px] flex justify-between rounded-[10px]">
// // //                     <li><a href="#!" className="font-bold text-[13px] text-[#197FE6] bg-[#FFFFFF] py-[5px] px-[30px] rounded-[10px]">+ Qarz Qo’shish </a></li>
// // //                     <li><a href="#!" className="font-normal text-[13px] text-[#6B7280] mr-[40px] ">− Qarz Ayirish </a></li>
// // //                 </ul>
// // //             </nav>


// // //             <h3 className="text-[13px] font-bold text-[#64748B] mt-[17px] text-start">Qarz Miqdori</h3>
// // //             <div className="bg-[#fff] px-[20px] py-[24px] border border-[#E5E7EB] rounded-[12px] mt-[12px]">
// // //                 <h1 className="text-[36px] font-bold text-[#0F172A]">50.000 so’m</h1>
// // //             </div>
// // //             <h4 className="text-[#94A3B8] text-[13px] font-normal mt-[7px] text-end">Qolgan qarz summasi: 100.000 so’m </h4>
// // //             <h3 className="text-[13px] font-bold text-[#64748B] mt-[17px] text-start">To’lov turi</h3>

// // //             <div className="flex justify-between">
// // //                 <div className="bg-[#fff] px-[20px] py-[24px] border border-[#E5E7EB] rounded-[12px] mt-[12px] w-[165px] flex flex-col items-center">
// // //                     <img src={money} alt="" />
// // //                     <p className="text-[14px] text-[#197FE6] font-bold mt-[16px]">Naxt Pul</p>
// // //                 </div>
// // //                 <div className="bg-[#fff] px-[4px] py-[24px] border border-[#E5E7EB] rounded-[12px] mt-[12px] w-[165px] flex flex-col items-center">
// // //                     <img src={card} alt="" />
// // //                     <p className="text-[14px] text-[#64748B] font-bold mt-[16px]">Plastik karta/O’tkazma </p>
// // //                 </div>
// // //             </div>
// // //             <h3 className="text-[13px] font-bold text-[#64748B] mt-[17px] text-start">Comment (ixtiyoriy)</h3>

// // //             <textarea name="" id="" placeholder="Izoh yozish uchun...." className="px-[20px] py-[24px] w-[350px] mt-[12px] rounded-[12px] border border-[#E5E7EB] outline-none"></textarea>
// // //         </section>
// // //         <div className="flex gap-[47px] py-[8px] items-end px-[17px] bg-[#ffffff] border border-[#E5E7EB] absolute bottom-0 z-10">
// // //             <button className="bg-[#197FE6] text-[#fff] border-none px-[18px] py-[13px] rounded-[12px] text-[16px] font-bold">✓ Qarzni Qo'shish</button>
// // //             <button className="bg-[#E11D48] text-[#fff] border-none px-[18px] py-[13px] rounded-[12px] text-[16px] font-bold">- Bekor Qilish</button>
// // //         </div>
// // //     </div>;
// // // }

// // // export default AddLoan;

























// // // // // import React, { useState, useEffect } from "react";
// // // // // import { ArrowLeft } from "lucide-react";
// // // // // import { Link, useNavigate, useParams } from "react-router-dom";
// // // // // import { db } from "../firebase";
// // // // // import { doc, getDoc, updateDoc, addDoc, collection, serverTimestamp } from "firebase/firestore";

// // // // // // Images
// // // // // import money from "../../public/money.png";
// // // // // import card from "../../public/plastic.png";

// // // // // function AddLoan() {
// // // // //     const { id } = useParams();
// // // // //     const navigate = useNavigate();

// // // // //     const [loaner, setLoaner] = useState(null);
// // // // //     const [amount, setAmount] = useState("");
// // // // //     const [newDeadline, setNewDeadline] = useState("");

// // // // //     useEffect(() => {
// // // // //         const fetchLoaner = async () => {
// // // // //             const snap = await getDoc(doc(db, "loaners", id));
// // // // //             if (snap.exists()) setLoaner({ id: snap.id, ...snap.data() });
// // // // //         };
// // // // //         fetchLoaner();
// // // // //     }, [id]);

// // // // //     const handleAddLoan = async () => {
// // // // //         if (!amount) return alert("Enter amount");
// // // // //         const newAmount = Number(loaner.amount) + Number(amount);

// // // // //         await updateDoc(doc(db, "loaners", id), {
// // // // //             amount: newAmount,
// // // // //             lastDate: newDeadline || loaner.lastDate,
// // // // //         });

// // // // //         await addDoc(collection(db, "loaners", id, "history"), {
// // // // //             type: "add",
// // // // //             amount: Number(amount),
// // // // //             createdAt: serverTimestamp(),
// // // // //         });

// // // // //         navigate("/List");
// // // // //     };

// // // // //     return (
// // // // //         <div className="text-center">
// // // // //             <div className="flex gap-[85px] py-[24px] items-center px-[20px] bg-[#FFFFFF] border boder-[#E5E7EB]">
// // // // //                 <Link to="/List"><ArrowLeft className="cursor-pointer" /></Link>
// // // // //                 <h2 className="font-bold text-xl text-center">Qarz Qo'shish</h2>
// // // // //             </div>

// // // // //             <section className="px-[20px]">
// // // // //                 <h3 className="text-[13px] font-bold text-[#64748B] mt-[22px]">
// // // // //                     Qarzdor: <span className="text-[#0F172A]">{loaner?.fullName}</span>
// // // // //                 </h3>

// // // // //                 <h3 className="text-[13px] font-bold text-[#64748B] mt-[17px] text-start">Qarz Miqdori</h3>
// // // // //                 <input
// // // // //                     type="number"
// // // // //                     value={amount}
// // // // //                     onChange={(e) => setAmount(e.target.value)}
// // // // //                     placeholder="Enter amount"
// // // // //                     className="bg-[#fff] px-[20px] py-[24px] border border-[#E5E7EB] rounded-[12px] mt-[12px] w-full text-[24px] font-bold"
// // // // //                 />

// // // // //                 <h3 className="text-[13px] font-bold text-[#64748B] mt-[17px] text-start">New Deadline</h3>
// // // // //                 <input
// // // // //                     type="date"
// // // // //                     value={newDeadline}
// // // // //                     onChange={(e) => setNewDeadline(e.target.value)}
// // // // //                     className="bg-[#fff] px-[20px] py-[12px] border border-[#E5E7EB] rounded-[12px] mt-[12px] w-full"
// // // // //                 />
// // // // //             </section>

// // // // //             <div className="flex gap-[47px] py-[8px] items-end px-[17px] bg-[#ffffff] border border-[#E5E7EB] absolute bottom-0 z-10">
// // // // //                 <button onClick={handleAddLoan} className="bg-[#197FE6] text-[#fff] border-none px-[18px] py-[13px] rounded-[12px] text-[16px] font-bold">✓ Qarzni Qo'shish</button>
// // // // //                 <button onClick={() => navigate("/List")} className="bg-[#E11D48] text-[#fff] border-none px-[18px] py-[13px] rounded-[12px] text-[16px] font-bold">- Bekor Qilish</button>
// // // // //             </div>
// // // // //         </div>
// // // // //     );
// // // // // }

// // // // // export default AddLoan;
































// // // // import React, { useState, useEffect } from "react";
// // // // import { ArrowLeft } from "lucide-react";
// // // // import { Link, useNavigate, useParams } from "react-router-dom";
// // // // import { db } from "../firebase";
// // // // import { doc, getDoc, updateDoc, addDoc, collection, serverTimestamp } from "firebase/firestore";

// // // // function AddLoan() {
// // // //     const { id } = useParams();
// // // //     const navigate = useNavigate();
// // // //     const [loaner, setLoaner] = useState(null);
// // // //     const [amount, setAmount] = useState("");
// // // //     const [newDeadline, setNewDeadline] = useState("");

// // // //     useEffect(() => {
// // // //         const fetchLoaner = async () => {
// // // //             const snap = await getDoc(doc(db, "loaners", id));
// // // //             if (snap.exists()) setLoaner({ id: snap.id, ...snap.data() });
// // // //         };
// // // //         fetchLoaner();
// // // //     }, [id]);

// // // //     const handleAddLoan = async () => {
// // // //         if (!amount) return alert("Enter amount");
// // // //         const newAmount = Number(loaner.amount) + Number(amount);

// // // //         await updateDoc(doc(db, "loaners", id), { amount: newAmount, lastDate: newDeadline || loaner.lastDate });
// // // //         await addDoc(collection(db, "loaners", id, "history"), { type: "add", amount: Number(amount), createdAt: serverTimestamp() });
// // // //         navigate("/list");
// // // //     };

// // // //     return (
// // // //         <div className="text-center">
// // // //             <div className="flex gap-[85px] py-[24px] items-center px-[20px] bg-[#FFFFFF] border boder-[#E5E7EB]">
// // // //                 <Link to="/list"><ArrowLeft className="cursor-pointer" /></Link>
// // // //                 <h2 className="font-bold text-xl text-center">Qarz Qo'shish</h2>
// // // //             </div>

// // // //             <section className="px-[20px]">
// // // //                 <h3 className="text-[13px] font-bold text-[#64748B] mt-[22px]">
// // // //                     Qarzdor: <span className="text-[#0F172A]">{loaner?.fullName}</span>
// // // //                 </h3>

// // // //                 <h3 className="text-[13px] font-bold text-[#64748B] mt-[17px] text-start">Qarz Miqdori</h3>
// // // //                 <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount"
// // // //                     className="bg-[#fff] px-[20px] py-[24px] border border-[#E5E7EB] rounded-[12px] mt-[12px] w-full text-[24px] font-bold" />

// // // //                 <h3 className="text-[13px] font-bold text-[#64748B] mt-[17px] text-start">New Deadline</h3>
// // // //                 <input type="date" value={newDeadline} onChange={(e) => setNewDeadline(e.target.value)}
// // // //                     className="bg-[#fff] px-[20px] py-[12px] border border-[#E5E7EB] rounded-[12px] mt-[12px] w-full" />
// // // //             </section>

// // // //             <div className="flex gap-[47px] py-[8px] items-end px-[17px] bg-[#ffffff] border border-[#E5E7EB] absolute bottom-0 z-10">
// // // //                 <button onClick={handleAddLoan} className="bg-[#197FE6] text-[#fff] border-none px-[18px] py-[13px] rounded-[12px] text-[16px] font-bold">✓ Qarzni Qo'shish</button>
// // // //                 <button onClick={() => navigate("/list")} className="bg-[#E11D48] text-[#fff] border-none px-[18px] py-[13px] rounded-[12px] text-[16px] font-bold">- Bekor Qilish</button>
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // }

// // // // export default AddLoan;
























// // import React, { useState, useEffect } from "react";
// // import { ArrowLeft } from "lucide-react";
// // import { Link, useNavigate, useParams } from "react-router-dom";
// // import { db } from "../firebase";
// // import { doc, getDoc, updateDoc, addDoc, collection, serverTimestamp } from "firebase/firestore";

// // // Images
// // import money from "../../public/money.png";
// // import card from "../../public/plastic.png";

// // function AddLoan() {
// //     const { id } = useParams();
// //     const navigate = useNavigate();

// //     const [loaner, setLoaner] = useState(null);
// //     const [amount, setAmount] = useState("");
// //     const [date, setDate] = useState("");
// //     const [comment, setComment] = useState("");
// //     const [paymentType, setPaymentType] = useState("cash");

// //     useEffect(() => {
// //         const fetchLoaner = async () => {
// //             const snap = await getDoc(doc(db, "loaners", id));
// //             if (snap.exists()) setLoaner({ id: snap.id, ...snap.data() });
// //         };
// //         fetchLoaner();
// //     }, [id]);

// //     const handleAddLoan = async () => {
// //         if (!amount) return alert("Please enter amount");

// //         const newAmount = Number(loaner.amount) + Number(amount);

// //         await updateDoc(doc(db, "loaners", id), {
// //             amount: newAmount,
// //             lastDate: date || loaner.lastDate,
// //         });

// //         await addDoc(collection(db, "loaners", id, "history"), {
// //             type: "add",
// //             amount: Number(amount),
// //             createdAt: date ? new Date(date) : serverTimestamp(),
// //             comment: comment || "",
// //             paymentType,
// //         });

// //         navigate("/list");
// //     };

// //     return (
// //         <div className="text-center">
// //             <div className="flex gap-[85px] py-[24px] items-center px-[20px] bg-[#FFFFFF] border boder-[#E5E7EB]">
// //                 <Link to="/list"><ArrowLeft className="cursor-pointer" /></Link>
// //                 <h2 className="font-bold text-xl text-center">Qarz Qo'shish</h2>
// //             </div>

// //             <section className="px-[20px]">
// //                 <h3 className="text-[13px] font-bold text-[#64748B] mt-[22px]">
// //                     Qarzdor: <span className="text-[#0F172A]">{loaner?.fullName}</span>
// //                 </h3>

// //                 <h2 className="text-[22px] font-bold mt-[5px] mb-[20px] text-[#0F172A]">
// //                     Qarz summasi: {loaner?.amount?.toLocaleString()} so’m
// //                 </h2>

// //                 <nav className="mt-[12px]">
// //                     <ul className="bg-[#E5E7EB] px-[15px] py-[4px] flex justify-between rounded-[10px]">
// //                         <li><a href="#!" className="font-bold text-[13px] text-[#197FE6] bg-[#FFFFFF] py-[5px] px-[30px] rounded-[10px]">+ Qarz Qo’shish</a></li>
// //                         <li><a href="#!" className="font-normal text-[13px] text-[#6B7280] mr-[40px]">− Qarz Ayirish</a></li>
// //                     </ul>
// //                 </nav>

// //                 <h3 className="text-[13px] font-bold text-[#64748B] mt-[17px] text-start">Qarz Miqdori</h3>
// //                 <div className="bg-[#fff] px-[20px] py-[24px] border border-[#E5E7EB] rounded-[12px] mt-[12px]">
// //                     <input
// //                         type="number"
// //                         value={amount}
// //                         onChange={(e) => setAmount(e.target.value)}
// //                         placeholder="Enter amount"
// //                         className="w-full text-[36px] font-bold text-[#0F172A] bg-transparent outline-none"
// //                     />
// //                 </div>

// //                 <h4 className="text-[#94A3B8] text-[13px] font-normal mt-[7px] text-end">
// //                     Qolgan qarz summasi: {loaner ? (loaner.amount + Number(amount || 0)).toLocaleString() : 0} so’m
// //                 </h4>

// //                 <h3 className="text-[13px] font-bold text-[#64748B] mt-[17px] text-start">To’lov turi</h3>
// //                 <div className="flex justify-between">
// //                     <div
// //                         onClick={() => setPaymentType("cash")}
// //                         className={`bg-[#fff] px-[20px] py-[24px] border rounded-[12px] mt-[12px] w-[165px] flex flex-col items-center ${paymentType === "cash" ? "border-[#197FE6]" : "border-[#E5E7EB]"}`}
// //                     >
// //                         <img src={money} alt="" />
// //                         <p className="text-[14px] font-bold mt-[16px]">Naxt Pul</p>
// //                     </div>
// //                     <div
// //                         onClick={() => setPaymentType("transfer")}
// //                         className={`bg-[#fff] px-[4px] py-[24px] border rounded-[12px] mt-[12px] w-[165px] flex flex-col items-center ${paymentType === "transfer" ? "border-[#197FE6]" : "border-[#E5E7EB]"}`}
// //                     >
// //                         <img src={card} alt="" />
// //                         <p className="text-[14px] font-bold mt-[16px]">Plastik karta/O’tkazma</p>
// //                     </div>
// //                 </div>

// //                 <h3 className="text-[13px] font-bold text-[#64748B] mt-[17px] text-start">Sana</h3>
// //                 <input
// //                     type="date"
// //                     value={date}
// //                     onChange={(e) => setDate(e.target.value)}
// //                     className="px-[20px] py-[12px] w-[350px] mt-[12px] rounded-[12px] border border-[#E5E7EB]"
// //                 />

// //                 <h3 className="text-[13px] font-bold text-[#64748B] mt-[17px] text-start">Comment (ixtiyoriy)</h3>
// //                 <textarea
// //                     value={comment}
// //                     onChange={(e) => setComment(e.target.value)}
// //                     placeholder="Izoh yozish uchun...."
// //                     className="px-[20px] py-[24px] w-[350px] mt-[12px] rounded-[12px] border border-[#E5E7EB] outline-none"
// //                 />
// //             </section>

// //             <div className="flex gap-[47px] py-[8px] items-end px-[17px] bg-[#ffffff] border border-[#E5E7EB] absolute bottom-0 z-10">
// //                 <button
// //                     onClick={handleAddLoan}
// //                     className="bg-[#197FE6] text-[#fff] border-none px-[18px] py-[13px] rounded-[12px] text-[16px] font-bold"
// //                 >
// //                     ✓ Qarzni Qo'shish
// //                 </button>
// //                 <button
// //                     onClick={() => navigate("/list")}
// //                     className="bg-[#E11D48] text-[#fff] border-none px-[18px] py-[13px] rounded-[12px] text-[16px] font-bold"
// //                 >
// //                     - Bekor Qilish
// //                 </button>
// //             </div>
// //         </div>
// //     );
// // }

// // export default AddLoan;



















// import React, { useState, useEffect } from "react";
// import { ArrowLeft } from "lucide-react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { db } from "../firebase";
// import { doc, getDoc, updateDoc, addDoc, collection, serverTimestamp } from "firebase/firestore";

// function AddLoan() {
//     const { id } = useParams();
//     const navigate = useNavigate();

//     const [loaner, setLoaner] = useState(null);
//     const [amount, setAmount] = useState("");
//     const [date, setDate] = useState("");
//     const [comment, setComment] = useState("");

//     useEffect(() => {
//         const fetchLoaner = async () => {
//             const snap = await getDoc(doc(db, "loaners", id));
//             if (snap.exists()) setLoaner({ id: snap.id, ...snap.data() });
//         };
//         fetchLoaner();
//     }, [id]);

//     const handleAddLoan = async () => {
//         if (!amount) return alert("Please enter amount");

//         const newAmount = Number(loaner.amount) + Number(amount);

//         await updateDoc(doc(db, "loaners", id), {
//             amount: newAmount,
//             lastDate: date || loaner.lastDate,
//         });

//         await addDoc(collection(db, "loaners", id, "history"), {
//             type: "add",
//             amount: Number(amount),
//             createdAt: date ? new Date(date) : serverTimestamp(),
//             comment: comment || "",
//         });

//         navigate("/list");
//     };

//     return (
//         <div className="text-center">
//             {/* Header */}
//             <div className="flex gap-[85px] py-[24px] items-center px-[20px] bg-[#FFFFFF] border boder-[#E5E7EB]">
//                 <Link to="/list"><ArrowLeft className="cursor-pointer" /></Link>
//                 <h2 className="font-bold text-xl text-center">Qarz Qo'shish</h2>
//             </div>

//             <section className="px-[20px]">
//                 <h3 className="text-[13px] font-bold text-[#64748B] mt-[22px]">
//                     Qarzdor: <span className="text-[#0F172A]">{loaner?.fullName}</span>
//                 </h3>

//                 <h2 className="text-[22px] font-bold mt-[5px] mb-[20px] text-[#0F172A]">
//                     Qarz summasi: {loaner?.amount?.toLocaleString()} so’m
//                 </h2>

//                 {/* Switch + / - */}
//                 <nav className="mt-[12px]">
//                     <ul className="bg-[#E5E7EB] px-[15px] py-[4px] flex justify-between rounded-[10px]">
//                         <li
//                             className="cursor-pointer font-bold text-[13px] text-[#197FE6] bg-[#FFFFFF] py-[5px] px-[30px] rounded-[10px]"
//                         >
//                             + Qarz Qo’shish
//                         </li>
//                         <li
//                             onClick={() => navigate(`/reducLoan/${id}`)}
//                             className="cursor-pointer font-bold text-[13px] text-[#6B7280] py-[5px] px-[30px] rounded-[10px]"
//                         >
//                             − Qarz Ayirish
//                         </li>
//                     </ul>
//                 </nav>

//                 {/* Amount Input */}
//                 <h3 className="text-[13px] font-bold text-[#64748B] mt-[17px] text-start">Qarz Miqdori</h3>
//                 <div className="bg-[#fff] px-[20px] py-[24px] border border-[#E5E7EB] rounded-[12px] mt-[12px]">
//                     <input
//                         type="number"
//                         value={amount}
//                         onChange={(e) => setAmount(e.target.value)}
//                         placeholder="Enter amount"
//                         className="w-full text-[36px] font-bold text-[#0F172A] bg-transparent outline-none"
//                     />
//                 </div>

//                 <h4 className="text-[#94A3B8] text-[13px] font-normal mt-[7px] text-end">
//                     Qolgan qarz summasi: {loaner ? (loaner.amount + Number(amount || 0)).toLocaleString() : 0} so’m
//                 </h4>

//                 {/* Date */}
//                 <h3 className="text-[13px] font-bold text-[#64748B] mt-[17px] text-start">Sana</h3>
//                 <input
//                     type="date"
//                     value={date}
//                     onChange={(e) => setDate(e.target.value)}
//                     className="px-[20px] py-[12px] w-[350px] mt-[12px] rounded-[12px] border border-[#E5E7EB]"
//                 />

//                 {/* Comment */}
//                 <h3 className="text-[13px] font-bold text-[#64748B] mt-[17px] text-start">Comment (ixtiyoriy)</h3>
//                 <textarea
//                     value={comment}
//                     onChange={(e) => setComment(e.target.value)}
//                     placeholder="Izoh yozish uchun...."
//                     className="px-[20px] py-[24px] w-[350px] mt-[12px] rounded-[12px] border border-[#E5E7EB] outline-none"
//                 />
//             </section>

//             {/* Footer */}
//             <div className="flex gap-[47px] py-[8px] items-end px-[17px] bg-[#ffffff] border border-[#E5E7EB] absolute bottom-0 z-10">
//                 <button
//                     onClick={handleAddLoan}
//                     className="bg-[#197FE6] text-[#fff] border-none px-[18px] py-[13px] rounded-[12px] text-[16px] font-bold"
//                 >
//                     ✓ Qarzni Qo'shish
//                 </button>
//                 <button
//                     onClick={() => navigate("/list")}
//                     className="bg-[#E11D48] text-[#fff] border-none px-[18px] py-[13px] rounded-[12px] text-[16px] font-bold"
//                 >
//                     - Bekor Qilish
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default AddLoan;



















// src/Pages/Addloan.jsx

import React, { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc, updateDoc, addDoc, collection, serverTimestamp } from "firebase/firestore";

function AddLoan() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [loaner, setLoaner] = useState(null);
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [comment, setComment] = useState("");

    useEffect(() => {
        const fetchLoaner = async () => {
            const snap = await getDoc(doc(db, "loaners", id));
            if (snap.exists()) setLoaner({ id: snap.id, ...snap.data() });
        };
        fetchLoaner();

        // Set default date to today
        const today = new Date().toISOString().split("T")[0];
        setDate(today);
    }, [id]);

    // Format number with spaces
    const formatNumberWithSpaces = (num) => {
        if (!num) return "";
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };

    const handleAmountChange = (e) => {
        // Remove all non-digit characters
        const digits = e.target.value.replace(/\D/g, "");
        setAmount(digits);
        e.target.value = formatNumberWithSpaces(digits);
    };

    const handleAddLoan = async () => {
        if (!amount) return alert("Please enter amount");

        const newAmount = Number(loaner.amount) + Number(amount);

        await updateDoc(doc(db, "loaners", id), {
            amount: newAmount,
            lastDate: date || loaner.lastDate,
        });

        await addDoc(collection(db, "loaners", id, "history"), {
            type: "add",
            amount: Number(amount),
            createdAt: date ? new Date(date) : serverTimestamp(),
            comment: comment || "",
        });

        navigate("/list");
    };

    return (
        <div className="text-center">
            {/* Header */}
            <div className="flex gap-[85px] py-[24px] items-center px-[20px] bg-[#FFFFFF] border boder-[#E5E7EB]">
                <Link to="/list"><ArrowLeft className="cursor-pointer" /></Link>
                <h2 className="font-bold text-xl text-center">Qarz Qo'shish</h2>
            </div>

            <section className="px-[20px]">
                <h3 className="text-[13px] font-bold text-[#64748B] mt-[22px]">
                    Qarzdor: <span className="text-[#0F172A]">{loaner?.fullName}</span>
                </h3>

                <h2 className="text-[22px] font-bold mt-[5px] mb-[20px] text-[#0F172A]">
                    Qarz summasi: {loaner?.amount?.toLocaleString()} so’m
                </h2>

                {/* Switch + / - */}
                <nav className="mt-[12px]">
                    <ul className="bg-[#E5E7EB] px-[15px] py-[4px] flex justify-between rounded-[10px]">
                        <li
                            className="cursor-pointer font-bold text-[13px] text-[#197FE6] bg-[#FFFFFF] py-[5px] px-[30px] rounded-[10px]"
                        >
                            + Qarz Qo’shish
                        </li>
                        <li
                            onClick={() => navigate(`/reducLoan/${id}`)}
                            className="cursor-pointer font-bold text-[13px] text-[#6B7280] py-[5px] px-[30px] rounded-[10px]"
                        >
                            − Qarz Ayirish
                        </li>
                    </ul>
                </nav>

                {/* Amount Input */}
                <h3 className="text-[13px] font-bold text-[#64748B] mt-[17px] text-start">Qarz Miqdori</h3>
                <div className="bg-[#fff] px-[20px] py-[24px] border border-[#E5E7EB] rounded-[12px] mt-[12px]">
                    <input
                        type="text"
                        value={formatNumberWithSpaces(amount)}
                        onChange={handleAmountChange}
                        placeholder="Enter amount"
                        className="w-full text-[36px] font-bold text-[#0F172A] bg-transparent outline-none"
                    />
                </div>

                <h4 className="text-[#94A3B8] text-[13px] font-normal mt-[7px] text-end">
                    Qolgan qarz summasi: {loaner ? formatNumberWithSpaces(loaner.amount + Number(amount || 0)) : 0} so’m
                </h4>

                {/* Date */}
                <h3 className="text-[13px] font-bold text-[#64748B] mt-[17px] text-start">Sana</h3>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="px-[20px] py-[12px] w-[350px] mt-[12px] rounded-[12px] border border-[#E5E7EB]"
                />

                {/* Comment */}
                <h3 className="text-[13px] font-bold text-[#64748B] mt-[17px] text-start">Comment (ixtiyoriy)</h3>
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Izoh yozish uchun...."
                    className="px-[20px] py-[24px] w-[350px] mt-[12px] rounded-[12px] border border-[#E5E7EB] outline-none"
                />
            </section>

            {/* Footer */}
            <div className="flex gap-[47px] py-[8px] items-end px-[17px] bg-[#ffffff] border border-[#E5E7EB] absolute bottom-0 z-10">
                <button
                    onClick={handleAddLoan}
                    className="bg-[#197FE6] text-[#fff] border-none px-[18px] py-[13px] rounded-[12px] text-[16px] font-bold"
                >
                    ✓ Qarzni Qo'shish
                </button>
                <button
                    onClick={() => navigate("/list")}
                    className="bg-[#E11D48] text-[#fff] border-none px-[18px] py-[13px] rounded-[12px] text-[16px] font-bold"
                >
                    - Bekor Qilish
                </button>
            </div>
        </div>
    );
}

export default AddLoan;