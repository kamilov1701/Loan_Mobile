import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";



// Images{
// }

function History() {
    return <div className="text-center">
        <div className="flex gap-[74px] py-[24px] items-center px-[20px] bg-[#FFFFFF] border boder-[#E5E7EB]">
            <Link to="/"><ArrowLeft className="cursor-pointer" /></Link>
            <div>
                <h2 className="text-[#111111] text-[16px] font-bold">Qardorning Tarixi</h2>
                <h3 className="text-[13px] font-bold text-[#64748B] mt-[4px]">Qarzdor: <span className="text-[#0F172A]">Sobirjon Otajanov</span></h3>
            </div>
        </div>


        <section className="px-[20px]">

            <div className="container mx-auto px-4">
                <div className="bg-[#E5E7EB] w-full max-w-[350px] sm:max-w-[450px] md:max-w-[600px] mx-auto mt-[20px] border border-[#D0DBE7] rounded-[12px] py-[27px] px-[57px] text-center">
                    <p className="text-[13px] font-normal text-[#6B7280]">Qolgan Qarz Summasi</p>
                    <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#111111]">1.180.000 so’m</h2>
                    <p className="text-[11px] font-normal text-[#9CA3AF] mb-[28px]">Songi yangilaish 2 soat oldin</p>
                </div>
            </div>

                <p className="text-[#6B7280] text-[11px] font-bold text-start mt-[21px] mb-[11px]">Bugun </p>

            <div className="bg-gray-100 rounded-[12px] p-[10px] flex items-center justify-between border-[#E5E7EB] border">
                <div className="flex items-center gap-4">
                    <span className="bg-[#D1FAE5] text-[#059669] px-[10px] py-[9px] rounded-full w-[36px]"> ↓ </span>
                    <div>
                        <h2 className="text-[18px] font-bold text-black">-50.000 so’m</h2>
                        <p className="text-[#6B7280] text-[12px] font-normal text-start">Qarzda ayirildi</p>
                    </div>
                </div>

                <div className="text-[#9CA3AF] text-[11px] font-medium">10:30 AM</div>
            </div>
            <div className="bg-gray-100 rounded-[12px] p-[10px] flex items-center justify-between border-[#E5E7EB] border mt-[17px]">
                <div className="flex items-center gap-4">
                    <span className="bg-[#FFE4E6] text-[#E11D48] px-[10px] py-[9px] rounded-full w-[36px]"> ↑ </span>
                    <div>
                        <h2 className="text-[18px] font-bold text-black">+430.000 so’m</h2>
                        <p className="text-[#6B7280] text-[12px] font-normal text-start">Qarz Qo’shildi</p>
                    </div>
                </div>

                <div className="text-[#9CA3AF] text-[11px] font-medium">08:30 AM</div>
            </div>
            <div className="bg-gray-100 rounded-[12px] p-[10px] flex items-center justify-between border-[#E5E7EB] border mt-[17px]">
                <div className="flex items-center gap-4">
                    <span className="bg-[#D1FAE5] text-[#059669] px-[10px] py-[9px] rounded-full w-[36px]"> ↓ </span>
                    <div>
                        <h2 className="text-[18px] font-bold text-black">-30.000 so’m</h2>
                        <p className="text-[#6B7280] text-[12px] font-normal text-start">Qarzda ayirildi</p>
                    </div>
                </div>

                <div className="text-[#9CA3AF] text-[11px] font-medium">07:35 AM</div>
            </div>
                <p className="text-[#6B7280] text-[11px] font-bold text-start mt-[21px] mb-[11px]">Kecha</p>

            <div className="bg-gray-100 rounded-[12px] p-[10px] flex items-center justify-between border-[#E5E7EB] border">
                <div className="flex items-center gap-4">
                    <span className="bg-[#D1FAE5] text-[#059669] px-[10px] py-[9px] rounded-full w-[36px]"> ↓ </span>
                    <div>
                        <h2 className="text-[18px] font-bold text-black">-50.000 so’m</h2>
                        <p className="text-[#6B7280] text-[12px] font-normal text-start">Qarzda ayirildi</p>
                    </div>
                </div>

                <div className="text-[#9CA3AF] text-[11px] font-medium">10:30 AM</div>
            </div>
            <div className="bg-gray-100 rounded-[12px] p-[10px] flex items-center justify-between border-[#E5E7EB] border mt-[17px]">
                <div className="flex items-center gap-4">
                    <span className="bg-[#FFE4E6] text-[#E11D48] px-[10px] py-[9px] rounded-full w-[36px]"> ↑ </span>
                    <div>
                        <h2 className="text-[18px] font-bold text-black">+430.000 so’m</h2>
                        <p className="text-[#6B7280] text-[12px] font-normal text-start">Qarz Qo’shildi</p>
                    </div>
                </div>

                <div className="text-[#9CA3AF] text-[11px] font-medium">08:30 AM</div>
            </div>
            

        </section>

        <div className="flex gap-[47px] py-[8px] items-end px-[17px] bg-[#ffffff] border border-[#E5E7EB] absolute bottom-0 z-10">
            <button className="bg-[#197FE6] text-[#fff] border-none px-[18px] py-[13px] rounded-[12px] text-[16px] font-bold">✓ Qarzni Qo'shish</button>
            <button className="bg-[#E11D48] text-[#fff] border-none px-[18px] py-[13px] rounded-[12px] text-[16px] font-bold">- Bekor Qilish</button>
        </div>
    </div>;
}

export default History;