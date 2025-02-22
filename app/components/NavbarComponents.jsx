
"use client"
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/features/user/userSlice";
import { useRouter } from "next/navigation";

const NavbarCompnents = () => {

    const [isUserLogin , setIsUserLogin] = useState(null);
    const [isMouseEnter , setIsMouseEnter] = useState(false);
    const userData = useSelector(state => state.user) ;
    const dispatch = useDispatch() ;
    const router = useRouter() ;

    const navlist = [
        {
            name : "Home" ,
            path : "/" ,
        },
        {
            name : "About" ,
            path : "/about" ,
        },
    ]
    
    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsUserLogin(token);
        
        if (token) {
            axios.get("http://localhost:5555/api/v1/users/get-my-data", {
                withCredentials: true,
                headers: {
                    Authorization: token
                }
            })
            .then((res) => {
                if(res?.data?.success){
                    dispatch(setUser(res?.data?.data))
                }
            })
            .catch((err) => console.error("Error fetching user data:", err));
        }
    }, [isUserLogin]);
    
    const handleLogOut = () => {
        axios.post("http://localhost:5555/api/v1/auth/logOut", {} , {
            withCredentials: true,
            headers: {
                Authorization: isUserLogin
            }
        })
        .then((res) => {
            if(res?.data?.success){
                dispatch(setUser({})) ;
            }
        })
        .catch((err) => console.error("Error fetching user data:", err));
        localStorage.removeItem('token') ;
        setIsUserLogin(null) ;
        router.push('/') ;
    }

    return (
        <div className="flex items-center gap-5 gro">
                {navlist?.map(list => <Link key={list.path} className="text-xl hover:text-[#36f63d] duration-200" href={list?.path}>{list?.name}</Link>)}
                {
                    !isUserLogin ?
                    <div className="">
                        <Link href={'/login'}>
                            <button className="border border-black hover:border-[#36f63d] hover:text-[#2dcb32] duration-300 rounded-md py-1 px-3 mx-1">Login</button>
                        </Link>
                        <Link href={'/register'}>
                            <button className="border border-black hover:border-[#36f63d] hover:text-[#2dcb32] duration-300 rounded-md py-1 px-3 mx-1">Register</button>
                        </Link>
                    </div> :
                    <div className="w-10 h-10 relative rounded-full" onClick={() => setIsMouseEnter(!isMouseEnter)}>
                        <Image src={userData?.profileIamge ? userData?.profileIamge : '/logo.png'} alt="User Logo" width={'40'} height={'40'} className="w-full rounded-full cursor-pointer"/>
                        <div className={`absolute top-10 min-h-40 w-60 items-center gap-1 right-0 border border-[#36f63d] rounded-md bg-black p-4 text-white ${isMouseEnter ? "flex flex-col" : "hidden"}`}>
                            <p className="">{userData?.name}</p>
                            <p className="">{userData?.email}</p>
                            <p className="">{userData?.phone}</p>
                            <Link href={'/profile'} className="w-full">
                                <button className="bg-[#0ca811] w-full rounded py-1 hover:text-black duration-200 border boder hover:border-[#0ca811] mt-1">Profile</button>
                            </Link>
                            <button className="bg-[#0ca811] w-full rounded py-1 hover:text-black duration-200 border boder hover:border-[#0ca811] mt-1" onClick={handleLogOut}>Log Out</button>
                        </div>
                    </div>
                }
            </div>
    );
};

export default NavbarCompnents;
