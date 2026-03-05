// // // import React from "react";
// // // import Logoimg from "../../public/MAX_V_Logo.png";
// // // import Cashimg from "../../public/Cash.png";

// // // function Login() {
// // //     return <div>
// // //         <div className="container mx-auto">
// // //             <center>
// // //                 <img className="pt-[12px]" src={Logoimg} alt="" />

// // //                 <div className="bg-[#E6F0FC] max-w-[60px] w-full h-[60px] flex justify-center items-center rounded-[12px] mt-[37px]">
// // //                     <img className="w-[28px] h-[28px]" src={Cashimg} alt="" />
// // //                 </div>
// // //             </center>

// // //             {/* Login Form */}

// // //             <div className="text-center mt-[8px]">
// // //                 <h2 className="text-[#111111] text-[24px] font-bold">Dasturga Kirish</h2>
// // //                 <p className="text-[14px] text-[#666666] mt-[6px]">Qarzlarni Nazorat Qilish Uchun Profilingizga Kiring</p>
// // //             </div>

// // //             {/* Form */}

// // //             <div className="mt-[28px] ml-[25px]">
// // //                 <form action="#!">
// // //                     <label className="" htmlFor="">Elektron Po’chta</label><br />
// // //                     <input className="max-w-[300px] w-full h-[45px] pl-[10px] border #D0DBE7 rounded-[12px] outline-none mt-[8px]" placeholder="user@example.com" type="email" name="" id="" /><br />
// // //                     <label className="" htmlFor="">Parol</label><br />
// // //                     <input className="max-w-[300px] w-full h-[45px] pl-[10px] border #D0DBE7 rounded-[12px] outline-none mt-[8px]" placeholder="••••••••" type="password" name="" id="" />

// // //                     {/* Login Button */}

// // //                     <div className="mt-[25px]">
// // //                         <button className="bg-[#197FE6] max-w-[300px] w-full h-[50px] py-[12px] px-[84px] rounded-[12px]"><a className="text-[#fff] text-[16px] font-bold" href="/">Profilga Kirish → </a></button>
// // //                     </div>
// // //                 </form>
// // //             </div>
// // //         </div>
// // //     </div>;
// // // }

// // // export default Login;





















// import React, { useState } from "react";
// import Logoimg from "../../public/MAX_V_Logo.png";
// import Cashimg from "../../public/Cash.png";
// import { FaEye, FaEyeSlash } from "react-icons/fa";

// function Login() {
//     const [showPassword, setShowPassword] = useState(false);

//     return (
//         <div className="container mx-auto px-4">
//             <center>
//                 <img
//                     className="pt-[12px] w-[120px] sm:w-[150px] md:w-[180px] mx-auto"
//                     src={Logoimg}
//                     alt=""
//                 />

//                 <div className="bg-[#E6F0FC] max-w-[60px] w-full h-[60px] flex justify-center items-center rounded-[12px] mt-[37px] mx-auto">
//                     <img className="w-[28px] h-[28px]" src={Cashimg} alt="" />
//                 </div>
//             </center>

//             {/* Login Form */}

//             <div className="text-center mt-[8px]">
//                 <h2 className="text-[#111111] text-[20px] sm:text-[24px] font-bold">
//                     Dasturga Kirish
//                 </h2>
//                 <p className="text-[13px] sm:text-[14px] text-[#666666] mt-[6px]">
//                     Qarzlarni Nazorat Qilish Uchun Profilingizga Kiring
//                 </p>
//             </div>

//             {/* Form */}

//             <div className="mt-[28px] flex justify-center">
//                 <div className="w-full max-w-[300px] sm:max-w-[380px] md:max-w-[420px]">
//                     <form action="#!">

//                         {/* Email */}
//                         <label>Elektron Po’chta</label>
//                         <br />
//                         <input
//                             className="w-full h-[45px] pl-[10px] border border-[#D0DBE7] rounded-[12px] outline-none mt-[8px]"
//                             placeholder="user@example.com"
//                             type="email"
//                         />
//                         <br />

//                         {/* Password */}
//                         <label className="mt-[15px] block">Parol</label>
//                         <div className="relative">
//                             <input
//                                 className="w-full h-[45px] pl-[10px] pr-[40px] border border-[#D0DBE7] rounded-[12px] outline-none mt-[8px]"
//                                 placeholder="••••••••"
//                                 type={showPassword ? "text" : "password"}
//                             />
//                             <span
//                                 className="absolute right-[12px] top-[22px] cursor-pointer text-gray-500"
//                                 onClick={() => setShowPassword(!showPassword)}
//                             >
//                                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//                             </span>
//                         </div>

//                         {/* Login Button */}

//                         <div className="mt-[25px]">
//                             <button className="bg-[#197FE6] w-full h-[50px] rounded-[12px]">
//                                 <a
//                                     className="text-[#fff] text-[16px] font-bold"
//                                     href="/"
//                                 >
//                                     Profilga Kirish →
//                                 </a>
//                             </button>
//                         </div>

//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Login;



































// // import { useState } from "react";
// // import { signInWithEmailAndPassword } from "firebase/auth";
// // import { auth } from "../firebase";
// // import { useNavigate, Link } from "react-router-dom";

// // function Login() {
// //     const navigate = useNavigate();
// //     const [email, setEmail] = useState("");
// //     const [password, setPassword] = useState("");

// //     const handleLogin = async (e) => {
// //         e.preventDefault();
// //         try {
// //             await signInWithEmailAndPassword(auth, email, password);
// //             navigate("/");
// //         } catch (error) {
// //             alert(error.message);
// //         }
// //     };

// //     return (
// //         <div className="p-5">
// //             <h2>Login</h2>
// //             <form onSubmit={handleLogin}>
// //                 <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
// //                 <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
// //                 <button type="submit">Login</button>
// //             </form>
// //             <Link to="/register">Create Account</Link>
// //         </div>
// //     );
// // }

// // export default Login;

































import React, { useState } from "react";
import Logoimg from "../../public/MAX_V_Logo.png";
import Cashimg from "../../public/Cash.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="container mx-auto px-4">
            <center>
                <img
                    className="pt-[12px] w-[120px] sm:w-[150px] md:w-[180px] mx-auto"
                    src={Logoimg}
                    alt=""
                />

                <div className="bg-[#E6F0FC] max-w-[60px] w-full h-[60px] flex justify-center items-center rounded-[12px] mt-[37px] mx-auto">
                    <img className="w-[28px] h-[28px]" src={Cashimg} alt="" />
                </div>
            </center>

            <div className="text-center mt-[8px]">
                <h2 className="text-[#111111] text-[20px] sm:text-[24px] font-bold">
                    Dasturga Kirish
                </h2>
                <p className="text-[13px] sm:text-[14px] text-[#666666] mt-[6px]">
                    Qarzlarni Nazorat Qilish Uchun Profilingizga Kiring
                </p>
            </div>

            <div className="mt-[28px] flex justify-center">
                <div className="w-full max-w-[300px] sm:max-w-[380px] md:max-w-[420px]">
                    <form onSubmit={handleLogin}>

                        <label>Elektron Po’chta</label>
                        <br />
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full h-[45px] pl-[10px] border border-[#D0DBE7] rounded-[12px] outline-none mt-[8px]"
                            placeholder="user@example.com"
                            type="email"
                        />
                        <br />

                        <label className="mt-[15px] block">Parol</label>
                        <div className="relative">
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full h-[45px] pl-[10px] pr-[40px] border border-[#D0DBE7] rounded-[12px] outline-none mt-[8px]"
                                placeholder="••••••••"
                                type={showPassword ? "text" : "password"}
                            />
                            <span
                                className="absolute right-[12px] top-[22px] cursor-pointer text-gray-500"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>

                        <div className="mt-[25px]">
                            <button
                                type="submit"
                                className="bg-[#197FE6] w-full h-[50px] rounded-[12px]"
                            >
                                <span className="text-[#fff] text-[16px] font-bold">
                                    Profilga Kirish →
                                </span>
                            </button>

                            <p className="mt-[20px]">Akkauntingiz yo'qmi? <span className="text-[#2d5bf0] ml-[10px]"><a href="/Register">Ro'yhatdan O'ting</a></span></p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;