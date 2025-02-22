
"use client"
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { setUser } from "../redux/features/user/userSlice";

const registerPage = () => {

    const [passType , setPassType] = useState(false) ;
    const router = useRouter() ;
    const dispatch = useDispatch() ;
    
    const handleRegister = async (e) => {
        e.preventDefault() ;
        const form = e.target ;
        const name = form.name.value ;
        const image = form.image.files[0] ;
        const email = form.email.value ;
        const phone = form.phone.value ;
        const password = form.password.value ;

        const key = '9dbc68cdb2a571d4538fd1298a4ff013';
        const apiUrl = `https://api.imgbb.com/1/upload?key=${key}`;

        const formData = new FormData() ;
        formData.append("image" , image)
        const { data: imageUrl } = await axios.post(apiUrl, formData, { headers: { "content-type": "multipart/form-data" } });
        
        const userData = { name , email , phone , password , profileImage : imageUrl?.data?.url } ;
        const {data} = await axios.post("http://localhost:5555/api/v1/auth/register-user" , userData , {withCredentials : true} ) ;

        if(data?.success){
            dispatch(setUser(userData)) ;
            localStorage.removeItem("token") ;
            localStorage.setItem('token' , data?.data?.token) ;
            toast.success("User register Successfull !") ;
            setTimeout(() => {
                router.push('/') ;
            }, 1000);
        }
    }

    return (
        <div>
            <div className="min-h-[80vh] ms-auto w-full flex flex-col items-center justify-center gro">
                <div className="bg-[#09280990] border border-[#36f63d] bg-opacity-25 w-80 py-5 flex flex-col items-center justify-center rounded-md">
                    <h1 className="text-2xl mb-8 font-semibold">Register</h1>
                    <form onSubmit={handleRegister} className="flex flex-col gap-3 w-full px-5">
                        <input name="name" type="text" className="focus:border-[#36f63d] border w-full rounded px-3 py-1 text-lg duration-300 focus:outline-none" placeholder="Full Name"/>
                        <input name="image" type="file" className="focus:border-[#36f63d] border w-full rounded px-3 py-1 text-lg duration-300 focus:outline-none" placeholder="Full Name"/>
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
                        <input type="submit" className="w-full mt-5 bg-black rounded-md cursor-pointer hover:bg-[#36f63d] hover:text-black duration-300 text-white py-2 font-medium" value={'Register'}/>
                    </form>
                    <p className="mt-4">Already have an account <Link className="text-[#36f63d]" href={'/login'}>Login</Link></p>
                </div>
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

export default registerPage;
