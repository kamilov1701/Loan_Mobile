// import React from "react";
// import { ArrowLeft } from "lucide-react";
// import { Link } from "react-router-dom";
// import camera from "../../public/camera.png";


// // Images{
// // }

// function Camera() {
//     return <div className="text-center">
//         <div className="flex gap-[74px] py-[24px] items-center justify-center px-[20px] bg-[#FFFFFF] border boder-[#E5E7EB]">
//             {/* <Link to="/"><ArrowLeft className="cursor-pointer" /></Link> */}
//             <div>
//                 <h2 className="text-[#111111] text-[16px] font-bold ">Yangi Qarz Yaratish</h2>
//             </div>
//         </div>

//         <section className="px-[20px]">
//             <p className="text-[#6B7280] text-[11px] font-bold text-start mt-[21px] mb-[11px]">Qarzdorning Surati</p>

//             <div className="py-[37px] px-[59px] bg-[#EAF4FF] rounded-[12px] border flex flex-col items-center border-[#197FE6]">
//                 <img src={camera} alt="" />
//                 <p className="text-[#197FE6] text-[14px] font-bold mt-[25px]">Suratga Olish Uchun Ustiga Bosing</p>
//             </div>
//             <p className="text-[#6B7280] text-[11px] font-bold text-start mt-[23px] mb-[8px]">Shaxsiy Ma’lumotlar</p>

//             <div>
//                 <h2 className="text-[#0F172A] text-[14px] font-bold text-start">To’liq F.I.O</h2>
//                 <input type="text" placeholder="e.g. John Doe" className="bg-[#FFFFFF] border-[#E5E7EB] border py-[16px] px-[15px] w-full mt-[7px] rounded-[12px]" />
//             </div>
//             <div>
//                 <h2 className="text-[#0F172A] text-[14px] font-bold text-start">Asosiy Telefon Raqami * </h2>
//                 <input type="text" placeholder="(555) 000-0000" className="bg-[#FFFFFF] border-[#E5E7EB] border py-[13px] px-[15px] w-full mt-[7px] rounded-[12px]" />
//             </div>
//             <div>
//                 <h2 className="text-[#0F172A] text-[14px] font-bold text-start">Qo’shimcha Telefon Raqami (Ixtiyoriy) </h2>
//                 <input type="text" placeholder="(555) 000-0000" className="bg-[#FFFFFF] border-[#E5E7EB] border py-[13px] px-[15px] w-full mt-[7px] rounded-[12px]" />
//             </div>

//             <p className="text-[#6B7280] text-[11px] font-bold text-start mt-[23px] mb-[8px]">Qarz haqida</p>

//             <div>
//                 <h2 className="text-[#0F172A] text-[14px] font-bold text-start">To’liq F.I.O</h2>
//                 <input type="number" placeholder="0.00 so’m" className="bg-[#FFFFFF] border-[#E5E7EB] border py-[16px] px-[15px] w-full mt-[7px] rounded-[12px]" />
//             </div>


//             <div className="flex gap-[20px]">
//                 <div>
//                     <h2 className="text-[#0F172A] text-[14px] font-bold text-start">Qarz Yaratilgan Sana</h2>
//                     <input type="date" className="bg-[#FFFFFF] border-[#E5E7EB] border py-[13px] px-[15px] w-[165px] mt-[7px] rounded-[12px]" />
//                 </div>
//                 <div>
//                     <h2 className="text-[#0F172A] text-[14px] font-bold text-start">Oxirgi Qarz To’lov Sanasi</h2>
//                     <input type="date" className="bg-[#FFFFFF] border-[#E5E7EB] border py-[16px] px-[15px] w-[165px] mt-[7px] rounded-[12px]" />
//                 </div>
//             </div>

//         </section>

//         <div className="flex gap-[47px] py-[8px] items-end px-[17px] bg-[#ffffff] border border-[#E5E7EB] absolute bottom-0 z-10">
//             <button className="bg-[#197FE6] text-[#fff] border-none px-[18px] py-[13px] rounded-[12px] text-[16px] font-bold">✓ Qarzni Qo'shish</button>
//             <button className="bg-[#E11D48] text-[#fff] border-none px-[18px] py-[13px] rounded-[12px] text-[16px] font-bold"><a href="/">- Bekor Qilish</a></button>
//         </div>
//     </div>;
// }

// export default Camera;


















import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import camera from "../../public/camera.png";

function Camera() {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);

    const [fullName, setFullName] = useState("");
    const [mainPhone, setMainPhone] = useState("");
    const [extraPhone, setExtraPhone] = useState("");
    const [amount, setAmount] = useState("");
    const [createdDate, setCreatedDate] = useState("");
    const [lastDate, setLastDate] = useState("");
    const [photoPath, setPhotoPath] = useState("");

    const openCamera = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    // 🔥 Convert photo to Base64
    const handlePhoto = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            setPhotoPath(reader.result); // save base64
        };
        reader.readAsDataURL(file);
    };

    const handleAddLoan = async () => {
        if (!fullName || !mainPhone || !amount) {
            alert("Please fill required fields!");
            return;
        }

        try {
            await addDoc(collection(db, "loaners"), {
                fullName,
                mainPhone,
                extraPhone,
                amount: Number(amount),
                createdDate,
                lastDate,
                photoPath,
                createdAt: serverTimestamp(),
            });

            alert("Loaner added successfully ✅");

            navigate("/list");
        } catch (error) {
            console.error(error);
            alert("Error occurred!");
        }
    };

    return (
        <div className="text-center">
            <div className="flex gap-[74px] py-[24px] items-center justify-center px-[20px] bg-[#FFFFFF] border boder-[#E5E7EB]">
                <h2 className="text-[#111111] text-[16px] font-bold ">
                    Yangi Qarz Yaratish
                </h2>
            </div>

            <section className="px-[20px]">
                <p className="text-[#6B7280] text-[11px] font-bold text-start mt-[21px] mb-[11px]">
                    Qarzdorning Surati
                </p>

                <div
                    onClick={openCamera}
                    className="py-[37px] px-[59px] bg-[#EAF4FF] rounded-[12px] border flex flex-col items-center border-[#197FE6] cursor-pointer"
                >
                    <img
                        src={photoPath ? photoPath : camera}
                        alt=""
                        className="max-h-[120px]"
                    />
                    <p className="text-[#197FE6] text-[14px] font-bold mt-[25px]">
                        Suratga Olish Uchun Ustiga Bosing
                    </p>
                </div>

                <input
                    type="file"
                    accept="image/*"
                    capture="environment"
                    ref={fileInputRef}
                    onChange={handlePhoto}
                    className="hidden"
                />

                <p className="text-[#6B7280] text-[11px] font-bold text-start mt-[23px] mb-[8px]">
                    Shaxsiy Ma’lumotlar
                </p>

                <div>
                    <h2 className="text-[#0F172A] text-[14px] font-bold text-start">
                        To’liq F.I.O
                    </h2>
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="bg-[#FFFFFF] border-[#E5E7EB] border py-[16px] px-[15px] w-full mt-[7px] rounded-[12px]"
                    />
                </div>

                <div>
                    <h2 className="text-[#0F172A] text-[14px] font-bold text-start">
                        Asosiy Telefon Raqami *
                    </h2>
                    <input
                        type="text"
                        value={mainPhone}
                        onChange={(e) => setMainPhone(e.target.value)}
                        className="bg-[#FFFFFF] border-[#E5E7EB] border py-[13px] px-[15px] w-full mt-[7px] rounded-[12px]"
                    />
                </div>

                <div>
                    <h2 className="text-[#0F172A] text-[14px] font-bold text-start">
                        Qo’shimcha Telefon Raqami
                    </h2>
                    <input
                        type="text"
                        value={extraPhone}
                        onChange={(e) => setExtraPhone(e.target.value)}
                        className="bg-[#FFFFFF] border-[#E5E7EB] border py-[13px] px-[15px] w-full mt-[7px] rounded-[12px]"
                    />
                </div>

                <p className="text-[#6B7280] text-[11px] font-bold text-start mt-[23px] mb-[8px]">
                    Qarz haqida
                </p>

                <div>
                    <h2 className="text-[#0F172A] text-[14px] font-bold text-start">
                        Qarz Summasi
                    </h2>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="bg-[#FFFFFF] border-[#E5E7EB] border py-[16px] px-[15px] w-full mt-[7px] rounded-[12px]"
                    />
                </div>

                <div className="flex gap-[20px]">
                    <input
                        type="date"
                        value={createdDate}
                        onChange={(e) => setCreatedDate(e.target.value)}
                        className="bg-[#FFFFFF] border-[#E5E7EB] border py-[13px] px-[15px] w-[165px] mt-[7px] rounded-[12px]"
                    />
                    <input
                        type="date"
                        value={lastDate}
                        onChange={(e) => setLastDate(e.target.value)}
                        className="bg-[#FFFFFF] border-[#E5E7EB] border py-[13px] px-[15px] w-[165px] mt-[7px] rounded-[12px]"
                    />
                </div>
            </section>

            <div className="flex gap-[47px] py-[8px] items-end px-[17px] bg-[#ffffff] border border-[#E5E7EB] absolute bottom-0 z-10">
                <button
                    onClick={handleAddLoan}
                    className="bg-[#197FE6] text-[#fff] border-none px-[18px] py-[13px] rounded-[12px] text-[16px] font-bold"
                >
                    ✓ Qarzni Qo'shish
                </button>

                <button
                    onClick={() => navigate("/")}
                    className="bg-[#E11D48] text-[#fff] border-none px-[18px] py-[13px] rounded-[12px] text-[16px] font-bold"
                >
                    - Bekor Qilish
                </button>
            </div>
        </div>
    );
}

export default Camera;