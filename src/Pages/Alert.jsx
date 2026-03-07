// // import React from "react";
// // import { ArrowLeft } from "lucide-react";
// // import { Link } from "react-router-dom";


// // import { BsFillChatRightTextFill } from "react-icons/bs";
// // import { FaPhoneVolume } from "react-icons/fa6";

// // function Alert() {
// //     return <div>
// //         {/* shu jayda // flex gap-[110px] //  bolishi garak*/}
// //         <div className="py-[24px] items-center px-[20px] bg-[#FFFFFF] border boder-[#E5E7EB]">
// //             {/* <div className="flex gap-[85px] py-[24px] items-center px-[20px] bg-[#FFFFFF] border boder-[#E5E7EB]">
// //                  <Link to="/"><ArrowLeft className="cursor-pointer" /></Link>
// //                 <h2 className="font-bold text-xl text-center">Qarz Ayirish</h2>
// //             </div> */}
// //             <h2 className="font-bold text-xl text-center">Ogohlantirish</h2>
// //         </div>

// //         <section className="px-[20px]">
// //             <nav className="mt-[12px]">
// //                 <ul className="bg-[#E5E7EB] px-[2px] py-[4px] flex justify-between rounded-[10px]">
// //                     <li><a href="#!" className="font-bold text-[13px] text-[#197FE6] bg-[#FFFFFF] py-[5px] px-[30px] rounded-[10px]">Yaqinlashayotgan</a></li>
// //                     <li><a href="#!" className="font-normal text-[13px] text-[#6B7280] mr-[40px]">Muddati O’tgan</a></li>
// //                 </ul>
// //             </nav>

// //             <div className="flex mt-[14px] justify-between">
// //                 <h2 className="font-bold text-[15px] text-[#111111]">To’lov kuniga 7 kun qolganlar</h2>
// //                 <span className="text-[11px] font-normal text-[#C2410C] bg-[#FED7AA] px-[6px] py-[8px] rounded-[12px]">3ta ogohlantirish</span>
// //             </div>

// //             <div>
// //                 <div className="bg-[#ffffff] border-[#E5E7EB] border px-[9px] py-[8px] rounded-[12px] mt-[14px]">
// //                     <div className="flex justify-between items-center">
// //                         <div className="flex gap-[9px] items-center">
// //                             <div>
// //                                 <span className="bg-[#E5E7EB] text-[12px] font-bold text-[#555555] px-[8px] py-[9px] rounded-full">SK</span>
// //                             </div>

// //                             <div>
// //                                 <h2 className="text-[#000000] text-[14px] font-bold">Sarvar Komiljonov</h2>
// //                                 <p className="text-[#64748B] text-[11px] font-normal">Songi to’lash kerak</p>
// //                             </div>
// //                         </div>

// //                         <div>
// //                             <h2 className="text-[#111111] text-[16px] font-bold ml-[15px] mb-[15px">120.000 so’m</h2>
// //                             <h3 className="text-[#EA580C] text-[11px] font-bold">To'lov sanasi: 6kun</h3>
// //                         </div>
// //                     </div>

// //                     <div className="flex justify-between mt-[20px]">
// //                         <button className="text-[#374151] bg-[#F3F4F6] text-[12px] font-normal p-[10px] rounded-[12px]">To’lov Sanasini o’zgartirish</button>

// //                         <div className="flex gap-[10px]">
// //                             <FaPhoneVolume size={24} className="text-[red]"/>
// //                             <BsFillChatRightTextFill  size={24} className="text-[#169c74]"/>
// //                         </div>
// //                     </div>
// //                 </div>
// //                 <div className="bg-[#ffffff] border-[#E5E7EB] border px-[9px] py-[8px] rounded-[12px] mt-[14px]">
// //                     <div className="flex justify-between items-center">
// //                         <div className="flex gap-[9px] items-center">
// //                             <div>
// //                                 <span className="bg-[#E5E7EB] text-[12px] font-bold text-[#555555] px-[8px] py-[9px] rounded-full">SO</span>
// //                             </div>

// //                             <div>
// //                                 <h2 className="text-[#000000] text-[14px] font-bold">Sardor Komiljonov</h2>
// //                                 <p className="text-[#64748B] text-[11px] font-normal">Songi  to’lov</p>
// //                             </div>
// //                         </div>

// //                         <div>
// //                             <h2 className="text-[#111111] text-[16px] font-bold ml-[15px] mb-[15px">50.000 so’m</h2>
// //                             <h3 className="text-[#EA580C] text-[11px] font-bold">To'lov sanasi: Ertaga</h3>
// //                         </div>
// //                     </div>

// //                     <div className="flex justify-between mt-[20px]">
// //                         <button className="text-[#374151] bg-[#F3F4F6] text-[12px] font-normal p-[10px] rounded-[12px]">To’lov Sanasini o’zgartirish</button>

// //                         <div className="flex gap-[10px]">
// //                             <FaPhoneVolume size={24} className="text-[red]"/>
// //                             <BsFillChatRightTextFill size={24} className="text-[#169c74]"/>
// //                         </div>
// //                     </div>
// //                 </div>
// //                 <div className="bg-[#ffffff] border-[#E5E7EB] border px-[9px] py-[8px] rounded-[12px] mt-[14px]">
// //                     <div className="flex justify-between items-center">
// //                         <div className="flex gap-[9px] items-center">
// //                             <div>
// //                                 <span className="bg-[#E5E7EB] text-[12px] font-bold text-[#555555] px-[8px] py-[9px] rounded-full">SO</span>
// //                             </div>

// //                             <div>
// //                                 <h2 className="text-[#000000] text-[14px] font-bold">Sobirjon Otajanov</h2>
// //                                 <p className="text-[#64748B] text-[11px] font-normal">Songi  to’lov</p>
// //                             </div>
// //                         </div>

// //                         <div>
// //                             <h2 className="text-[#111111] text-[16px] font-bold ml-[15px] mb-[15px">50.000 so’m</h2>
// //                             <h3 className="text-[#EA580C] text-[11px] font-bold">To'lov sanasi: 10kun</h3>
// //                         </div>
// //                     </div>

// //                     <div className="flex justify-between mt-[20px]">
// //                         <button className="text-[#374151] bg-[#F3F4F6] text-[12px] font-normal p-[10px] rounded-[12px]">To’lov Sanasini o’zgartirish</button>

// //                         <div className="flex gap-[10px]">
// //                             <FaPhoneVolume size={24} className="text-[red]"/>
// //                             <BsFillChatRightTextFill size={24} className="text-[#169c74]"/>
// //                         </div>
// //                     </div>
// //                 </div>
// //                 <div className="bg-[#ffffff] border-[#E5E7EB] border px-[9px] py-[8px] rounded-[12px] mt-[14px]">
// //                     <div className="flex justify-between items-center">
// //                         <div className="flex gap-[9px] items-center">
// //                             <div>
// //                                 <span className="bg-[#E5E7EB] text-[12px] font-bold text-[#555555] px-[8px] py-[9px] rounded-full">SO</span>
// //                             </div>

// //                             <div>
// //                                 <h2 className="text-[#000000] text-[14px] font-bold">Sardor Komiljonov</h2>
// //                                 <p className="text-[#64748B] text-[11px] font-normal">Songi  to’lov</p>
// //                             </div>
// //                         </div>

// //                         <div>
// //                             <h2 className="text-[#111111] text-[16px] font-bold ml-[15px] mb-[15px">50.000 so’m</h2>
// //                             <h3 className="text-[#EA580C] text-[11px] font-bold">To'lov sanasi: Ertaga</h3>
// //                         </div>
// //                     </div>

// //                     <div className="flex justify-between mt-[20px]">
// //                         <button className="text-[#374151] bg-[#F3F4F6] text-[12px] font-normal p-[10px] rounded-[12px]">To’lov Sanasini o’zgartirish</button>

// //                         <div className="flex gap-[10px]">
// //                             <FaPhoneVolume size={24} className="text-[red]" />
// //                             <BsFillChatRightTextFill size={24} className="text-[#169c74]"/>
// //                         </div>
// //                     </div>
// //                 </div>
// //                 <div className="bg-[#ffffff] border-[#E5E7EB] border px-[9px] py-[8px] rounded-[12px] mt-[14px]">
// //                     <div className="flex justify-between items-center">
// //                         <div className="flex gap-[9px] items-center">
// //                             <div>
// //                                 <span className="bg-[#E5E7EB] text-[12px] font-bold text-[#555555] px-[8px] py-[9px] rounded-full">SO</span>
// //                             </div>

// //                             <div>
// //                                 <h2 className="text-[#000000] text-[14px] font-bold">Sardor Komiljonov</h2>
// //                                 <p className="text-[#64748B] text-[11px] font-normal">Songi  to’lov</p>
// //                             </div>
// //                         </div>

// //                         <div>
// //                             <h2 className="text-[#111111] text-[16px] font-bold ml-[15px] mb-[15px">50.000 so’m</h2>
// //                             <h3 className="text-[#EA580C] text-[11px] font-bold">To'lov sanasi: Ertaga</h3>
// //                         </div>
// //                     </div>

// //                     <div className="flex justify-between mt-[20px]">
// //                         <button className="text-[#374151] bg-[#F3F4F6] text-[12px] font-normal p-[10px] rounded-[12px]">To’lov Sanasini o’zgartirish</button>

// //                         <div className="flex gap-[10px]">
// //                             <FaPhoneVolume size={24} className="text-[red]" />
// //                             <BsFillChatRightTextFill size={24} className="text-[#169c74]"/>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </section>
// //     </div>;
// // }

// // export default Alert;



















// import React, { useState } from "react";
// import { ArrowLeft } from "lucide-react";
// import { Link } from "react-router-dom";

// import { BsFillChatRightTextFill } from "react-icons/bs";
// import { FaPhoneVolume } from "react-icons/fa6";

// function Alert() {
//     const [activeTab, setActiveTab] = useState("upcoming");

//     // Sample alerts data with phone and telegram username
//     const [alerts, setAlerts] = useState([
//         { id: 1, name: "Sarvar Komiljonov", initials: "SK", amount: 120000, daysLeft: 6, comment: "Songi to’lash kerak", phone: "+998901234567", telegram: "sarvar123", showDateInput: false, newDate: "" },
//         { id: 2, name: "Sardor Komiljonov", initials: "SO", amount: 50000, daysLeft: 1, comment: "Songi to’lov", phone: "+998901234568", telegram: "sardor123", showDateInput: false, newDate: "" },
//         { id: 3, name: "Sobirjon Otajanov", initials: "SO", amount: 50000, daysLeft: 10, comment: "Songi to’lov", phone: "+998901234569", telegram: "sobir123", showDateInput: false, newDate: "" },
//     ]);

//     const filteredAlerts = alerts.filter(alert =>
//         activeTab === "upcoming" ? alert.daysLeft >= 0 && alert.daysLeft <= 7 : alert.daysLeft < 0
//     );

//     const toggleDateInput = (id) => {
//         setAlerts(alerts.map(a => a.id === id ? { ...a, showDateInput: !a.showDateInput } : a));
//     };

//     const handleDateChange = (id, value) => {
//         setAlerts(alerts.map(a => a.id === id ? { ...a, newDate: value } : a));
//     };

//     const saveNewDate = (id) => {
//         const alertItem = alerts.find(a => a.id === id);
//         if (alertItem.newDate) {
//             alert(`New date for ${alertItem.name} saved: ${alertItem.newDate}`);
//             // Hide input after save
//             setAlerts(alerts.map(a => a.id === id ? { ...a, showDateInput: false } : a));
//         }
//     };

//     const handleCall = (phone) => {
//         window.location.href = `tel:${phone}`;
//     };

//     const handleTelegram = (telegram, name) => {
//         // Opens Telegram bot with prefilled message
//         const message = encodeURIComponent(`Salom ${name}, sizning to'lovingiz haqida ogohlantirish.`);
//         window.open(`https://t.me/${telegram}?text=${message}`, "_blank");
//     };

//     return (
//         <div>
//             {/* Header */}
//             <div className="flex gap-[110px] py-[24px] items-center px-[20px] bg-[#FFFFFF] border boder-[#E5E7EB]">
//                 <Link to="/"><ArrowLeft className="cursor-pointer" /></Link>
//                 <h2 className="font-bold text-xl text-center">Ogohlantirish</h2>
//             </div>

//             <section className="px-[20px]">
//                 {/* Tabs */}
//                 <nav className="mt-[12px]">
//                     <ul className="bg-[#E5E7EB] px-[2px] py-[4px] flex justify-between rounded-[10px]">
//                         <li
//                             onClick={() => setActiveTab("upcoming")}
//                             className={`cursor-pointer font-bold text-[13px] py-[5px] px-[30px] rounded-[10px] ${activeTab === "upcoming" ? "text-[#197FE6] bg-[#FFFFFF]" : "text-[#6B7280]"}`}
//                         >
//                             Yaqinlashayotgan
//                         </li>
//                         <li
//                             onClick={() => setActiveTab("overdue")}
//                             className={`cursor-pointer font-bold text-[13px] py-[5px] px-[30px] rounded-[10px] ${activeTab === "overdue" ? "text-[#197FE6] bg-[#FFFFFF]" : "text-[#6B7280]"}`}
//                         >
//                             Muddati O’tgan
//                         </li>
//                     </ul>
//                 </nav>

//                 <div className="flex mt-[14px] justify-between">
//                     <h2 className="font-bold text-[15px] text-[#111111]">
//                         {activeTab === "upcoming" ? "To’lov kuniga 7 kun qolganlar" : "Muddati o’tgan to’lovlar"}
//                     </h2>
//                     <span className="text-[11px] font-normal text-[#C2410C] bg-[#FED7AA] px-[6px] py-[8px] rounded-[12px]">
//                         {filteredAlerts.length}ta ogohlantirish
//                     </span>
//                 </div>

//                 {/* Alerts List */}
//                 <div>
//                     {filteredAlerts.map(alert => (
//                         <div key={alert.id} className="bg-[#ffffff] border-[#E5E7EB] border px-[9px] py-[8px] rounded-[12px] mt-[14px]">
//                             <div className="flex justify-between items-center">
//                                 <div className="flex gap-[9px] items-center">
//                                     <span className="bg-[#E5E7EB] text-[12px] font-bold text-[#555555] px-[8px] py-[9px] rounded-full">{alert.initials}</span>
//                                     <div>
//                                         <h2 className="text-[#000000] text-[14px] font-bold">{alert.name}</h2>
//                                         <p className="text-[#64748B] text-[11px] font-normal">{alert.comment}</p>
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <h2 className="text-[#111111] text-[16px] font-bold ml-[15px] mb-[15px]">{alert.amount.toLocaleString()} so’m</h2>
//                                     <h3 className="text-[#EA580C] text-[11px] font-bold">To'lov sanasi: {alert.daysLeft}kun</h3>
//                                 </div>
//                             </div>

//                             {/* Date input */}
//                             {alert.showDateInput && (
//                                 <div className="mt-[10px] flex gap-[10px]">
//                                     <input
//                                         type="date"
//                                         className="px-[10px] py-[8px] border border-[#E5E7EB] rounded-[12px]"
//                                         value={alert.newDate}
//                                         onChange={(e) => handleDateChange(alert.id, e.target.value)}
//                                     />
//                                     <button
//                                         className="bg-[#197FE6] text-[#fff] px-[12px] py-[8px] rounded-[12px] text-[12px] font-bold"
//                                         onClick={() => saveNewDate(alert.id)}
//                                     >
//                                         Save
//                                     </button>
//                                 </div>
//                             )}

//                             <div className="flex justify-between mt-[20px]">
//                                 <button
//                                     className="text-[#374151] bg-[#F3F4F6] text-[12px] font-normal p-[10px] rounded-[12px]"
//                                     onClick={() => toggleDateInput(alert.id)}
//                                 >
//                                     To’lov Sanasini o’zgartirish
//                                 </button>

//                                 <div className="flex gap-[10px]">
//                                     <FaPhoneVolume size={24} className="text-[red]" onClick={() => handleCall(alert.phone)} />
//                                     <BsFillChatRightTextFill size={24} className="text-[#169c74]" onClick={() => handleTelegram(alert.telegram, alert.name)} />
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default Alert;
































import React, { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { collection, onSnapshot, updateDoc, doc } from "firebase/firestore";

import { BsFillChatRightTextFill } from "react-icons/bs";
import { FaPhoneVolume } from "react-icons/fa6";

function Alert() {
    const [activeTab, setActiveTab] = useState("upcoming");
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "loaners"), (snapshot) => {
            const data = snapshot.docs.map(docItem => {
                const loaner = docItem.data();
                const today = new Date();
                const lastDate = loaner.lastDate ? new Date(loaner.lastDate.seconds ? loaner.lastDate.seconds * 1000 : loaner.lastDate) : today;
                const diffDays = Math.ceil((lastDate - today) / (1000 * 60 * 60 * 24));

                return {
                    id: docItem.id,
                    fullName: loaner.fullName || "No Name",
                    phones: [loaner.mainPhone, loaner.secondaryPhone].filter(Boolean),
                    amount: loaner.amount || 0,
                    lastDate,
                    daysLeft: diffDays,
                    showDateInput: false,
                    newDate: "",
                    telegram: loaner.telegram || "",
                };
            });
            setAlerts(data);
        });
        return () => unsubscribe();
    }, []);

    const filteredAlerts = alerts.filter(alert =>
        activeTab === "upcoming" ? alert.daysLeft >= 0 && alert.daysLeft <= 3 : alert.daysLeft < 0
    );

    const toggleDateInput = (id) => {
        setAlerts(alerts.map(a => a.id === id ? { ...a, showDateInput: !a.showDateInput } : a));
    };

    const handleDateChange = (id, value) => {
        setAlerts(alerts.map(a => a.id === id ? { ...a, newDate: value } : a));
    };

    const saveNewDate = async (id) => {
        const alertItem = alerts.find(a => a.id === id);
        if (!alertItem.newDate) return;

        // Update in Firestore
        await updateDoc(doc(db, "loaners", id), { lastDate: new Date(alertItem.newDate) });

        // Update local state
        const today = new Date();
        const lastDate = new Date(alertItem.newDate);
        const diffDays = Math.ceil((lastDate - today) / (1000 * 60 * 60 * 24));

        setAlerts(alerts.map(a => a.id === id ? { ...a, lastDate, daysLeft: diffDays, showDateInput: false, newDate: "" } : a));
    };

    const handleCall = (phones) => {
        phones.forEach(phone => window.open(`tel:${phone}`, "_self"));
    };

    const handleTelegram = (phones, name) => {
        if (!phones.length) return alert(`No phone numbers for ${name}`);
        phones.forEach(phone => {
            const message = encodeURIComponent(`Salom ${name}, sizning to'lovingiz haqida ogohlantirish.`);
            window.open(`https://t.me/${phone}?text=${message}`, "_blank");
        });
    };

    return (
        <div>
            <div className="flex gap-[110px] py-[24px] items-center px-[20px] bg-[#FFFFFF] border boder-[#E5E7EB]">
                <Link to="/"><ArrowLeft className="cursor-pointer" /></Link>
                <h2 className="font-bold text-xl text-center">Ogohlantirish</h2>
            </div>

            <section className="px-[20px]">
                <nav className="mt-[12px]">
                    <ul className="bg-[#E5E7EB] px-[2px] py-[4px] flex justify-between rounded-[10px]">
                        <li
                            onClick={() => setActiveTab("upcoming")}
                            className={`cursor-pointer font-bold text-[13px] py-[5px] px-[30px] rounded-[10px] ${activeTab === "upcoming" ? "text-[#197FE6] bg-[#FFFFFF]" : "text-[#6B7280]"}`}
                        >
                            Yaqinlashayotgan
                        </li>
                        <li
                            onClick={() => setActiveTab("overdue")}
                            className={`cursor-pointer font-bold text-[13px] py-[5px] px-[30px] rounded-[10px] ${activeTab === "overdue" ? "text-[#197FE6] bg-[#FFFFFF]" : "text-[#6B7280]"}`}
                        >
                            Muddati O’tgan
                        </li>
                    </ul>
                </nav>

                <div className="flex mt-[14px] justify-between">
                    <h2 className="font-bold text-[15px] text-[#111111]">
                        {activeTab === "upcoming" ? "To’lov kuniga 3 kun qolganlar" : "Muddati o’tgan to’lovlar"}
                    </h2>
                    <span className="text-[11px] font-normal text-[#C2410C] bg-[#FED7AA] px-[6px] py-[8px] rounded-[12px]">
                        {filteredAlerts.length}ta ogohlantirish
                    </span>
                </div>

                <div>
                    {filteredAlerts.map(alert => (
                        <div key={alert.id} className="bg-[#ffffff] border-[#E5E7EB] border px-[9px] py-[8px] rounded-[12px] mt-[14px]">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-[9px] items-center">
                                    <span className="bg-[#E5E7EB] text-[12px] font-bold text-[#555555] px-[8px] py-[9px] rounded-full">
                                        {alert.fullName?.slice(0, 2).toUpperCase()}
                                    </span>
                                    <div>
                                        <h2 className="text-[#000000] text-[14px] font-bold">{alert.fullName}</h2>
                                        <p className="text-[#64748B] text-[11px] font-normal">{alert.phones.join(", ")}</p>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-[#111111] text-[16px] font-bold ml-[15px] mb-[15px]">{Number(alert.amount).toLocaleString()} so’m</h2>
                                    <h3 className="text-[#EA580C] text-[11px] font-bold">To'lov sanasi: {alert.daysLeft}kun</h3>
                                </div>
                            </div>

                            {alert.showDateInput && (
                                <div className="mt-[10px] flex gap-[10px]">
                                    <input
                                        type="date"
                                        className="px-[10px] py-[8px] border border-[#E5E7EB] rounded-[12px]"
                                        value={alert.newDate}
                                        onChange={(e) => handleDateChange(alert.id, e.target.value)}
                                    />
                                    <button
                                        className="bg-[#197FE6] text-[#fff] px-[12px] py-[8px] rounded-[12px] text-[12px] font-bold"
                                        onClick={() => saveNewDate(alert.id)}
                                    >
                                        Save
                                    </button>
                                </div>
                            )}

                            <div className="flex justify-between mt-[20px]">
                                <button
                                    className="text-[#374151] bg-[#F3F4F6] text-[12px] font-normal p-[10px] rounded-[12px]"
                                    onClick={() => toggleDateInput(alert.id)}
                                >
                                    To’lov Sanasini o’zgartirish
                                </button>

                                <div className="flex gap-[10px]">
                                    <FaPhoneVolume size={24} className="text-[red]" onClick={() => handleCall(alert.phones)} />
                                    <BsFillChatRightTextFill size={24} className="text-[#169c74]" onClick={() => handleTelegram(alert.phones, alert.fullName)} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Alert;