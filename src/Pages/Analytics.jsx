import React from "react";
// Images{
import analit from "../../public/analitic.png";
// }

// Icons{
import { ArrowBigUpDash } from 'lucide-react';
// }

function Analytics() {
  return <div>

    <div className="flex items-center justify-between bg-[#FFFFFF] p-[20px] border border-[#E5E7EB]">
      <h2 className="text-center font-bold text-xl">Analitika</h2>
      <ArrowBigUpDash className="bg-[#E5E7EB] w-[37px] h-[37px] p-[7px] rounded-full" />
    </div>
    <section className="px-[22px]">

      <nav className="mt-[12px]">
        <ul className="bg-[#E5E7EB] px-[15px] py-[4px] flex justify-around rounded-[10px]">
          <li><a href="#!" className="font-bold text-[13px] text-[#197FE6] bg-[#FFFFFF] py-[5px] px-[30px] rounded-[10px]">Haftalik</a></li>
          <li><a href="#!" className="font-normal text-[13px] text-[#6B7280]">Yillik</a></li>
          <li><a href="#!" className="font-normal text-[13px] text-[#6B7280]">Oylik</a></li>
        </ul>
      </nav>

      <section>
        <div className="flex justify-between mt-[13px]">
          <h3 className="text-[#6B7280] font-normal text-[12px]">Haftalik analitika</h3>
          <span className="text-[#059669] bg-[#D1FAE5] px-[9px] py-[4px] rounded-full">↑ +8% </span>
        </div>

        <h1 className="font-bold text-[36px] text-[#111111] mt-[-25px]">8.250.000 so’m </h1>


        <img src={analit} alt="" />
      </section>

      <div className="flex gap-[20px] mt-[30px]">
        <div className="bg-[#FFFFFF] py-[18px] px-[10px] border border-[#E5E7EB] w-[165px] rounded-[20px]">
          <h2 className="font-normal text-[12px] text-[#6B7280]">To’plangan Qarzlar</h2>
          <h1 className="font-bold text-[#6B7280] text-[18px] mt-[7px]">12.450.000 so’m</h1>
          <h3 className="font-normal text-[11px] text-[#059669] mt-[7px]">+12% Shu Haftada</h3>
        </div>
        <div className="bg-[#FFFFFF] py-[18px] px-[10px] border border-[#E5E7EB] w-[165px] rounded-[20px]">
          <h2 className="font-normal text-[12px] text-[#6B7280]">Yozilgan Qarzlar</h2>
          <h1 className="font-bold text-[#6B7280] text-[18px] mt-[7px]">4.200.000 som</h1>
          <h3 className="font-normal text-[11px] text-[#DC2626] mt-[7px]">+5% Muddati O’tgan</h3>
        </div>
      </div>

      <h1 className="text-[18px] font-bold text-[#111111] mt-[11px] ">Yaqinda To’plangan Qarzlar</h1>

      <div className="flex justify-between bg-[#FFFFFF] border border-[#E5E7EB] px-[10px] py-[6px] rounded-[10px] mt-[10px]">
        <div>
          <h2 className="text-[14px] font-bold text-[#111111]">Sobirjon Otajanov</h2>
          <h3 className="text-[11px] font-normal text-[#6B7280]">Qarzidan 150 ming to’ladi.</h3>
        </div>

        <h2 className="text-[14px] font-bold text-[#059669]">+150.000 so’m</h2>
      </div>
      <div className="flex justify-between bg-[#FFFFFF] border border-[#E5E7EB] px-[10px] py-[6px] rounded-[10px] mt-[10px]">
        <div>
          <h2 className="text-[14px] font-bold text-[#111111]">Sobirjon Otajanov</h2>
          <h3 className="text-[11px] font-normal text-[#6B7280]">Qarzidan 150 ming to’ladi.</h3>
        </div>

        <h2 className="text-[14px] font-bold text-[#059669]">+150.000 so’m</h2>
      </div>
      <div className="flex justify-between bg-[#FFFFFF] border border-[#E5E7EB] px-[10px] py-[6px] rounded-[10px] mt-[10px]">
        <div>
          <h2 className="text-[14px] font-bold text-[#111111]">Sobirjon Otajanov</h2>
          <h3 className="text-[11px] font-normal text-[#6B7280]">Qarzidan 150 ming to’ladi.</h3>
        </div>

        <h2 className="text-[14px] font-bold text-[#059669]">+150.000 so’m</h2>
      </div>
      <div className="flex justify-between bg-[#FFFFFF] border border-[#E5E7EB] px-[10px] py-[6px] rounded-[10px] mt-[10px]">
        <div>
          <h2 className="text-[14px] font-bold text-[#111111]">Sobirjon Otajanov</h2>
          <h3 className="text-[11px] font-normal text-[#6B7280]">Qarzidan 150 ming to’ladi.</h3>
        </div>

        <h2 className="text-[14px] font-bold text-[#059669]">+150.000 so’m</h2>
      </div>

    </section>

  </div>;
}

export default Analytics;