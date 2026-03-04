// import React from "react";
// import { ArrowLeft } from "lucide-react";
// import { Link } from "react-router-dom";



// // Images{
// // }

// function History() {
//     return <div className="text-center">
//         <div className="flex gap-[74px] py-[24px] items-center px-[20px] bg-[#FFFFFF] border boder-[#E5E7EB]">
//             <Link to="/List"><ArrowLeft className="cursor-pointer" /></Link>
//             <div>
//                 <h2 className="text-[#111111] text-[16px] font-bold">Qardorning Tarixi</h2>
//                 <h3 className="text-[13px] font-bold text-[#64748B] mt-[4px]">Qarzdor: <span className="text-[#0F172A]">Sobirjon Otajanov</span></h3>
//             </div>
//         </div>


//         <section className="px-[20px]">

//             <div className="container mx-auto px-4">
//                 <div className="bg-[#E5E7EB] w-full max-w-[350px] sm:max-w-[450px] md:max-w-[600px] mx-auto mt-[20px] border border-[#D0DBE7] rounded-[12px] py-[27px] px-[57px] text-center">
//                     <p className="text-[13px] font-normal text-[#6B7280]">Qolgan Qarz Summasi</p>
//                     <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#111111]">1.180.000 so’m</h2>
//                     <p className="text-[11px] font-normal text-[#9CA3AF] mb-[28px]">Songi yangilaish 2 soat oldin</p>
//                 </div>
//             </div>

//             <p className="text-[#6B7280] text-[11px] font-bold text-start mt-[21px] mb-[11px]">Bugun </p>

//             <div className="bg-gray-100 rounded-[12px] p-[10px] flex items-center justify-between border-[#E5E7EB] border">
//                 <div className="flex items-center gap-4">
//                     <span className="bg-[#D1FAE5] text-[#059669] px-[10px] py-[9px] rounded-full w-[36px]"> ↓ </span>
//                     <div>
//                         <h2 className="text-[18px] font-bold text-black">-50.000 so’m</h2>
//                         <p className="text-[#6B7280] text-[12px] font-normal text-start">Qarzda ayirildi</p>
//                     </div>
//                 </div>

//                 <div className="text-[#9CA3AF] text-[11px] font-medium">10:30 AM</div>
//             </div>
//             <div className="bg-gray-100 rounded-[12px] p-[10px] flex items-center justify-between border-[#E5E7EB] border mt-[17px]">
//                 <div className="flex items-center gap-4">
//                     <span className="bg-[#FFE4E6] text-[#E11D48] px-[10px] py-[9px] rounded-full w-[36px]"> ↑ </span>
//                     <div>
//                         <h2 className="text-[18px] font-bold text-black">+430.000 so’m</h2>
//                         <p className="text-[#6B7280] text-[12px] font-normal text-start">Qarz Qo’shildi</p>
//                     </div>
//                 </div>

//                 <div className="text-[#9CA3AF] text-[11px] font-medium">08:30 AM</div>
//             </div>
//             <div className="bg-gray-100 rounded-[12px] p-[10px] flex items-center justify-between border-[#E5E7EB] border mt-[17px]">
//                 <div className="flex items-center gap-4">
//                     <span className="bg-[#D1FAE5] text-[#059669] px-[10px] py-[9px] rounded-full w-[36px]"> ↓ </span>
//                     <div>
//                         <h2 className="text-[18px] font-bold text-black">-30.000 so’m</h2>
//                         <p className="text-[#6B7280] text-[12px] font-normal text-start">Qarzda ayirildi</p>
//                     </div>
//                 </div>

//                 <div className="text-[#9CA3AF] text-[11px] font-medium">07:35 AM</div>
//             </div>
//             <p className="text-[#6B7280] text-[11px] font-bold text-start mt-[21px] mb-[11px]">Kecha</p>

//             <div className="bg-gray-100 rounded-[12px] p-[10px] flex items-center justify-between border-[#E5E7EB] border">
//                 <div className="flex items-center gap-4">
//                     <span className="bg-[#D1FAE5] text-[#059669] px-[10px] py-[9px] rounded-full w-[36px]"> ↓ </span>
//                     <div>
//                         <h2 className="text-[18px] font-bold text-black">-50.000 so’m</h2>
//                         <p className="text-[#6B7280] text-[12px] font-normal text-start">Qarzda ayirildi</p>
//                     </div>
//                 </div>

//                 <div className="text-[#9CA3AF] text-[11px] font-medium">10:30 AM</div>
//             </div>
//             <div className="bg-gray-100 rounded-[12px] p-[10px] flex items-center justify-between border-[#E5E7EB] border mt-[17px]">
//                 <div className="flex items-center gap-4">
//                     <span className="bg-[#FFE4E6] text-[#E11D48] px-[10px] py-[9px] rounded-full w-[36px]"> ↑ </span>
//                     <div>
//                         <h2 className="text-[18px] font-bold text-black">+430.000 so’m</h2>
//                         <p className="text-[#6B7280] text-[12px] font-normal text-start">Qarz Qo’shildi</p>
//                     </div>
//                 </div>

//                 <div className="text-[#9CA3AF] text-[11px] font-medium">08:30 AM</div>
//             </div>


//         </section>

//         <div className="flex gap-[47px] py-[8px] items-end px-[17px] bg-[#ffffff] border border-[#E5E7EB] absolute bottom-0 z-10">
//             <button className="bg-[#197FE6] text-[#fff] border-none px-[18px] py-[13px] rounded-[12px] text-[16px] font-bold">Qarz Qo'shish</button>
//             <button className="bg-[#E11D48] text-[#fff] border-none px-[18px] py-[13px] rounded-[12px] text-[16px] font-bold">Ortga qaytish</button>
//         </div>
//     </div>;
// }

// export default History;































// // // import React, { useEffect, useState } from "react";
// // // import { ArrowLeft } from "lucide-react";
// // // import { Link, useParams } from "react-router-dom";
// // // import { db } from "../firebase";
// // // import { collection, doc, getDoc, onSnapshot, orderBy, query } from "firebase/firestore";

// // // function History() {
// // //     const { id } = useParams();
// // //     const [history, setHistory] = useState([]);
// // //     const [loaner, setLoaner] = useState(null);

// // //     useEffect(() => {
// // //         const fetchLoaner = async () => {
// // //             const snap = await getDoc(doc(db, "loaners", id));
// // //             if (snap.exists()) setLoaner({ id: snap.id, ...snap.data() });
// // //         };

// // //         const q = query(collection(db, "loaners", id, "history"), orderBy("createdAt", "desc"));
// // //         const unsub = onSnapshot(q, snapshot => setHistory(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))));

// // //         fetchLoaner();
// // //         return () => unsub();
// // //     }, [id]);

// // //     return (
// // //         <div className="text-center">
// // //             <div className="flex gap-[74px] py-[24px] items-center px-[20px] bg-[#FFFFFF] border boder-[#E5E7EB]">
// // //                 <Link to="/List"><ArrowLeft className="cursor-pointer" /></Link>
// // //                 <div>
// // //                     <h2 className="text-[#111111] text-[16px] font-bold">Qardorning Tarixi</h2>
// // //                     <h3 className="text-[13px] font-bold text-[#64748B] mt-[4px]">Qarzdor: <span className="text-[#0F172A]">{loaner?.fullName}</span></h3>
// // //                 </div>
// // //             </div>

// // //             <section className="px-[20px]">
// // //                 {history.map(item => (
// // //                     <div key={item.id} className="bg-gray-100 p-[12px] my-[8px] rounded-[12px] flex justify-between">
// // //                         <div>{item.type === "add" ? "+" : "-"} {item.amount} so’m</div>
// // //                         <div>{item.paymentType || ""}</div>
// // //                     </div>
// // //                 ))}
// // //             </section>
// // //         </div>
// // //     );
// // // }

// // // export default History;























// // import React, { useEffect, useState } from "react";
// // import { ArrowLeft } from "lucide-react";
// // import { Link, useParams } from "react-router-dom";
// // import { db } from "../firebase";
// // import { collection, doc, getDoc, onSnapshot, query, orderBy } from "firebase/firestore";

// // function History() {
// //     const { id } = useParams();
// //     const [history, setHistory] = useState([]);
// //     const [loaner, setLoaner] = useState(null);

// //     useEffect(() => {
// //         const fetchLoaner = async () => {
// //             const snap = await getDoc(doc(db, "loaners", id));
// //             if (snap.exists()) setLoaner({ id: snap.id, ...snap.data() });
// //         };

// //         const q = query(collection(db, "loaners", id, "history"), orderBy("createdAt", "desc"));
// //         const unsub = onSnapshot(q, snapshot => setHistory(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))));

// //         fetchLoaner();
// //         return () => unsub();
// //     }, [id]);

// //     return (
// //         <div className="text-center">
// //             <div className="flex gap-[74px] py-[24px] items-center px-[20px] bg-[#FFFFFF] border boder-[#E5E7EB]">
// //                 <Link to="/list"><ArrowLeft className="cursor-pointer" /></Link>
// //                 <div>
// //                     <h2 className="text-[#111111] text-[16px] font-bold">Qardorning Tarixi</h2>
// //                     <h3 className="text-[13px] font-bold text-[#64748B] mt-[4px]">Qarzdor: <span className="text-[#0F172A]">{loaner?.fullName}</span></h3>
// //                 </div>
// //             </div>

// //             <section className="px-[20px]">
// //                 {history.map(item => (
// //                     <div key={item.id} className="bg-gray-100 p-[12px] my-[8px] rounded-[12px] flex justify-between">
// //                         <div>{item.type === "add" ? "+" : "-"} {item.amount} so’m</div>
// //                         <div>{item.paymentType || ""}</div>
// //                     </div>
// //                 ))}
// //             </section>
// //         </div>
// //     );
// // }

// // export default History;


































import React, { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { db } from "../firebase";
import { collection, doc, getDoc, onSnapshot, orderBy, query } from "firebase/firestore";

function History() {
    const { id } = useParams(); // loaner id from URL
    const [loaner, setLoaner] = useState(null);
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const fetchLoaner = async () => {
            const snap = await getDoc(doc(db, "loaners", id));
            if (snap.exists()) setLoaner({ id: snap.id, ...snap.data() });
        };

        const q = query(collection(db, "loaners", id, "history"), orderBy("createdAt", "desc"));
        const unsub = onSnapshot(q, snapshot => {
            const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setHistory(data);
        });

        fetchLoaner();
        return () => unsub();
    }, [id]);

    const formatDate = (timestamp) => {
        if (!timestamp) return "";
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        return date.toLocaleDateString() + " " + date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    };

    return (
        <div className="text-center">
            {/* Header */}
            <div className="flex gap-[74px] py-[24px] items-center px-[20px] bg-[#FFFFFF] border boder-[#E5E7EB]">
                <Link to="/list"><ArrowLeft className="cursor-pointer" /></Link>
                <div>
                    <h2 className="text-[#111111] text-[16px] font-bold">Qardorning Tarixi</h2>
                    <h3 className="text-[13px] font-bold text-[#64748B] mt-[4px]">
                        Qarzdor: <span className="text-[#0F172A]">{loaner?.fullName}</span>
                    </h3>
                </div>
            </div>

            {/* Remaining Debt */}
            <section className="px-[20px]">
                <div className="container mx-auto px-4">
                    <div className="bg-[#E5E7EB] w-full max-w-[350px] sm:max-w-[450px] md:max-w-[600px] mx-auto mt-[20px] border border-[#D0DBE7] rounded-[12px] py-[27px] px-[57px] text-center">
                        <p className="text-[13px] font-normal text-[#6B7280]">Qolgan Qarz Summasi</p>
                        <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#111111]">
                            {loaner?.amount?.toLocaleString()} so’m
                        </h2>
                        <p className="text-[11px] font-normal text-[#9CA3AF] mb-[28px]">
                            Songi yangilaish: {loaner?.lastDate ? new Date(loaner.lastDate.seconds * 1000).toLocaleString() : "—"}
                        </p>
                    </div>
                </div>

                {/* History Items */}
                {history.length > 0 ? history.map((item, index) => (
                    <div key={item.id} className={`bg-gray-100 rounded-[12px] p-[10px] flex items-center justify-between border-[#E5E7EB] border mt-[${index === 0 ? 21 : 17}px]`}>
                        <div className="flex items-center gap-4">
                            <span className={`px-[10px] py-[9px] rounded-full w-[36px] ${item.type === "add" ? "bg-[#FFE4E6] text-[#E11D48]" : "bg-[#D1FAE5] text-[#059669]"}`}>
                                {item.type === "add" ? "↑" : "↓"}
                            </span>
                            <div>
                                <h2 className="text-[18px] font-bold text-black">
                                    {item.type === "add" ? "+" : "-"} {item.amount?.toLocaleString()} so’m
                                </h2>
                                <p className="text-[#6B7280] text-[12px] font-normal text-start">
                                    {item.comment || (item.type === "add" ? "Qarz Qo’shildi" : "Qarzda ayirildi")}
                                </p>
                            </div>
                        </div>
                        <div className="text-[#9CA3AF] text-[11px] font-medium">{formatDate(item.createdAt)}</div>
                    </div>
                )) : (
                    <p className="text-[#6B7280] mt-[20px]">Tarix mavjud emas</p>
                )}
            </section>

            {/* Footer
            <div className="flex gap-[47px] py-[8px] items-end px-[17px] bg-[#ffffff] border border-[#E5E7EB] absolute bottom-0 z-10">
                <Link to={`/addloan/${id}`} className="bg-[#197FE6] text-[#fff] border-none px-[18px] py-[13px] rounded-[12px] text-[16px] font-bold flex-1 text-center">Qarz Qo'shish</Link>
                <Link to="/list" className="bg-[#E11D48] text-[#fff] border-none px-[18px] py-[13px] rounded-[12px] text-[16px] font-bold flex-1 text-center">Ortga qaytish</Link>
            </div> */}
        </div>
    );
}

export default History;