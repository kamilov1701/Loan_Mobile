// import React from "react";
// // Images{
// import pro from "../../public/profile.png"
// // }

// function Profile() {
//     return <div>


//         <div>
//             <div className="p-[27px] bg-[#FFFFFF] border boder-[#E5E7EB]">
//                 <h2 className="font-bold text-xl">Profil</h2>
//             </div>
//         </div>

//         <section className="px-[22px]">
//             <div>

//                 <div className="text-center flex flex-col items-center">
//                     <img src={pro} alt="" />

//                     <h2 className="font-bold text-[22px] text-[#111111] mt-[5px]">Azizbek Kamilov</h2>
//                     <h3 className="font-normal text-[13px] text-[#6B7280] mb-[8px]">IT PARK Market </h3>

//                     <button className="text-[#197FE6] text-[14px] font-bold bg-[#E6F0FB] rounded-full px-[15px] py-[9px]">Profilni Tahrirlash</button>
//                 </div>

//                 <div className="flex justify-between mt-[11px]">
//                     <div className="bg-[#F3F4F6] rounded-[12px] px-[14px] py-[6px] w-[165px] border-[#E5E7EB] border">
//                         <p className="text-[#6B7280] text-[12px] font-normal">Qarzni  To’liq To’laganlar</p>

//                         <span className="flex gap-[20px] mt-[13px]">
//                             <h3 className="text-[18px] font-extrabold text-[#111111]">Soni:</h3>
//                             <h4 className="text-[#197FE6] text-[18px] font-bold">42</h4>
//                         </span>

//                     </div>
//                     <div className="bg-[#F3F4F6] rounded-[12px] px-[14px] py-[6px] w-[165px] border-[#E5E7EB] border">
//                         <p className="text-[#6B7280] text-[12px] font-normal">Hozirda Aktiv Qarzdorlar</p>

//                         <span className="flex gap-[20px] mt-[13px]">
//                             <h3 className="text-[18px] font-extrabold text-[#111111]">Soni:</h3>
//                             <h4 className="text-[#F97316] text-[18px] font-bold">8</h4>
//                         </span>

//                     </div>


//                 </div>

//                 <div className="mt-[54px]">
//                     <h1 className="text-[#111111] text-[18px] font-bold">To’liq Qarzni To’laganlar</h1>

//                     <div>
//                         <div className="flex justify-between bg-[#FFFFFF] border border-[#E5E7EB] px-[15px] py-[15px] rounded-[10px] mt-[10px]">
//                             <div className="flex gap-[15px]">

//                                 <div className="w-[40px] h-[40px] bg-[#E5E7EB] rounded-full"></div>

//                                 <div>
//                                     <h2 className="text-[14px] font-bold text-[#111111]">Sobirjon Otajanov</h2>
//                                     <h3 className="text-[11px] font-normal text-[#6B7280]">25 Noyabr, 2025 yil</h3>
//                                 </div>
//                             </div>
//                             <div className="text-end">
//                                 <h2 className="text-[14px] font-bold text-[#059669]">+150.000 so’m</h2>
//                                 <p className="text-[#10B981] text-[11px] font-normal">To’langan ✓</p>
//                             </div>
//                         </div>
//                         <div className="flex justify-between bg-[#FFFFFF] border border-[#E5E7EB] px-[15px] py-[15px] rounded-[10px] mt-[10px]">
//                             <div className="flex gap-[15px]">

//                                 <div className="w-[40px] h-[40px] bg-[#E5E7EB] rounded-full"></div>

//                                 <div>
//                                     <h2 className="text-[14px] font-bold text-[#111111]">G’iyosbek Ganibekov</h2>
//                                     <h3 className="text-[11px] font-normal text-[#6B7280]">21 Noyabr, 2023 yil</h3>
//                                 </div>
//                             </div>
//                             <div className="text-end">
//                                 <h2 className="text-[14px] font-bold text-[#059669]">+250.000 so’m</h2>
//                                 <p className="text-[#10B981] text-[11px] font-normal">To’langan ✓</p>
//                             </div>
//                         </div>
//                         <div className="flex justify-between bg-[#FFFFFF] border border-[#E5E7EB] px-[15px] py-[15px] rounded-[10px] mt-[10px]">
//                             <div className="flex gap-[15px]">

//                                 <div className="w-[40px] h-[40px] bg-[#E5E7EB] rounded-full"></div>

//                                 <div>
//                                     <h2 className="text-[14px] font-bold text-[#111111]">Botir Jalolov</h2>
//                                     <h3 className="text-[11px] font-normal text-[#6B7280]">15 Dekabr, 2024 yil</h3>
//                                 </div>
//                             </div>
//                             <div className="text-end">
//                                 <h2 className="text-[14px] font-bold text-[#059669]">+50.000 so’m</h2>
//                                 <p className="text-[#10B981] text-[11px] font-normal">To’langan ✓</p>
//                             </div>
//                         </div>
//                         <div className="flex justify-between bg-[#FFFFFF] border border-[#E5E7EB] px-[15px] py-[15px] rounded-[10px] mt-[10px]">
//                             <div className="flex gap-[15px]">

//                                 <div className="w-[40px] h-[40px] bg-[#E5E7EB] rounded-full"></div>

//                                 <div>
//                                     <h2 className="text-[14px] font-bold text-[#111111]">Sobirjon Kamilov</h2>
//                                     <h3 className="text-[11px] font-normal text-[#6B7280]">20 Dekabr, 2024 yil</h3>
//                                 </div>
//                             </div>
//                             <div className="text-end">
//                                 <h2 className="text-[14px] font-bold text-[#059669]">+500.000 so’m</h2>
//                                 <p className="text-[#10B981] text-[11px] font-normal">To’langan ✓</p>
//                             </div>
//                         </div>
//                         <div className="flex justify-between bg-[#FFFFFF] border border-[#E5E7EB] px-[15px] py-[15px] rounded-[10px] mt-[10px]">
//                             <div className="flex gap-[15px]">

//                                 <div className="w-[40px] h-[40px] bg-[#E5E7EB] rounded-full"></div>

//                                 <div>
//                                     <h2 className="text-[14px] font-bold text-[#111111]">Azizbek Otajanov</h2>
//                                     <h3 className="text-[11px] font-normal text-[#6B7280]">17 Sentabr, 2024 yil</h3>
//                                 </div>
//                             </div>
//                             <div className="text-end">
//                                 <h2 className="text-[14px] font-bold text-[#059669]">+150.000 so’m</h2>
//                                 <p className="text-[#10B981] text-[11px] font-normal">To’langan ✓</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </section>

//     </div>;
// }

// export default Profile;

















































// // import React from "react";
// // import pro from "../../public/profile.png";

// // import { signOut } from "firebase/auth";
// // import { auth } from "../firebase";
// // import { useNavigate } from "react-router-dom";

// // function Profile() {

// //     const navigate = useNavigate();

// //     const handleLogout = async () => {
// //         await signOut(auth);
// //         navigate("/Login");
// //     };

// //     return <div>

// //         <div>
// //             <div className="p-[27px] bg-[#FFFFFF] border boder-[#E5E7EB]">
// //                 <h2 className="font-bold text-xl">Profil</h2>
// //             </div>
// //         </div>

// //         <section className="px-[22px]">
// //             <div>

// //                 <div className="text-center flex flex-col items-center">
// //                     <img src={pro} alt="" />

// //                     <h2 className="font-bold text-[22px] text-[#111111] mt-[5px]">
// //                         Azizbek Kamilov
// //                     </h2>
// //                     <h3 className="font-normal text-[13px] text-[#6B7280] mb-[8px]">
// //                         IT PARK Market
// //                     </h3>

// //                     <button
// //                         onClick={handleLogout}
// //                         className="text-[#197FE6] text-[14px] font-bold bg-[#E6F0FB] rounded-full px-[15px] py-[9px]"
// //                     >
// //                         Profildan Chiqish
// //                     </button>
// //                 </div>

// //             </div>
// //         </section>

// //     </div>;
// // }


// // export default Profile;



































import React, { useEffect, useState } from "react";
// Images
import pro from "../../public/profile.png";

import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Profile() {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut(auth);
        navigate("/Login");
    };

    useEffect(() => {
        const fetchUserData = async () => {
            if (auth.currentUser) {
                const docRef = doc(db, "users", auth.currentUser.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setUserData(docSnap.data());
                }
            } else {
                navigate("/Login");
            }
        };

        fetchUserData();
    }, [navigate]);

    if (!userData) return null; // or a loader if you want

    return (
        <div>
            <div>
                <div className="p-[27px] bg-[#FFFFFF] border boder-[#E5E7EB]">
                    <h2 className="font-bold text-xl">Profil</h2>
                </div>
            </div>

            <section className="px-[22px]">
                <div>
                    <div className="text-center flex flex-col items-center">
                        <img src={pro} alt="" />

                        <h2 className="font-bold text-[22px] text-[#111111] mt-[5px]">
                            {userData.fullName}
                        </h2>
                        <h3 className="font-normal text-[13px] text-[#6B7280] mb-[8px]">
                            {userData.organization}
                        </h3>

                        <p className="text-[13px] text-[#6B7280] mb-[8px]">
                            Telefon: {userData.phone}
                        </p>

                        <button
                            onClick={handleLogout}
                            className="text-[#197FE6] text-[14px] font-bold bg-[#E6F0FB] rounded-full px-[15px] py-[9px]"
                        >
                            Profildan Chiqish
                        </button>
                    </div>

                    {/* Rest of your profile stats and transaction history */}
                    <div className="flex justify-between mt-[11px]">
                        <div className="bg-[#F3F4F6] rounded-[12px] px-[14px] py-[6px] w-[165px] border-[#E5E7EB] border">
                            <p className="text-[#6B7280] text-[12px] font-normal">Qarzni  To’liq To’laganlar</p>
                            <span className="flex gap-[20px] mt-[13px]">
                                <h3 className="text-[18px] font-extrabold text-[#111111]">Soni:</h3>
                                <h4 className="text-[#197FE6] text-[18px] font-bold">42</h4>
                            </span>
                        </div>
                        <div className="bg-[#F3F4F6] rounded-[12px] px-[14px] py-[6px] w-[165px] border-[#E5E7EB] border">
                            <p className="text-[#6B7280] text-[12px] font-normal">Hozirda Aktiv Qarzdorlar</p>
                            <span className="flex gap-[20px] mt-[13px]">
                                <h3 className="text-[18px] font-extrabold text-[#111111]">Soni:</h3>
                                <h4 className="text-[#F97316] text-[18px] font-bold">8</h4>
                            </span>
                        </div>
                    </div>

                    {/* Transaction history */}
                    <div className="mt-[54px]">
                        <h1 className="text-[#111111] text-[18px] font-bold">To’liq Qarzni To’laganlar</h1>
                        {/* Keep all your existing transactions divs as-is, unchanged */}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Profile;