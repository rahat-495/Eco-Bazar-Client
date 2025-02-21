"use client"
import Link from "next/link";

const Navbar = () => {

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

    const isUserLogin = localStorage.getItem("token") ;

    return (
        <div className={`gro sticky top-0 flex justify-between text-black py-3 max-w-[1440px] mx-auto`}>
            <h1 className="font-semibold text-3xl">EcoMart</h1>
            <div className="flex items-center gap-5">
                {navlist?.map(list => <Link key={list.path} className="text-xl hover:text-[#36f63d] duration-200" href={list?.path}>{list?.name}</Link>)}
                {
                    !isUserLogin &&
                    <div className="">
                        <Link href={'/login'}>
                            <button className="border border-black hover:border-[#36f63d] hover:text-[#2dcb32] duration-300 rounded-md py-1 px-3 mx-1">Login</button>
                        </Link>
                        <Link href={'/register'}>
                            <button className="border border-black hover:border-[#36f63d] hover:text-[#2dcb32] duration-300 rounded-md py-1 px-3 mx-1">Register</button>
                        </Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default Navbar;
