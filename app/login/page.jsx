
"use client"
import Link from "next/link";
import { useState } from "react";
import { FaEye } from 'react-icons/fa';
import { LuEyeClosed } from "react-icons/lu";

const loginPage = () => {

    const [passType , setPassType] = useState(false) ;

    const handleLogin = (e) => {
        e.preventDefault() ;
        const form = e.target ;
        const email = form.email.value ;
        const phone = form.phone.value ;
        const password = form.password.value ;
        console.log(email , phone , password);
    }

    return (
        <div className="min-h-[80vh] ms-auto w-full flex flex-col items-center justify-center gro">
            <div className="bg-[#09280990] border border-[#36f63d] bg-opacity-25 w-80 py-5 flex flex-col items-center justify-center rounded-md">
                <h1 className="text-2xl mb-8 font-semibold">Login</h1>
                <form onSubmit={handleLogin} className="flex flex-col gap-3 w-full px-5">
                    <input name="email" type="text" className="focus:border-[#36f63d] border w-full rounded px-3 py-1 text-lg duration-300 focus:outline-none" placeholder="Email"/>
                    <input name="phone" type="text" className="focus:border-[#36f63d] border w-full rounded px-3 py-1 text-lg duration-300 focus:outline-none" placeholder="Phone"/>
                    <div className="relative">
                        <input name="password" type={passType ? "text" : "password"} className="focus:border-[#36f63d] border w-full rounded px-3 py-1 text-lg duration-300 focus:outline-none" placeholder="Password"/>
                        {
                            !passType ? 
                            <FaEye onClick={() => setPassType(!passType)} className="absolute cursor-pointer top-3 right-3 text-lg"/> :
                            <LuEyeClosed onClick={() => setPassType(!passType)} className="absolute cursor-pointer top-3 right-3 text-lg"/>
                        }
                    </div>
                    <input type="submit" className="w-full mt-5 bg-black rounded-md cursor-pointer hover:bg-[#36f63d] hover:text-black duration-300 text-white py-2 font-medium" value={'Login'}/>
                </form>
                <p className="mt-4">Don't have an account <Link className="text-[#36f63d]" href={'/register'}>Register</Link></p>
            </div>
        </div>
    );
};

export default loginPage;
