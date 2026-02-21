import React from "react";
import Notificationimg from "../../public/Not.png";

function Home() {
  return <div >
    <div>
      {/* Home Header */}

      <div className="bg-[#E5E7EB] w-full h-[85px]">
        <div className="container mx-auto flex justify-between items-center pt-[24px]">
          <div>
            <p className="text-[#64748B] text-[11px] font-bold">Qaytganingiz Bilan!</p>
            <h2 className="text-[#0E141B] text-[20px] font-bold">Bosh Sahifa</h2>
          </div>
          <div className="bg-[#E0F2FE] w-[36px] h-[36px] rounded-[50%]">
            <img src={Notificationimg} alt="" />
          </div>
        </div>
      </div>

      {/* Home Card Top */}

      <div className="container mx-auto bg-[#E5E7EB] max-w-[350px] w-full h-[170px] mt-[20px] border #D0DBE7 rounded-[12px] py-[13px] px-[15px]">
        <div className="flex justify-between">
          <div>
            <p className="text-[12px] font-bold text-[#64748B]">Moliyaviy Ko’rsatgich</p>
            <h2 className="text-[32px] font-bold text-[#0E141B]">20.650.000 so’m</h2>
          </div>
          <div>
            <p className="text-[#078838] text-[11px]">+12</p>
          </div>
        </div>

        <div className="mt-[12px]">
          <div className="flex justify-between">
            <p className="text-[11px] text-[#64748B]">Qarzlar summasi</p>
            <p className="text-[11px] font-bold">12.450.000 so’m</p>
          </div>
          <div className="flex justify-between mt-[28px]">
            <p className="text-[11px] text-[#64748B]">To’plangan Qarzlar summasi</p>
            <p className="text-[11px] font-bold">8.200.000 so’m</p>
          </div>
        </div>
      </div>

      {/* Loan Add Button */}

      <div className="cotainer mx-auto">
        <div className="mt-[25px]">
          <center>
            <button className="bg-[#197FE6] max-w-[350px] w-full h-[55px] py-[14px] px-[78px] rounded-[12px]"><a className="text-[#fff] text-[15px] font-bold" href="/List">+ Yangi Qarzdorni Yaratish </a></button>
          </center>
        </div>
      </div>
    </div>
  </div>;
}

export default Home;