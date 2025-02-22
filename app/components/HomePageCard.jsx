
"use client"
import axios from "axios";
import Link from "next/link";
import { IoBagHandle } from "react-icons/io5";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const HomePageCard = ({item , handleDelete}) => {

    const userData = useSelector(state => state.user) ;

    let rating = [] ;
    for(let i = 0 ; i < item?.rating ; i++){
        rating.push(i) ;
    }

    return (
        
        userData?.role === "user" ? 
        
        <Link href={`/items/${item?._id}`}>
            <div className="card bg-base-100 shadow-xl gro cursor-pointer">

                <figure>
                    <img className="w-full h-92" src={item?.image} alt="Shoes"/>
                </figure>

                <div className="flex items-start justify-between p-5">

                    <div className="flex flex-col gap-2">
                        <h2 className="card-title">
                            {item?.title}
                        </h2>
                        <h2 className="text-xl font-semibold">
                            ${item?.price}
                        </h2>
                        <h2 className="card-title">
                            {rating.map((rating) => <div key={rating} className="rating rating-sm">
                                <input disabled type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>)}
                        </h2>
                    </div>

                    <div className="">
                        {
                            userData?.role === "user" ?
                            <button className="border mt-4 hover:border-[#36f63d] hover:text-[#36f63d] duration-300 rounded-full p-2">
                                <IoBagHandle className="text-3xl"/>
                            </button> : 
                            <div className="flex flex-col gap-2">
                                <Link href={`/update-item/${item?._id}`}>
                                    <button className="border hover:border-[#36f63d] hover:text-[#36f63d] duration-300 rounded-full p-2">Update</button>
                                </Link>
                                <button onClick={() => handleDelete(item?._id)} className="border hover:border-[#b92828] hover:text-[#b92828] duration-300 rounded-full p-2">Delete</button>
                            </div>
                        }
                    </div>

                </div>

            </div>
        </Link> : 
        <div className="card bg-base-100 shadow-xl gro cursor-pointer">

            <figure>
                <img className="w-full h-92" src={item?.image} alt="Shoes"/>
            </figure>

            <div className="flex items-start justify-between p-5">

                <div className="flex flex-col gap-2">
                    <h2 className="card-title">
                        {item?.title}
                    </h2>
                    <h2 className="text-xl font-semibold">
                        ${item?.price}
                    </h2>
                    <h2 className="card-title">
                        {rating.map((rating) => <div key={rating} className="rating rating-sm">
                            <input disabled type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>)}
                    </h2>
                </div>

                <div className="">
                    {
                        userData?.role === "user" ?
                        <button className="border mt-4 hover:border-[#36f63d] hover:text-[#36f63d] duration-300 rounded-full p-2">
                            <IoBagHandle className="text-3xl"/>
                        </button> : 
                        <div className="flex flex-col gap-2">
                            <Link href={`/update-item/${item?._id}`}>
                                <button className="border hover:border-[#36f63d] hover:text-[#36f63d] duration-300 rounded-full p-2">Update</button>
                            </Link>
                            <button onClick={() => handleDelete(item?._id)} className="border hover:border-[#b92828] hover:text-[#b92828] duration-300 rounded-full p-2">Delete</button>
                        </div>
                    }
                </div>

            </div>

        </div>
    );
};

export default HomePageCard;
