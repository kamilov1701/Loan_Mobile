// import React from "react";
// import Logoimg from "../../public/MAX_V_Logo.png";

// function Register() {
//   return <div className="container mx-auto">
//     <div className="header_content">
//       <center>
//         <img className="pt-[12px]" src={Logoimg} alt="" />
//         <h2 className="text-[20px] font-bold text-center mt-[25px]">Ro’yxatdan O’tish</h2>
//         <h1 className="text-[26px] font-bold text-center mt-[18px]">Ro’yxatdan O’tishni boshlang!</h1>
//         <p className="text-[#4E7397] mt-[18px]">Qarzlarni Nazorat Qilish Uchun Ro’yxatdan O’ting</p>
//       </center>
//     </div>

//     {/* Register Form */}

//     <div className="ml-[25px] mt-[29px]">
//       <form action="#!">
//         <label className="text-[#0E141B] text-[13px]" htmlFor="">To’liq F.I.O</label> <br />
//         <input className="w-[320px] h-[45px] border #D0DBE7 rounded-[12px] mt-[7px] outline-none pl-[10px]" placeholder="e.g. John Doe" type="text" name="" id="" /> <br />
//         <label className="text-[#0E141B] text-[13px]" htmlFor="">Do’kon yoki Tashkilot Nomi</label> <br />
//         <input className="w-[320px] h-[45px] border #D0DBE7 rounded-[12px] mt-[7px] outline-none pl-[10px]" placeholder="" type="text" name="" id="" /> <br />
//         <label className="text-[#0E141B] text-[13px]" htmlFor="">Telefon Raqam</label> <br />
//         <input className="w-[320px] h-[45px] border #D0DBE7 rounded-[12px] mt-[7px] outline-none pl-[10px]" placeholder="(555) 000-0000" type="number" name="" id="" /> <br />
//         <label className="text-[#0E141B] text-[13px]" htmlFor="">Elektron Po’chta</label> <br />
//         <input className="w-[320px] h-[45px] border #D0DBE7 rounded-[12px] mt-[7px] outline-none pl-[10px]" placeholder="user@example.com" type="email" name="" id="" /> <br />

//         {/* Passwords */}

//         <div className="flex gap-[10px]">
//           <div>
//             <label className="text-[#0E141B] text-[13px]" htmlFor="">Parol</label> <br />
//             <input className="w-[155px] h-[45px] border #D0DBE7 rounded-[12px] mt-[7px] outline-none pl-[10px]" placeholder="••••••••" type="password" name="" id="" /> <br />
//           </div>
//           <div>
//             <label className="text-[#0E141B] text-[13px]" htmlFor="">Parolni Tasqidlang</label><br />
//             <input className="w-[155px] h-[45px] border #D0DBE7 rounded-[12px] mt-[7px] outline-none pl-[10px]" placeholder="••••••••" type="password" name="" id="" /> <br />
//           </div>
//         </div>

//         {/* Terms and Policy */}

//         <div className="flex items-center gap-[12px] mt-[28px]">
//           <input className="w-[18px] h-[18px] border #D0DBE7 rounded-[12px]" type="checkbox" name="" id="" />
//           <p className="text-[12px] text-[#0E141B]">Dasturdan Foydalanish <span className="text-[#197FE6]">Shartlariga</span> Roziman</p>
//         </div>

//         {/* Registration Button */}

//         <div className="mt-[25px]">
//           <button className="bg-[#197FE6] max-w-[320px] w-full h-[50px] py-[12px] px-[90px] rounded-[12px]"><a className="text-[#fff] text-[16px] font-bold" href="/Login">Ro’yxatdan O’tish</a></button>
//         </div>
//         <p className="text-center">Yoki</p>
//         <div className="mt-[25px]">
//           <button className="bg-[#197FE6] max-w-[320px] w-full h-[50px] py-[12px] px-[90px] rounded-[12px]"><a className="text-[#fff] text-[16px] font-bold" href="/Login">Kirish</a></button>
//         </div>
//       </form>
//     </div>
//   </div>;
// }

// export default Register;

















import React, { useState } from "react";
import Logoimg from "../../public/MAX_V_Logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="container mx-auto px-4">
      <div className="header_content">
        <center>
          <img
            className="pt-[12px] w-[120px] sm:w-[150px] md:w-[180px] mx-auto"
            src={Logoimg}
            alt=""
          />
          <h2 className="text-[18px] sm:text-[20px] font-bold text-center mt-[25px]">
            Ro’yxatdan O’tish
          </h2>
          <h1 className="text-[22px] sm:text-[26px] font-bold text-center mt-[18px]">
            Ro’yxatdan O’tishni boshlang!
          </h1>
          <p className="text-[#4E7397] mt-[18px] text-[14px] sm:text-[16px] text-center">
            Qarzlarni Nazorat Qilish Uchun Ro’yxatdan O’ting
          </p>
        </center>
      </div>

      {/* Register Form */}

      <div className="mt-[29px] flex justify-center">
        <div className="w-full max-w-[320px] sm:max-w-[420px] md:max-w-[500px]">
          <form action="#!">
            
            {/* Full Name */}
            <label className="text-[#0E141B] text-[13px]">
              To’liq F.I.O
            </label>
            <br />
            <input
              className="w-full h-[45px] border border-[#D0DBE7] rounded-[12px] mt-[7px] outline-none pl-[10px]"
              placeholder="e.g. John Doe"
              type="text"
            />
            <br />

            {/* Organization */}
            <label className="text-[#0E141B] text-[13px]">
              Do’kon yoki Tashkilot Nomi
            </label>
            <br />
            <input
              className="w-full h-[45px] border border-[#D0DBE7] rounded-[12px] mt-[7px] outline-none pl-[10px]"
              type="text"
            />
            <br />

            {/* Phone */}
            <label className="text-[#0E141B] text-[13px]">
              Telefon Raqam
            </label>
            <br />
            <input
              className="w-full h-[45px] border border-[#D0DBE7] rounded-[12px] mt-[7px] outline-none pl-[10px]"
              placeholder="(555) 000-0000"
              type="number"
            />
            <br />

            {/* Email */}
            <label className="text-[#0E141B] text-[13px]">
              Elektron Po’chta
            </label>
            <br />
            <input
              className="w-full h-[45px] border border-[#D0DBE7] rounded-[12px] mt-[7px] outline-none pl-[10px]"
              placeholder="user@example.com"
              type="email"
            />
            <br />

            {/* Passwords */}
            <div className="flex flex-col sm:flex-row gap-[10px]">
              
              {/* Password */}
              <div className="relative w-full">
                <label className="text-[#0E141B] text-[13px]">
                  Parol
                </label>
                <br />
                <input
                  className="w-full h-[45px] border border-[#D0DBE7] rounded-[12px] mt-[7px] outline-none pl-[10px] pr-[40px]"
                  placeholder="••••••••"
                  type={showPassword ? "text" : "password"}
                />
                <span
                  className="absolute right-[12px] top-[38px] cursor-pointer text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {/* Confirm Password */}
              <div className="relative w-full">
                <label className="text-[#0E141B] text-[13px]">
                  Parolni Tasqidlang
                </label>
                <br />
                <input
                  className="w-full h-[45px] border border-[#D0DBE7] rounded-[12px] mt-[7px] outline-none pl-[10px] pr-[40px]"
                  placeholder="••••••••"
                  type={showConfirmPassword ? "text" : "password"}
                />
                <span
                  className="absolute right-[12px] top-[38px] cursor-pointer text-gray-500"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            {/* Terms and Policy */}
            <div className="flex items-center gap-[12px] mt-[28px]">
              <input
                className="w-[18px] h-[18px] border border-[#D0DBE7] rounded-[12px]"
                type="checkbox"
              />
              <p className="text-[12px] text-[#0E141B]">
                Dasturdan Foydalanish{" "}
                <span className="text-[#197FE6]">
                  Shartlariga
                </span>{" "}
                Roziman
              </p>
            </div>

            {/* Registration Button */}
            <div className="mt-[25px]">
              <button className="bg-[#197FE6] w-full h-[50px] rounded-[12px]">
                <a
                  className="text-[#fff] text-[16px] font-bold"
                  href="/Login"
                >
                  Ro’yxatdan O’tish
                </a>
              </button>
            </div>

            <p className="text-center mt-[15px]">Yoki</p>

            <div className="mt-[25px]">
              <button className="bg-[#197FE6] w-full h-[50px] rounded-[12px]">
                <a
                  className="text-[#fff] text-[16px] font-bold"
                  href="/Login"
                >
                  Kirish
                </a>
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;