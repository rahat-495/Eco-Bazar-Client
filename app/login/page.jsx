
"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye } from 'react-icons/fa';
import { LuEyeClosed } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { setUser } from "../redux/features/user/userSlice";
import axios from "axios";

const loginPage = () => {

    const [passType , setPassType] = useState(false) ;
    const router = useRouter() ;
    const dispatch = useDispatch() ;

    const handleLogin = async (e) => {
        e.preventDefault() ;
        const form = e.target ;
        const email = form.email.value ;
        const phone = form.phone.value ;
        const password = form.password.value ;
        const userData = {email , phone , password} ;
        const {data} = await axios.post("http://localhost:5555/api/v1/auth/login-user" , userData , {withCredentials : true} ) ;

        const {profileImage , role , name} = data?.data?.userData ;

        if(data?.success){
            dispatch(setUser({name , email , phone , profileImage , role}))
            localStorage.removeItem("token") ;
            localStorage.setItem('token' , data?.data?.token) ;
            toast.success("User login Successfull !") ;
            setTimeout(() => {
                router.push('/') ;
                window.location.reload() ;
            }, 1000);
        }
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
            <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme="light"
            transition={Bounce}
            />
        </div>
    );
};

export default loginPage;
