// import React from "react";

// // Images{
// import phone from "../../public/phone.png"
// import sms from "../../public/sms.png"

// // }

// function Alert() {
//     return <div>

//         <div>
//             <div className="p-[27px] bg-[#FFFFFF] border boder-[#E5E7EB]">
//                 <h2 className="font-bold text-xl text-center">Ogohlantirish</h2>
//             </div>
//         </div>

//         <section className="px-[20px]">
//             <nav className="mt-[12px]">
//                 <ul className="bg-[#E5E7EB] px-[2px] py-[4px] flex justify-between rounded-[10px]">
//                     <li><a href="#!" className="font-bold text-[13px] text-[#197FE6] bg-[#FFFFFF] py-[5px] px-[30px] rounded-[10px]">Yaqinlashayotgan</a></li>
//                     <li><a href="#!" className="font-normal text-[13px] text-[#6B7280] mr-[40px]">Muddati O’tgan</a></li>
//                 </ul>
//             </nav>

//             <div className="flex mt-[14px] justify-between">
//                 <h2 className="font-bold text-[15px] text-[#111111]">To’lov kuniga 7 kun qolganlar</h2>
//                 <span className="text-[11px] font-normal text-[#C2410C] bg-[#FED7AA] px-[6px] py-[8px] rounded-[12px]">3ta ogohlantirish</span>
//             </div>

//             <div>
//                 <div className="bg-[#ffffff] border-[#E5E7EB] border px-[9px] py-[8px] rounded-[12px] mt-[14px]">
//                     <div className="flex justify-between items-center">
//                         <div className="flex gap-[9px] items-center">
//                             <div>
//                                 <span className="bg-[#E5E7EB] text-[12px] font-bold text-[#555555] px-[8px] py-[9px] rounded-full">SK</span>
//                             </div>

//                             <div>
//                                 <h2 className="text-[#000000] text-[14px] font-bold">Sarvar Komiljonov</h2>
//                                 <p className="text-[#64748B] text-[11px] font-normal">Songi to’lash kerak</p>
//                             </div>
//                         </div>

//                         <div>
//                             <h2 className="text-[#111111] text-[16px] font-bold ml-[15px] mb-[15px">120.000 so’m</h2>
//                             <h3 className="text-[#EA580C] text-[11px] font-bold">To'lov sanasi: 6kun</h3>
//                         </div>
//                     </div>

//                     <div className="flex justify-between mt-[20px]">
//                         <button className="text-[#374151] bg-[#F3F4F6] text-[12px] font-normal p-[10px] rounded-[12px]">To’lov Sanasini o’zgartirish</button>

//                         <div className="flex gap-[10px]">
//                             <img className="bg-[#DCFCE7] p-[8px] w-[35px] rounded-[12px]" src={phone} alt="" />
//                             <img className="bg-[#DBEAFE] p-[8px] w-[35px] rounded-[12px]" src={sms} alt="" />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="bg-[#ffffff] border-[#E5E7EB] border px-[9px] py-[8px] rounded-[12px] mt-[14px]">
//                     <div className="flex justify-between items-center">
//                         <div className="flex gap-[9px] items-center">
//                             <div>
//                                 <span className="bg-[#E5E7EB] text-[12px] font-bold text-[#555555] px-[8px] py-[9px] rounded-full">SO</span>
//                             </div>

//                             <div>
//                                 <h2 className="text-[#000000] text-[14px] font-bold">Sardor Komiljonov</h2>
//                                 <p className="text-[#64748B] text-[11px] font-normal">Songi  to’lov</p>
//                             </div>
//                         </div>

//                         <div>
//                             <h2 className="text-[#111111] text-[16px] font-bold ml-[15px] mb-[15px">50.000 so’m</h2>
//                             <h3 className="text-[#EA580C] text-[11px] font-bold">To'lov sanasi: Ertaga</h3>
//                         </div>
//                     </div>

//                     <div className="flex justify-between mt-[20px]">
//                         <button className="text-[#374151] bg-[#F3F4F6] text-[12px] font-normal p-[10px] rounded-[12px]">To’lov Sanasini o’zgartirish</button>

//                         <div className="flex gap-[10px]">
//                             <img className="bg-[#DCFCE7] p-[8px] w-[35px] rounded-[12px]" src={phone} alt="" />
//                             <img className="bg-[#DBEAFE] p-[8px] w-[35px] rounded-[12px]" src={sms} alt="" />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="bg-[#ffffff] border-[#E5E7EB] border px-[9px] py-[8px] rounded-[12px] mt-[14px]">
//                     <div className="flex justify-between items-center">
//                         <div className="flex gap-[9px] items-center">
//                             <div>
//                                 <span className="bg-[#E5E7EB] text-[12px] font-bold text-[#555555] px-[8px] py-[9px] rounded-full">SO</span>
//                             </div>

//                             <div>
//                                 <h2 className="text-[#000000] text-[14px] font-bold">Sobirjon Otajanov</h2>
//                                 <p className="text-[#64748B] text-[11px] font-normal">Songi  to’lov</p>
//                             </div>
//                         </div>

//                         <div>
//                             <h2 className="text-[#111111] text-[16px] font-bold ml-[15px] mb-[15px">50.000 so’m</h2>
//                             <h3 className="text-[#EA580C] text-[11px] font-bold">To'lov sanasi: 10kun</h3>
//                         </div>
//                     </div>

//                     <div className="flex justify-between mt-[20px]">
//                         <button className="text-[#374151] bg-[#F3F4F6] text-[12px] font-normal p-[10px] rounded-[12px]">To’lov Sanasini o’zgartirish</button>

//                         <div className="flex gap-[10px]">
//                             <img className="bg-[#DCFCE7] p-[8px] w-[35px] rounded-[12px]" src={phone} alt="" />
//                             <img className="bg-[#DBEAFE] p-[8px] w-[35px] rounded-[12px]" src={sms} alt="" />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="bg-[#ffffff] border-[#E5E7EB] border px-[9px] py-[8px] rounded-[12px] mt-[14px]">
//                     <div className="flex justify-between items-center">
//                         <div className="flex gap-[9px] items-center">
//                             <div>
//                                 <span className="bg-[#E5E7EB] text-[12px] font-bold text-[#555555] px-[8px] py-[9px] rounded-full">SO</span>
//                             </div>

//                             <div>
//                                 <h2 className="text-[#000000] text-[14px] font-bold">Sardor Komiljonov</h2>
//                                 <p className="text-[#64748B] text-[11px] font-normal">Songi  to’lov</p>
//                             </div>
//                         </div>

//                         <div>
//                             <h2 className="text-[#111111] text-[16px] font-bold ml-[15px] mb-[15px">50.000 so’m</h2>
//                             <h3 className="text-[#EA580C] text-[11px] font-bold">To'lov sanasi: Ertaga</h3>
//                         </div>
//                     </div>

//                     <div className="flex justify-between mt-[20px]">
//                         <button className="text-[#374151] bg-[#F3F4F6] text-[12px] font-normal p-[10px] rounded-[12px]">To’lov Sanasini o’zgartirish</button>

//                         <div className="flex gap-[10px]">
//                             <img className="bg-[#DCFCE7] p-[8px] w-[35px] rounded-[12px]" src={phone} alt="" />
//                             <img className="bg-[#DBEAFE] p-[8px] w-[35px] rounded-[12px]" src={sms} alt="" />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="bg-[#ffffff] border-[#E5E7EB] border px-[9px] py-[8px] rounded-[12px] mt-[14px]">
//                     <div className="flex justify-between items-center">
//                         <div className="flex gap-[9px] items-center">
//                             <div>
//                                 <span className="bg-[#E5E7EB] text-[12px] font-bold text-[#555555] px-[8px] py-[9px] rounded-full">SO</span>
//                             </div>

//                             <div>
//                                 <h2 className="text-[#000000] text-[14px] font-bold">Sardor Komiljonov</h2>
//                                 <p className="text-[#64748B] text-[11px] font-normal">Songi  to’lov</p>
//                             </div>
//                         </div>

//                         <div>
//                             <h2 className="text-[#111111] text-[16px] font-bold ml-[15px] mb-[15px">50.000 so’m</h2>
//                             <h3 className="text-[#EA580C] text-[11px] font-bold">To'lov sanasi: Ertaga</h3>
//                         </div>
//                     </div>

//                     <div className="flex justify-between mt-[20px]">
//                         <button className="text-[#374151] bg-[#F3F4F6] text-[12px] font-normal p-[10px] rounded-[12px]">To’lov Sanasini o’zgartirish</button>

//                         <div className="flex gap-[10px]">
//                             <img className="bg-[#DCFCE7] p-[8px] w-[35px] rounded-[12px]" src={phone} alt="" />
//                             <img className="bg-[#DBEAFE] p-[8px] w-[35px] rounded-[12px]" src={sms} alt="" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     </div>;
// }

// export default Alert;

















import React, { useState, useRef } from "react";
import phone from "../../public/phone.png";
import sms from "../../public/sms.png";

function Alert() {
  const [activeTab, setActiveTab] = useState("upcoming"); // tabs
  const dateInputRef = useRef(null);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [customers, setCustomers] = useState([
    { id: 1, name: "Sarvar Komiljonov", amount: "120.000 so’m", due: "6kun", phone: "+998901234567", initials: "SK", status: "upcoming" },
    { id: 2, name: "Sardor Komiljonov", amount: "50.000 so’m", due: "Ertaga", phone: "+998901234568", initials: "SO", status: "upcoming" },
    { id: 3, name: "Sobirjon Otajanov", amount: "50.000 so’m", due: "10kun", phone: "+998901234569", initials: "SO", status: "overdue" },
    // add more if needed
  ]);

  const openDatePicker = (customer) => {
    setSelectedCustomer(customer);
    dateInputRef.current.focus(); // focus triggers the date picker
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    if (!selectedCustomer) return;
    setCustomers((prev) =>
      prev.map((c) =>
        c.id === selectedCustomer.id
          ? { ...c, due: new Date(newDate).toLocaleDateString("uz-UZ") }
          : c
      )
    );
  };

  const callCustomer = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const messageCustomer = (phoneNumber, name) => {
    const text = `Salom ${name}, iltimos to'lovni amalga oshiring.`;
    window.open(`https://t.me/+${phoneNumber}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div>
      {/* Header */}
      <div className="p-[27px] bg-[#FFFFFF] border border-[#E5E7EB]">
        <h2 className="font-bold text-xl text-center">Ogohlantirish</h2>
      </div>

      {/* Hidden but focusable date input */}
      <input
        type="date"
        ref={dateInputRef}
        onChange={handleDateChange}
        style={{ position: "absolute", left: "-9999px" }}
      />

      <section className="px-[20px]">
        {/* Tabs */}
        <nav className="mt-[12px]">
          <ul className="bg-[#E5E7EB] px-[2px] py-[4px] flex justify-between rounded-[10px]">
            <li>
              <a
                href="#!"
                onClick={() => setActiveTab("upcoming")}
                className={`py-[5px] px-[30px] rounded-[10px] text-[13px] ${
                  activeTab === "upcoming"
                    ? "font-bold text-[#197FE6] bg-[#FFFFFF]"
                    : "font-normal text-[#6B7280]"
                }`}
              >
                Yaqinlashayotgan
              </a>
            </li>
            <li>
              <a
                href="#!"
                onClick={() => setActiveTab("overdue")}
                className={`py-[5px] px-[30px] rounded-[10px] text-[13px] ${
                  activeTab === "overdue"
                    ? "font-bold text-[#197FE6] bg-[#FFFFFF]"
                    : "font-normal text-[#6B7280]"
                }`}
              >
                Muddati O’tgan
              </a>
            </li>
          </ul>
        </nav>

        {/* Info */}
        <div className="flex mt-[14px] justify-between">
          <h2 className="font-bold text-[15px] text-[#111111]">To’lov kuniga 7 kun qolganlar</h2>
          <span className="text-[11px] font-normal text-[#C2410C] bg-[#FED7AA] px-[6px] py-[8px] rounded-[12px]">3ta ogohlantirish</span>
        </div>

        {/* Customers List */}
        <div>
          {customers
            .filter((c) => (activeTab === "upcoming" ? c.status === "upcoming" : c.status === "overdue"))
            .map((customer) => (
              <div key={customer.id} className="bg-[#ffffff] border-[#E5E7EB] border px-[9px] py-[8px] rounded-[12px] mt-[14px]">
                <div className="flex justify-between items-center">
                  <div className="flex gap-[9px] items-center">
                    <span className="bg-[#E5E7EB] text-[12px] font-bold text-[#555555] px-[8px] py-[9px] rounded-full">{customer.initials}</span>
                    <div>
                      <h2 className="text-[#000000] text-[14px] font-bold">{customer.name}</h2>
                      <p className="text-[#64748B] text-[11px] font-normal">Songi to’lov</p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-[#111111] text-[16px] font-bold ml-[15px] mb-[15px">{customer.amount}</h2>
                    <h3 className="text-[#EA580C] text-[11px] font-bold">To'lov sanasi: {customer.due}</h3>
                  </div>
                </div>

                <div className="flex justify-between mt-[20px]">
                  <button
                    className="text-[#374151] bg-[#F3F4F6] text-[12px] font-normal p-[10px] rounded-[12px]"
                    onClick={() => openDatePicker(customer)}
                  >
                    To’lov Sanasini o’zgartirish
                  </button>

                  <div className="flex gap-[10px]">
                    <img
                      className="bg-[#DCFCE7] p-[8px] w-[35px] rounded-[12px] cursor-pointer"
                      src={phone}
                      alt=""
                      onClick={() => callCustomer(customer.phone)}
                    />
                    <img
                      className="bg-[#DBEAFE] p-[8px] w-[35px] rounded-[12px] cursor-pointer"
                      src={sms}
                      alt=""
                      onClick={() => messageCustomer(customer.phone, customer.name)}
                    />
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