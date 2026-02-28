import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";



// Images{
import money from "../../public/money.png"
import card from "../../public/plastic.png"
// }

function AddLoan() {
    return <div className="text-center">
        <div className="flex gap-[85px] py-[24px] items-center px-[20px] bg-[#FFFFFF] border boder-[#E5E7EB]">
                 <Link to="/"><ArrowLeft className="cursor-pointer" /></Link>
                <h2 className="font-bold text-xl text-center">Qarz Qo'shish</h2>
            </div>

        <section className="px-[20px]">

            <h3 className="text-[13px] font-bold text-[#64748B] mt-[22px]">Qarzdor: <span className="text-[#0F172A]">Sobirjon Otajanov</span></h3>

            <h2 className="text-[22px] font-bold mt-[5px] mb-[20px] text-[#0F172A]">Qarz summasi: 150.000 so’m </h2>

            <nav className="mt-[12px]">
                <ul className="bg-[#E5E7EB] px-[15px] py-[4px] flex justify-between rounded-[10px]">
                    <li><a href="#!" className="font-bold text-[13px] text-[#197FE6] bg-[#FFFFFF] py-[5px] px-[30px] rounded-[10px]">+ Qarz Qo’shish </a></li>
                    <li><a href="#!" className="font-normal text-[13px] text-[#6B7280] mr-[40px] ">− Qarz Ayirish </a></li>
                </ul>
            </nav>


            <h3 className="text-[13px] font-bold text-[#64748B] mt-[17px] text-start">Qarz Miqdori</h3>
            <div className="bg-[#fff] px-[20px] py-[24px] border border-[#E5E7EB] rounded-[12px] mt-[12px]">
                <h1 className="text-[36px] font-bold text-[#0F172A]">50.000 so’m</h1>
            </div>
            <h4 className="text-[#94A3B8] text-[13px] font-normal mt-[7px] text-end">Qolgan qarz summasi: 100.000 so’m </h4>
            <h3 className="text-[13px] font-bold text-[#64748B] mt-[17px] text-start">To’lov turi</h3>

            <div className="flex justify-between">
                <div className="bg-[#fff] px-[20px] py-[24px] border border-[#E5E7EB] rounded-[12px] mt-[12px] w-[165px] flex flex-col items-center">
                    <img src={money} alt="" />
                    <p className="text-[14px] text-[#197FE6] font-bold mt-[16px]">Naxt Pul</p>
                </div>
                <div className="bg-[#fff] px-[4px] py-[24px] border border-[#E5E7EB] rounded-[12px] mt-[12px] w-[165px] flex flex-col items-center">
                    <img src={card} alt="" />
                    <p className="text-[14px] text-[#64748B] font-bold mt-[16px]">Plastik karta/O’tkazma </p>
                </div>
            </div>
            <h3 className="text-[13px] font-bold text-[#64748B] mt-[17px] text-start">Comment (ixtiyoriy)</h3>

            <textarea name="" id="" placeholder="Izoh yozish uchun...." className="px-[20px] py-[24px] w-[350px] mt-[12px] rounded-[12px] border border-[#E5E7EB] outline-none"></textarea>
        </section>
        <div className="flex gap-[47px] py-[8px] items-end px-[17px] bg-[#ffffff] border border-[#E5E7EB] absolute bottom-0 z-10">
            <button className="bg-[#197FE6] text-[#fff] border-none px-[18px] py-[13px] rounded-[12px] text-[16px] font-bold">✓ Qarzni Qo'shish</button>
            <button className="bg-[#E11D48] text-[#fff] border-none px-[18px] py-[13px] rounded-[12px] text-[16px] font-bold">- Bekor Qilish</button>
        </div>
    </div>;
}

export default AddLoan;