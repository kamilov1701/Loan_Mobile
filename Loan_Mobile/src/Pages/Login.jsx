import React from "react";
import Logoimg from "../../public/MAX_V_Logo.png";
import Cashimg from "../../public/Cash.png";

function Login() {
    return <div>
        <div className="container mx-auto">
            <center>
                <img className="pt-[12px]" src={Logoimg} alt="" />

                <div className="bg-[#E6F0FC] max-w-[60px] w-full h-[60px] flex justify-center items-center rounded-[12px] mt-[37px]">
                    <img className="w-[28px] h-[28px]" src={Cashimg} alt="" />
                </div>
            </center>

            {/* Login Form */}

            <div className="text-center mt-[8px]">
                <h2 className="text-[#111111] text-[24px] font-bold">Dasturga Kirish</h2>
                <p className="text-[14px] text-[#666666] mt-[6px]">Qarzlarni Nazorat Qilish Uchun Profilingizga Kiring</p>
            </div>

            {/* Form */}

            <div className="mt-[28px] ml-[25px]">
                <form action="#!">
                    <label className="" htmlFor="">Elektron Po’chta</label><br />
                    <input className="max-w-[300px] w-full h-[45px] pl-[10px] border #D0DBE7 rounded-[12px] outline-none mt-[8px]" placeholder="user@example.com" type="email" name="" id="" /><br />
                    <label className="" htmlFor="">Parol</label><br />
                    <input className="max-w-[300px] w-full h-[45px] pl-[10px] border #D0DBE7 rounded-[12px] outline-none mt-[8px]" placeholder="••••••••" type="password" name="" id="" />
                </form>
            </div>
        </div>
    </div>;
}

export default Login;